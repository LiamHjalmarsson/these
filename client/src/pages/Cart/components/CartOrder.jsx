import React, { useState } from 'react';
import CartOrderDetail from './CartOrderDetail';
import SecondaryButton from '../../../components/Elements/SecondaryButton';
import Input from '../../../components/Elements/Input';
import PrimaryButton from '../../../components/Elements/PrimaryButton';

const CartOrder = ({ data, price, onSubmitCart, discount, setDiscount, user }) => {
    let [userPoints, setUserPoints] = useState("");
    let [error, setError] = useState("");

    let handleUserPoints = (e) => {
        setUserPoints(e.target.value);
        if (data) {
            if (data.user.activePoints < e.target.value) {
                setError("Inte tillräckligt med poäng");
            } else {
                setError("");
            }
        }
    }

    let applyDiscount = () => {
        if (!error) {
            setDiscount(price - userPoints);
        }
    }

    let submitHandler = async (e) => {
        e.preventDefault();
        try {
            await onSubmitCart();
        } catch (error) {
            console.error('Error purchasing:');
        }
    }

    return (
        <div className='w-1/2 flex justify-center items-start'>
            <div className='flex flex-col gap-8 max-w-lg w-full'>
                <h3 className='text-5xl tracking-wider'>
                    Order
                </h3>

                <CartOrderDetail text="Total Summa: " detail={price + " kr"} />

                <CartOrderDetail text="Fraktavgifter" detail={price >= 1000 && "0" || "75" + " kr"} />

                {
                    discount > 0 && <CartOrderDetail text="Summa att betla" detail={discount + " kr"} />
                }

                {
                    user &&
                    <CartOrderDetail text={`Du tjänar ${discount} poäng på ditt köp`} />
                    ||
                    <CartOrderDetail text={`Du tjänar ${price} poäng på ditt köp om du blir medlem`} />
                }

                <div className='flex flex-col'>
                    <div className='flex-grow flex justify-center items-center gap-8 '>
                        <Input
                            input={{
                                type: "number",
                                min: 0,
                            }}
                            custom={`${error ? "border-b-red text-red" : ""}`}
                            onChange={handleUserPoints}
                            value={userPoints}
                        />
                        <SecondaryButton custom={`border-primary text-primary hover:bg-primary hover:text-white`} onClick={applyDiscount}>
                            Ange
                        </SecondaryButton>
                    </div>
                    {
                        error && (
                            <div className='mt-2 text-red'>
                                {
                                    error
                                }
                            </div>
                        )
                    }
                </div>

                {
                    data && (
                        <div className='flex w-full'>
                            <h2 className='flex-grow'>
                                Dinna samlade poäng
                            </h2>
                            <div>
                            </div>
                        </div>
                    )
                }

                <form onSubmit={submitHandler}>
                    <PrimaryButton custom="w-full mb-12">
                        Köp
                    </PrimaryButton>
                </form>
            </div>
        </div>
    );
}

export default CartOrder;
