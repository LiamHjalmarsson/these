import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GoTrophy } from "react-icons/go";

const ProfileLanding = () => {
    let randomPoints = Math.floor(Math.random() * 101);

    return (
        <Deafult>
            <Header randomPoints={randomPoints} />

            <div className='max-w-6xl grid grid-cols-2 gap-8 mx-auto py-44'>
                <ProfileCard heading="Profile" details="Justera profile detaljer och kontkat information" icon={<FaRegUser />} />
                <ProfileCard heading="Lojalitet" details="Justera profile detaljer och kontkat information" icon={< MdOutlineRateReview />} />
                <ProfileCard heading="Achivments" details="Justera profile detaljer och kontkat information" icon={< GoTrophy />} />
                <ProfileCard heading="Recentioner" details="Justera profile detaljer och kontkat information" icon={< MdOutlineRateReview/>} />
            </div>
        </Deafult>
    );
}

export default ProfileLanding;
