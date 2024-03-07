import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Images from './components/Images';
import Details from './components/Details';
import useFetch from '../../hooks/useFetch';

const Product = () => {
    let { id } = useParams();

    let { data } = useFetch(`/api/clothing/${id}`);

    return (
        <Deafult>
            <div className='h-[80vh] flex flex-col justify-center items-center'>
                {
                    data && (
                        <div className='grid grid-cols-2 gap-8 h-full max-w-6x'>
                            <Images imges={data.clothing.image} />

                            <Details data={data.clothing} />
                        </div>
                    )
                }
            </div>
        </Deafult>
    );
}

export default Product;
