import React, { useState } from 'react';
import Input from '../../components/Elements/Input';
import { Link, useNavigate } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Heading from '../../components/Elements/Heading/Heading';
import img from "/images/banner.jpg";
import PrimaryButton from '../../components/Elements/PrimaryButton';
import {toast} from "react-toastify";

const Login = () => {
    let navigate = useNavigate();

    let [name, setName] = useState('');
    let [password, setPassword] = useState('');

    let handleNameChange = (e) => {
        setName(e.target.value);
    };

    let handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    let submitHandler = async (e) => {
        e.preventDefault();

        let data = {
            name,
            password,
        }

        try {
            let rep = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });


            let res = await rep.json();

            toast.success("Login successful");
            localStorage.setItem("user", JSON.stringify(res.user._id));

            navigate("/profile");
        } catch (error) {
            console.log(error);
            toast.success("Error login in");
        }
    };

    return (
        <Deafult>
            <div className='h-[72.5vh] relative flex'>
                <img className='h-full w-full object-cover' src={img} />
                <div className='flex-grow h-full absolute w-full flex justify-center items-center'>
                    <form className="flex flex-col w-1/4 min-w-96 gap-8 bg-white p-8" onSubmit={submitHandler}>
                        <Heading heading="Login" />
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
                                id: "Password",
                                type: "password",
                                autoComplete: "off"
                            }}
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <PrimaryButton>
                            Login
                        </PrimaryButton>
                        <div className='flex flex-col items-center'>
                            <div>
                                Not a member?
                            </div>
                            <Link to='/register' className='underline'>
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </Deafult>
    );
}

export default Login;