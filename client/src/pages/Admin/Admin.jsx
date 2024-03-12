import React, { useState } from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Clothings from "./components/Clothings";

const Admin = () => {
    let [clothingOpen, setClothingOpen] = useState(false)

    let clotingHandler = () => {
        setClothingOpen(!clothingOpen);
    }

    return (
        <Deafult>
            <div className='min-h-[80vh]'>
                <nav className='max-w-md mx-auto my-10'>
                    <ul className='flex gap-8 items-center justify-center'>
                        <li>
                            <button onClick={clotingHandler}>
                                Clothing
                            </button>
                        </li>
                        <li>
                            <button>
                                Categorys
                            </button>
                        </li>
                        <li>
                            <button>
                                Achivments
                            </button>
                        </li>
                    </ul>
                </nav>

                <div className="max-w-md mx-auto my-10">
                    {
                        clothingOpen && <Clothings />
                    }
                </div>

            </div>
        </Deafult>
    );
};

export default Admin;
