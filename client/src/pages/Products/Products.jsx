import React from 'react'
import Deafult from '../../components/Layouts/Deafult'
import Newsletter from '../../components/Newsletter/Newsletter';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import Items from './components/Items';

const Products = () => {
    let { id } = useParams();

    let { data } = useFetch(`/api/categories/${id}`);

    return (
        <Deafult>
            {
                data && (
                    <>
                        <Banner img={data.category.image} heading={`LD Kläder ${data.category.category}`} />
                        <Items category={data.category} />
                    </>
                )
            }
            <Newsletter />
        </Deafult>
    );
}

export default Products;
