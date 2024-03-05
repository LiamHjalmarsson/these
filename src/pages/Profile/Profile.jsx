import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import SidebarNav from './components/SidebarNav';
import SidebarRewards from './components/SidebarRewards';
import ProdileDetails from "./components/ProdileDetails";
import Heading from '../../components/Elements/Heading/Heading';
import ProgressBar from './components/Progressbar';
import Rewards from './components/Rewards';
import Achivments from './components/Achivments';

const Profile = () => {
    let { id } = useParams();

    let links = ["profile", "lojalitet", "achivments", "resentioner"];

    return (
        <Deafult>
            <div className='flex my-12 px-10 min-h-[69vh]'>

                <SidebarNav id={id} links={links} />

                <main className='flex-grow flex justify-center items-start'>

                    {
                        id === "profile" && (
                            <ProdileDetails />
                        )
                    }

                    {
                        id === "lojalitet" && (
                            <Rewards />
                        )
                    }

                    {
                        id === "achivments" && (
                            <Achivments />
                        )
                    }
                </main>

                <SidebarRewards />

            </div>
        </Deafult>
    );
}

export default Profile;
