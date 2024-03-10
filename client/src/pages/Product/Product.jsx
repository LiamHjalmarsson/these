import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';
import Images from './components/Images';
import Details from './components/Details';
import useFetch from '../../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../reducer/cartSlice.js';
import { toast } from 'react-toastify';

const Product = () => {
    let { id } = useParams();
    let { data } = useFetch(`/api/clothing/${id}`);

    let dispatch = useDispatch();
    
    let handleAddToCart = (item) => {
        dispatch(addItemToCart(item));

        toast.success("Product till lagd i varukorg");
    };

    return (
        <Deafult>
            <div className='min-h-[80vh] flex flex-col justify-center items-center'>
                <div className='h-[80%] w-[80%] flex justify-center items-center flex-wrap'>
                    {
                        data && (
                            <>
                                <Images imges={data.clothing.image} />

                                <Details data={data.clothing} onAddToCart={handleAddToCart} />
                            </>
                        )
                    }
                </div>
            </div>
        </Deafult>
    );
}

export default Product;