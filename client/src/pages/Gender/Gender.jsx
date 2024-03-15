import React, { useEffect, useState } from 'react'
import Deafult from '../../components/Layouts/Deafult'
import Newsletter from '../../components/Newsletter/Newsletter';
import Banner from '../../components/Banner/Banner';
import bannerImgDam from "/images/dam_sektion.jpg";
import bannerImgHerr from "/images/banner.jpg";
import Categories from './components/Categories';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Gender = () => {
    let { id } = useParams();

    let { data: clothingData } = useFetch('/api/clothing');
    let { data: categoryData } = useFetch('/api/categories');

    let [categories, setCategories] = useState([]);

    let genderType = id === 'herr' ? 'male' : 'female';

    useEffect(() => {
        if (clothingData && categoryData) {
            let filteredCategories = categoryData.categories.filter(category =>
                clothingData.clothings.some(clothing =>
                    clothing.category === category.category && clothing.genderType === genderType
                )
            );
            setCategories(filteredCategories);
        }
    }, [clothingData, categoryData, id]);

    return (
        <Deafult>
            <Banner img={id === "herr" ? bannerImgHerr : bannerImgDam} heading={`LD Kläder ${id === 'herr' ? 'Herr' : 'Dam'}`} color="white" />
            {
                categories && (
                    <Categories heading={`${id === 'herr' ? 'Herr' : 'Dam'} Kläder`} items={categories} />
                )
            }
            <Newsletter />
        </Deafult>
    );
}

export default Gender;
