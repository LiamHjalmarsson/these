import React, { useState } from 'react';
import Input from '../../components/Elements/Input';
import { Link, useNavigate } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Heading from '../../components/Elements/Heading/Heading';

const Register = () => {
    let navigate = useNavigate();

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

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

        await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        navigate("/login");
    };

    return (
        <Deafult>
            <div className='h-[76vh] flex'>
                <div className='h-full w-96 bg-black'></div>
                <div className='flex-grow h-full flex justify-center items-center'>
                    <form className="flex flex-col w-96 gap-8" onSubmit={submitHandler}>
                        <Heading heading="Register" />
                        <Input
                            input={{
                                id: "name",
                                type: "name"
                            }}
                            onChange={handleNameChange}
                            value={name}
                        />
                        <Input
                            input={{
                                id: "email",
                                type: "email"
                            }}
                            onChange={handleEmailChange}
                            value={email}
                        />
                        <Input
                            input={{
                                id: "password",
                                type: "password"
                            }}
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <button>
                            Register
                        </button>
                        <div className='flex flex-col items-center'>
                            <div>
                                Already a member?
                            </div>
                            <Link to='/login' className='member-btn'>
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='h-full w-96 bg-black'></div>
            </div>
        </Deafult>
    );
}

export default Register;
