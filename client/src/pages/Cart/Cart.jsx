import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import { useDispatch, useSelector } from 'react-redux';
import Heading from '../../components/Elements/Heading/Heading';
import Section from '../../components/Layouts/Section/Section';
import EmptyCart from './components/EmptyCart';
import CartItems from './components/CartItems';
import CartOrder from './components/CartOrder';
import { increaseQuantity, decreaseQuantity } from '../../reducer/cartSlice';

const Cart = () => {
    let cartItems = useSelector(state => state.cart.cartItems);
    let totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    let dispatch = useDispatch();

    let handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item));
    };

    let handleDecreaseQuantity = (item) => {
        dispatch(decreaseQuantity(item));
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

                            <CartOrder price={totalPrice} />
                        </div>
                    </div>
                </Section>
            </div>
        </Deafult>
    );
}

export default Cart;
