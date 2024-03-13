import React from 'react';
import Deafult from '../../components/Layouts/Deafult';
import Banner from '../../components/Banner/Banner';
import bannerImg from "/images/banner.jpg";
import manImage from "/images/man.jpg";
import womanImage from "/images/woman.jpg";
import SeasonProduct from './components/Season/SeasonProducts';
import BestSellers from './components/Best/BestSellers';
import Newsletter from '../../components/Newsletter/Newsletter';
import LinkButton from '../../components/Elements/LinkButton';
import useFetch from '../../hooks/useFetch';

const Home = () => {
    let { data } = useFetch('/api/clothing');

    let filterClothingsByGender = (gender) => {
        return data?.clothings.filter(clothing => clothing.genderType === gender).slice(0, 8);
    };

    let menClothings = filterClothingsByGender('male');
    let womenClothings = filterClothingsByGender('female');

    let news = [
        {
            title: "Dam",
            path: "dam",
            img: womanImage
        },
        {
            title: "Herr",
            path: "herr",
            img: manImage
        },
    ];

    return (
        <Deafult>
            <Banner img={bannerImg} heading="LD Klädder">
                <div className='text-white mt-4 text-lg tracking-wide font-bold'>
                    Kvalititets kläder för Herr & Dam
                </div>
                <div className='w-96 p-4 flex justify-center items-center gap-8 mt-4'>
                    <LinkButton link="/gender/herr" title="Herr" />
                    <LinkButton link="/gender/dam" title="Dam" />
                </div>
            </Banner>

            <SeasonProduct items={news} />

            {
                data && (
                    <>
                        <BestSellers heading="Populära Produkter Dam" items={womenClothings} />
                        <BestSellers heading="Populära Produkter Herr" items={menClothings} />
                    </>
                )
            }

            <Newsletter />
        </Deafult>
    );
}

export default Home;
