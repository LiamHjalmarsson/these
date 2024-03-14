import React, { useEffect, useState } from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { updateAchievements } from '../../utils/updateAchievements ';
import { toast } from 'react-toastify';

const ProfileLanding = () => {
    let navigate = useNavigate()
    let userId = JSON.parse(localStorage.getItem("user"));
    let { data } = useFetch(`/api/users/${userId}`);
    let { data: ranks } = useFetch("/api/rank");
    let [nextRank, setNextRank] = useState({});
    let [rankReach, setRankReach] = useState(null);

    useEffect(() => {
        let fetchData = async () => {
            if (data && ranks) {
                let nextRank = ranks.ranks.find(rank => data.user.totalPointsEarned < rank.thresholdPoints);
                let newRank = ranks.ranks.find(rank => data.user.totalPointsEarned > rank.thresholdPoints && data.user.rank !== rank._id);
                setNextRank(nextRank ? nextRank : {});

                if (nextRank && newRank) {

                    let updatedAch = updateAchievements(data, newRank.rank, 100);

                    await fetch(`/api/users/${userId}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            rank: newRank._id,
                            achivments: updatedAch
                        })
                    });

                    setRankReach(newRank);
                }
            }
        }

        fetchData()
    }, [data, ranks]);

    useEffect(() => {
        if (!userId) {
            navigate("/register");
        }
    }, []);

    let logoutHandler = async () => {
        try {
            await fetch("/api/auth/logout");
            localStorage.removeItem("user");
    
            toast.success("Loggade ut");
            navigate("/");
        } catch (error) {
            toast.error("Error to Log out");
        }
    }

    return (
        <Deafult>
            {
                data && ranks && nextRank && (
                    <>
                        <Header user={data.user} nextRank={nextRank} rankReach={rankReach} />

                        <div className='max-w-6xl grid grid-cols-2 gap-12 mx-auto mt-40'>
                            <ProfileCard heading="Profile" details="Justera profil detaljer och kontakt information." icon={<FaRegUser />} link="profile" />
                            <ProfileCard heading="Lojalitet" details="Visa lojalitetsstatus, poäng och exklusiva medlemsförmåner." icon={< MdOutlineRateReview />} link="lojalitet" />
                            <ProfileCard heading="Prestationer" details="Spåra dina framsteg och prestationer." icon={< GoTrophy />} link="achievements" />
                            <ProfileCard heading="recensioner" details="Granska och hantera dina recensioner" icon={< MdOutlineRateReview />} link="recensioner" />

                        </div>
                        <div className='mt-10 mb-20 flex justify-center items-center'>
                            <button className='mx-auto px-8 rounded-md py-4 border border-primary' onClick={logoutHandler}>
                                Logga ut
                            </button>
                        </div>
                    </>
                )
            }
        </Deafult>
    );
}

export default ProfileLanding;
