import React from 'react';
import CartItem from './CartItem';
import Input from '../../../components/Elements/Input';
import SecondaryButton from '../../../components/Elements/SecondaryButton';

const CartItems = ({ cartItems }) => {
    let totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    console.log(totalPrice);
    return (
        <div className='flex gap-20 w-full max-w-7xl'>
            <ul className='w-1/2 flex justify-end flex-col gap-8'>
                {
                    cartItems.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))
                }
            </ul>
            <div className='w-1/2 flex justify-center items-start'>
                <div className='flex flex-col gap-8 max-w-lg w-full'>
                    <h3 className='text-5xl tracking-wider'>
                        Order
                    </h3>
                    <div className='flex'>
                        <div className='flex-grow'>
                            Summa artiklar
                        </div>
                        <div>
                            {totalPrice + " kr"}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-grow'>
                            Fraktavgifter
                        </div>
                        <div>
                            {totalPrice >= 1000 && "0" || "75"} kr
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-grow'>
                            Totalt inkl. moms:
                        </div>
                        <div>
                            {totalPrice + " kr"}
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex-grow'>
                            Du tjänar {totalPrice} poäng på ditt köp
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-8'>
                        <div className='flex-grow'>
                            <Input input={{ id: "värdekod", type: "text" }} />
                        </div>
                        <SecondaryButton custom='border-primary text-primary'>
                            Ange
                        </SecondaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
