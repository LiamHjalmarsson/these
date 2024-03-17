import React, { useState } from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Section from '../../components/Layouts/Section/Section';
import Gifts from './components/Gifts';
import Image from '../../components/Elements/Image';
import Heading from '../../components/Elements/Heading/Heading';
import img from "/images/newsletter.jpg"
import Input from '../../components/Elements/Input';
import PrimaryButton from '../../components/Elements/PrimaryButton';
import useFetch from '../../hooks/useFetch';
import { toast } from 'react-toastify';
import { updateAchievements } from '../../utils/updateAchievements ';

const NewsletterPage = () => {
    let [selectedGift, setSelectedGift] = useState({});
    let [submitted, setSubmitted] = useState(false);

    let user = JSON.parse(localStorage.getItem('user'));

    let { data } = useFetch(`api/users/${user}`);

    let handleGiftSelection = (item) => {
        setSelectedGift(item);
    };

    let submitHandler = async (e) => {
        e.preventDefault();
        
        setSubmitted(true);

        if (data) {
            let updatedDiscounts = [...data.user.discounts, selectedGift];

            let updatedAch = updateAchievements(data, "nyhetsbrev", 100);

            let response = await fetch(`/api/users/${user}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    discounts: updatedDiscounts,
                    achivments: updatedAch
                })
            });

            if (!response.ok) {
                toast.error("Ett problem uppstod, försök igen");
            } else {
                toast.success("Du har nu fått en gåva och börjat prenumererar på vårt nyhetsbreve");
            }
        }
    };

    let gifts = [
        {
            category: "3 för 2",
            code: "treförrvå"
        },
        {
            category: "30 % på ditt köp",
            code: "30%påköp"
        },
        {
            category: "500 kr",
            code: "500kr"
        },
    ];

    return (
        <Deafult>   

            <Section>
                <Gifts gifts={gifts} handleGiftSelection={handleGiftSelection} selectedGift={selectedGift} submitted={submitted} />
            </Section>

            <div className='w-full h-[500px] flex gap-8 relative'>
                <div className='h-full w-full bg-slate-950'>
                    <Image img={img} custom='w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-90 w-full h-full object-cover' />
                </div>

                <div className='h-full w-full flex flex-col gap-8 justify-center items-center absolute '>
                    <form className='p-6 rounded-md bg-secondary bg-opacity-40 gap-4 text-white flex flex-col justify-center items-center max-w-md shadow-middle shadow-secondary' onSubmit={submitHandler}>
                        <Heading heading="Gå med för att ta del av din mystery gift" custom="text-white text-3xl" />
                        <Input
                            input={{ type: "email", placeholder: "Email" }}
                            custom="border-b-white text-white mb-4"
                        />
                        <PrimaryButton>
                            Prenumerera
                        </PrimaryButton>
                    </form>
                </div>
            </div>

        </Deafult>
    );
}

export default NewsletterPage;
