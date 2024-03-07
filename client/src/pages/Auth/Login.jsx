import React, { useState } from 'react';
import Input from '../../components/Elements/Input';
import { Link, useNavigate } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Heading from '../../components/Elements/Heading/Heading';

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

            console.log(rep);
            
            let res = await rep.json();
            console.log(res);
            
            localStorage.setItem("user", JSON.stringify(res.user._id));

            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Deafult>
            <div className='h-[76vh] flex'>
                <div className='h-full w-96 bg-black'></div>
                <div className='flex-grow h-full flex justify-center items-center'>
                    <form className="flex flex-col w-96 gap-8" onSubmit={submitHandler}>
                        <Heading heading="Login" />
                        <Input
                            input={{
                                id: "name",
                                type: "name",
                                autoComplete: "off"
                            }}
                            onChange={handleNameChange}
                            value={name}
                        />
                        <Input
                            input={{
                                id: "password",
                                type: "password",
                                autoComplete: "off"
                            }}
                            onChange={handlePasswordChange}
                            value={password}
                        />
                        <button>
                            Login
                        </button>
                        <div className='flex flex-col items-center'>
                            <div>
                                Not a member?
                            </div>
                            <Link to='/register'>
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
                <div className='h-full w-96 bg-black'></div>
            </div>
        </Deafult>
    );
}

export default Login;