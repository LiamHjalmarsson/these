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
import Heading from '../../components/Elements/Heading/Heading';

const ProfileLanding = () => {
    let navigate = useNavigate()
    let userId = JSON.parse(localStorage.getItem("user"));
    let { data } = useFetch(`/api/users/${userId}`);
    let { data: ranksData } = useFetch("/api/rank");
    let [nextRank, setNextRank] = useState({});
    let [updatedUser, setUpdatedUser] = useState({});
    let [unlockedRanks, setUnlockedRanks] = useState([]);


    useEffect(() => {
        let fetchData = async () => {
            if (data && ranksData) {
                let upcomingRank = ranksData.ranks.find(rank => data.user.totalPointsEarned < rank.thresholdPoints);

                if (upcomingRank) {
                    setNextRank(upcomingRank);
                }

                let rank = ranksData.ranks.find(rank => data.user.totalPointsEarned >= rank.thresholdPoints && !data.user.rank.includes(rank._id));

                if (data.user && rank) {
                    let updatedAch = updateAchievements(data, rank.rank, 100);
                    let userRanks = [...data.user.rank, rank._id];

                    let rep = await fetch(`/api/users/${userId}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            achivments: updatedAch,
                            rank: userRanks
                        })
                    });

                    let res = await rep.json();

                    setUpdatedUser(res);

                    toast.success("Nytt achivment");
                }

                if (data.user) {
                    let points = data.user.totalPointsEarned - data.user.activePoints
                    let updatedAch;

                    if (points >= 2000 && !data.user.achivments.find(ach => ach.name === "sparat 1000")) {
                        updatedAch = updateAchievements(data, "sparat 1000", 100);

                        await fetch(`/api/users/${userId}`, {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                achivments: updatedAch,
                                activePoints: data.user.activePoints + 100
                            })
                        });

                        toast.success("Fått ny prestation");
                    } else if (points >= 10000 && !data.user.achivments.find(ach => ach.name === "sparat 5000")) {
                        updatedAch = updateAchievements(data, "sparat 5000", 100);

                        await fetch(`/api/users/${userId}`, {
                            method: "PATCH",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                achivments: updatedAch,
                                activePoints: data.user.activePoints + 100
                            })
                        });

                        toast.success("Fått ny prestation");
                    }
                }
            }
        }

        if (data && ranksData) {
            let unlockedRank = ranksData.ranks.filter(rank => data.user.rank.includes(rank._id));
            setUnlockedRanks(unlockedRank);
        }

        fetchData();
    }, [data, ranksData]);


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
                data && <Header user={data.user} nextRank={nextRank} updatedUser={updatedUser} />
            }

            <div className='w-full relative'>
                {
                    data && (
                        <>
                            <div className='max-w-6xl grid grid-cols-2 gap-12 mx-auto mt-40'>
                                <ProfileCard heading="Profile" details="Justera profil detaljer och kontakt information." icon={<FaRegUser />} link="profile" />
                                <ProfileCard heading="Lojalitet" details="Visa lojalitetsstatus, poäng och exklusiva medlemsförmåner." icon={< MdOutlineRateReview />} link="lojalitet" />
                                <ProfileCard heading="Prestationer" details="Spåra dina framsteg och prestationer." icon={< GoTrophy />} link="prestationer" />
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

                <div className='absolute right-0 shadow-middle rounded-md shadow-primary top-0 px-8 py-4 mr-10'>
                    <Heading heading="Förmåner" />

                    <div className='mt-4'>
                        {
                            unlockedRanks.map((rank) => (
                                <div className='mt-4 p-4 rounded-md shadow-middle shadow-primary'>
                                    <div className='text-lg'>
                                        {
                                            rank.rank
                                        }
                                    </div>
                                    {
                                        rank.benefits.map((benefit) => (
                                            <div className='text-sm'>
                                                {
                                                    benefit.name
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Deafult>
    );
}

export default ProfileLanding;
