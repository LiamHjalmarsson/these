import React, { useEffect, useState } from 'react';
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
    let { data: ranks } = useFetch("/api/rank");
    let [nextRank, setNextRank] = useState({});
    let [rankReach, setRankReach] = useState(null);

    useEffect(() => {
        let fetchData = async () => {
            if (data && ranks) {
                let nextRank = ranks.ranks.find(rank => data.user.totalPointsEarned < rank.thresholdPoints);
                let newRank = ranks.ranks.find(rank => data.user.totalPointsEarned > rank.thresholdPoints && data.user.rank !== rank._id);
                setNextRank(newRank ? newRank : {});
                
                if (nextRank && newRank) {
                    await fetch(`/api/users/${userId}`, {
                        method: "PATCH",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ 
                            rank: newRank._id
                        })
                    });

                    setRankReach(newRank._id);
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

    return (
        <Deafult>
            {
                data && ranks && nextRank && (
                    <>
                        <Header user={data.user} nextRank={nextRank} rankReach={rankReach}/>

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
