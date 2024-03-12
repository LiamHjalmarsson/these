import React, { useEffect } from 'react'
import Deafult from '../../components/Layouts/Deafult'
import Newsletter from '../../components/Newsletter/Newsletter';
import useFetch from '../../hooks/useFetch';
import { useLocation, useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Items from './components/Items';

const Products = () => {
    let { id } = useParams();

    let location = useLocation(); 

    let gender = location.pathname.split('/')[2];

    let { data } = useFetch(`/api/categories/${id}`);

    return (
        <Deafult>
            {
                data && (
                    <>
                        <Banner img={ gender === "herr" ? data.category.image[1] : data.category.image[0]} heading={`LD Kläder ${data.category.category}`} />

                        <Items category={data.category} gender={gender} />
                    </>
                )
            }
            <Newsletter />
        </Deafult>
    );
}

export default Products;
