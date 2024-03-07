import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import useFetch from '../../hooks/useFetch';

const ProfileLanding = () => {
    let { data } = useFetch(`/api/users/65e896d8ea43a4b2212ef562`);
    console.log(data);
    return (
        <Deafult>

            {
                data && (
                    <>
                        <Header data={data.user} />

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
