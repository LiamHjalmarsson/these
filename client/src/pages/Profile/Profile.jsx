import React, { useEffect, useState } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import SidebarNav from './components/SidebarNav';
import SidebarRewards from './components/SidebarRewards';
import ProdileDetails from "./components/ProdileDetails";
import Rewards from './components/Rewards';
import Achivments from './components/Achivments';
import Recensioner from './components/Recensioner';
import useFetch from '../../hooks/useFetch';

const Profile = () => {
    let { id } = useParams();
    let userId = JSON.parse(localStorage.getItem("user"));

    let { data } = useFetch(`/api/users/${userId}`);

    let { data: achivmentsData } = useFetch("/api/achivments");

    let links = ["profile", "lojalitet", "achivments", "resentioner"];

    return (
        <Deafult>
            <div className='flex my-12 px-10 min-h-[69vh] flex-col'>

                <SidebarNav id={id} links={links} />

                {
                    data && (
                        <main className='flex-grow flex justify-center items-start'>

                            {
                                id === "profile" && (
                                    <ProdileDetails data={data.user} />
                                )
                            }

                            {
                                id === "lojalitet" && (
                                    <Rewards data={data.user} />
                                )
                            }

                            {
                                id === "achivments" && (
                                    <Achivments data={data.user} achivment={achivmentsData} />
                                )
                            }

                            {
                                id === "resentioner" && (
                                    <Recensioner data={data.user} />
                                )
                            }
                        </main>
                    )
                }

            </div>
        </Deafult>
    );
}

export default Profile;
