import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryButton from '../../../components/Elements/SecondaryButton';
import Input from '../../../components/Elements/Input';
import Heading from '../../../components/Elements/Heading/Heading';

const ProdileDetails = ({data}) => {
    console.log(data);
    let [email, setEmail] = useState(data.email);

    let handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    return (
        <div className='h-full flex flex-col gap-8 p-2'>
            <Heading heading="Profile" />
            <form className='w-96 flex flex-col gap-8'>
                <Input
                    input={{
                        type: "text",
                        id: "email",
                    }}
                />
                <Input
                    input={{
                        type: "phone",
                        id: "phone",
                    }}
                />
                <Input
                    input={{
                        type: "kön",
                        id: "kön",
                    }}
                />

                <SecondaryButton custom="text-primary border-primary mt-4">
                    Uppdatera
                </SecondaryButton>
            </form>

            <div className='text-center'>
                <Link className=''>
                    Logga ut
                </Link>
            </div>

        </div>
    );
}

export default ProdileDetails;
