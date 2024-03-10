import React from 'react';
import CartOrderDetail from './CartOrderDetail';
import SecondaryButton from '../../../components/Elements/SecondaryButton';
import Input from '../../../components/Elements/Input';

const CartOrder = ({price}) => {
    return (
        <div className='w-1/2 flex justify-center items-start'>
            <div className='flex flex-col gap-8 max-w-lg w-full'>
                <h3 className='text-5xl tracking-wider'>
                    Order
                </h3>

                <CartOrderDetail text="Summa artiklar" detail={price + " kr"} />

                <CartOrderDetail text="Fraktavgifter" detail={price >= 1000 && "0" || "75" + " kr"} />

                <CartOrderDetail text="Totalt inkl. moms:" detail={price + " kr"} />

                <CartOrderDetail text={` Du tjänar ${price} poäng på ditt köp`} />

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
    );
}

export default CartOrder;
