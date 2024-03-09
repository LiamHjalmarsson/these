import React, { useState } from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Section from '../../components/Layouts/Section/Section';
import Gifts from './components/Gifts';
import Image from '../../components/Elements/Image';
import Heading from '../../components/Elements/Heading/Heading';
import img from "/images/newsletter.jpg"
import Input from '../../components/Elements/Input';
import PrimaryButton from '../../components/Elements/PrimaryButton';

const NewsletterPage = () => {
    const [selectedGift, setSelectedGift] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleGiftSelection = (index) => {
        setSelectedGift(index);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Subscribed with gift:", selectedGift);
        setSubmitted(true);
    };

    let gifts = [
        {
            category: "1"
        },
        {
            category: "1"
        },
        {
            category: "1"
        },
    ];

    return (
        <Deafult>
            <Section>
                <Gifts gifts={gifts} handleGiftSelection={handleGiftSelection} selectedGift={selectedGift} submitted={submitted} />
            </Section>

            <div className='w-full h-[500px] flex gap-8 relative'>
                <div className='h-full w-full bg-slate-950'>
                    <Image img={img} custom='w-full h-full object-cover opacity-60' />
                </div>

                <div className='h-full w-full flex flex-col gap-8 justify-center items-center absolute '>
                    <form className='p-6 rounded-md bg-secondary bg-opacity-40 gap-4 text-white flex flex-col justify-center items-center max-w-md shadow-middle shadow-secondary' onSubmit={submitHandler}>
                        <Heading heading="Gå med för att ta del av din mystery gift" custom="text-white text-3xl" />
                        <Input
                            input={{ type: "email" }}
                            custom="border-b-white text-white mb-4"
                        />
                        <PrimaryButton>
                            Premenurera
                        </PrimaryButton>
                    </form>
                </div>
            </div>
        </Deafult>
    );
}

export default NewsletterPage;
