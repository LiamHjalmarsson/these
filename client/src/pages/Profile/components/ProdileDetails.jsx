import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SecondaryButton from '../../../components/Elements/SecondaryButton';
import Input from '../../../components/Elements/Input';
import Heading from '../../../components/Elements/Heading/Heading';
import {toast} from "react-toastify";

const ProdileDetails = ({data}) => {
    console.log(data);
    let [email, setEmail] = useState(data.email);
    let [name, setName] = useState(data.name);

    let handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    let handleNameChange = (e) => {
        setName(e.target.value);
    };

    let submitHandler = async (e) => {
        e.preventDefault();
        
        let updateData = {
            userId: data._id, 
            email,
            name
        };

        try {
            await fetch(`/api/users/${data._id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateData),
            });

            toast.success("Updated user successfully");

        } catch (error) {
            console.log(error);
            toast.error("Failed to update user");
        }
    
    }

    let logoutHandler = async () => {

        try {
            await fetch("/api/auth/logout");
            localStorage.removeItem("user");
    
            toast.success("Loggade ut");
            navigate("/");
        } catch (error) {
            toast.error("Error to Log out");
        }
    }

    return (
        <div className='h-full flex flex-col gap-8 p-2'>
            <Heading heading="Profile" />
            <form className='w-96 flex flex-col gap-12 mt-12' onSubmit={submitHandler}>
                <Input
                    input={{
                        type: "text",
                        id: "email",
                    }}
                    value={email}
                    onChange={handleEmailChange}
                />
                <Input
                    input={{
                        type: "name",
                        id: "name",
                    }}
                    value={name}
                    onChange={handleNameChange}
                />

                <SecondaryButton custom="text-primary border-primary hover:bg-primary hover:text-white mt-4">
                    Uppdatera
                </SecondaryButton>
            </form>

            <div className='text-center'>
                <button className='' onClick={logoutHandler}>
                    Logga ut
                </button>
            </div>

        </div>
    );
}

export default ProdileDetails;
