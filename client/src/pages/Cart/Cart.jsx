import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import { useSelector } from 'react-redux';
import Heading from '../../components/Elements/Heading/Heading';
import Section from '../../components/Layouts/Section/Section';
import EmptyCart from './components/EmptyCart';
import CartItems from './components/CartItems';

const Cart = () => {
    let cartItems = useSelector(state => state.cart.cartItems);

    return (
        <Deafult>
            <div className='min-h-[77vh]'>
                <Section>
                    <Heading heading="Kundvagn" />
                    <div className='w-full flex justify-center items-center mt-20'>
                        {!cartItems || cartItems.length === 0 ? (
                            <EmptyCart />
                        ) : (
                            <CartItems cartItems={cartItems} />
                        )}
                    </div>
                </Section>
            </div>
        </Deafult>
    );
}

export default Cart;
