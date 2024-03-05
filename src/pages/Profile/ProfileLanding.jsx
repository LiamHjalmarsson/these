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

            <div className='max-w-6xl grid grid-cols-2 gap-12 mx-auto mb-40 mt-56'>
                <ProfileCard heading="Profile" details="Justera profile detaljer och kontkat information" icon={<FaRegUser />} link="profile" />
                <ProfileCard heading="Lojalitet" details="Justera profile detaljer och kontkat information" icon={< MdOutlineRateReview />} link="lojalitet" />
                <ProfileCard heading="Achivments" details="Justera profile detaljer och kontkat information" icon={< GoTrophy />} link="achivments" />
                <ProfileCard heading="Recentioner" details="Justera profile detaljer och kontkat information" icon={< MdOutlineRateReview/>} link="resentioner" />
            </div>

        </Deafult>
    );
}

export default ProfileLanding;
