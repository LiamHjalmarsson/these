import React, { useEffect } from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const ProfileLanding = () => {
    let navigate = useNavigate()
    let userId = JSON.parse(localStorage.getItem("user"));
    let { data } = useFetch(`/api/users/${userId}`);

    useEffect(() => {
        if (!userId) {
            navigate("/register");
        }
    }, []);

    return (
        <Deafult>
            {
                data && (
                    <>
                        <Header user={data.user} />

                        <div className='max-w-6xl grid grid-cols-2 gap-12 mx-auto mb-40 mt-56'>
                            <ProfileCard heading="Profile" details="Justera profile detaljer och kontkat information" icon={<FaRegUser />} link="profile" data={data} />
                            <ProfileCard heading="Lojalitet" details="Justera profile detaljer och kontkat information" icon={< MdOutlineRateReview />} link="lojalitet" data={data} />
                            <ProfileCard heading="Achivments" details="Justera profile detaljer och kontkat information" icon={< GoTrophy />} link="achivments" data={data} />
                            <ProfileCard heading="Recentioner" details="Justera profile detaljer och kontkat information" icon={< MdOutlineRateReview />} link="resentioner" data={data} />
                        </div>
                    </>
                )
            }
        </Deafult>
    );
}

export default ProfileLanding;
