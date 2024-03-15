import React, { useState } from 'react';
import Deafult from '../../components/Layouts/Deafult';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Elements/Heading/Heading';
import Section from '../../components/Layouts/Section/Section';
import EmptyCart from './components/EmptyCart';
import CartItems from './components/CartItems';
import CartOrder from './components/CartOrder';
import { increaseQuantity, decreaseQuantity, clearCart } from '../../reducer/cartSlice';
import { toast } from 'react-toastify';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { updateAchievements } from '../../utils/updateAchievements ';

const Cart = () => {
    let navigation = useNavigate();

    let user = JSON.parse(localStorage.getItem("user"));

    let { data } = useFetch(`/api/users/${user}`);

    let cartItems = useSelector(state => state.cart.cartItems);
    let totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    let [discountedPrice, setDiscountedPrice] = useState(0);

    let dispatch = useDispatch();

    let handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item));
    };

    let handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item));
    };

    let submitCart = async () => {
        try {
            let cartData
            if (user) {
                let updatedActivePoints;
                let updatedAch;
                let userIdToSend = user ? user : null;

                if (discountedPrice > 0) {
                    updatedActivePoints = data.user.activePoints - (totalPrice - discountedPrice);
                } else {
                    updatedActivePoints = data.user.activePoints + totalPrice;
                }

                let totalPointsUpdate = data.user.totalPointsEarned + (totalPrice - discountedPrice);
                
                if (data.user.purchases.length <= 0) {
                    updatedAch = updateAchievements(data, "första beställning", 100);
                }

                await fetch(`/api/users/${user}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ 
                        activePoints: updatedActivePoints, 
                        totalPointsEarned: totalPointsUpdate, 
                        achivments: updatedAch 
                    })
                });

                cartData = {
                    userId: userIdToSend,
                    items: cartItems.map(item => ({
                        productId: item.id,
                        quantity: item.quantity,
                        price: item.price
                    })),
                    totalPrice: discountedPrice
                };

                toast.success("Fått ny prestation");
            } else {
                cartData = {
                    items: cartItems.map(item => ({
                        productId: item.id,
                        quantity: item.quantity,
                        price: item.price
                    })),
                    totalPrice: discountedPrice
                };
            }


            if (cartData.items.length <= 0) {
                toast.error("Inga varor tillagda")
                return;
            }

            let response = await fetch(`/api/purchase`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cartData)
            });

            if (response.ok) {
                dispatch(clearCart());
                toast.success("Köp genomfört");
                
                if (user) {
                    navigation("/profile");
                } else {
                    navigation("/")
                }

            } else {
                toast.error("Problem med att genomföra köp!");
            }

        } catch (error) {
            toast.error("Problem med att genomföra köp!");
        }
    };

    return (
        <Deafult>
            <div className='min-h-[77vh]'>
                <Section>
                    <Heading heading="Kundvagn" />
                    <div className='w-full flex justify-center mt-20'>
                        <div className='flex gap-20 w-full max-w-7xl'>

                            {!cartItems || cartItems.length === 0 ? (
                                <EmptyCart />
                            ) : (
                                <CartItems cartItems={cartItems} onDecreaseQuantity={handleDecreaseQuantity} onIncreaseQuantity={handleIncreaseQuantity} />
                            )}

                            <CartOrder data={data} price={totalPrice} user={user} onSubmitCart={submitCart} discount={discountedPrice} setDiscount={setDiscountedPrice} />
                        </div>
                    </div>
                </Section>
            </div>
        </Deafult>
    );
}

export default Cart;
