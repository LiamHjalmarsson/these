import React, { useState } from 'react';
import Input from '../../components/Elements/Input';
import { Link, useNavigate } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Heading from '../../components/Elements/Heading/Heading';
import {toast} from "react-toastify";
import img from "/images/banner.jpg";
import PrimaryButton from '../../components/Elements/PrimaryButton';

const Register = () => {
    let navigate = useNavigate();

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [error, setError] = useState([]);

    let handleNameChange = (e) => {
        setName(e.target.value);
    };

    let handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    let handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    let submitHandler = async (e) => {
        e.preventDefault();

        let data = {
            name,
            email,
            password
        }

        try {
            let rep = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            let res = await rep.json();

            localStorage.setItem("user", JSON.stringify(res.user._id));
            toast.success("User registration");

            navigate("/profile");
        } catch (error) {
            toast.error("e");
            return;
        }
    };

    return (
        <Deafult>
            <div className='h-[72.5vh] flex relative'>
                <img className='h-full w-full object-cover' src={img} />
                <div className='flex-grow h-full absolute w-full flex justify-center items-center'>
                    <form className="flex flex-col w-1/4 min-w-96 gap-8 bg-white p-8" onSubmit={submitHandler}>
                        <Heading heading="Register" />
                        <Input
                            input={{
                                id: "Name",
                                type: "name",
                                autoComplete: "off"
                            }}
                            onChange={handleNameChange}
                            value={name}
                        />
                        <Input
                            input={{
                                id: "Email",
                                type: "email",
                                autoComplete: "off"
                            }}
                            onChange={handleEmailChange}
                            value={email}
                        />
                        <Input
                            input={{
                                id: "Password",
                                type: "password",
                                autoComplete: "off"
                            }}
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <PrimaryButton>
                            Register
                        </PrimaryButton>
                        <div className='flex flex-col items-center'>
                            <div>
                                Already a member?
                            </div>
                            <Link to='/login' className='underline'>
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Deafult>
    );
}

export default Register;
