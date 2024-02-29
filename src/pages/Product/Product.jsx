import React from 'react';
import { useParams } from 'react-router-dom';
import Deafult from '../../components/Layouts/Deafult';

const Product = () => {
    let {id} = useParams();

    return (
        <Deafult>
            
        </Deafult>
    );
}

export default Product;
