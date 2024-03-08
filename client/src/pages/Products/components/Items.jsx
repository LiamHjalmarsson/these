import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Section from '../../../components/Layouts/Section/Section';
import Item from './Item';

const Items = ({ category }) => {
    let { data } = useFetch('/api/clothing');
    let [clothes, setClothes] = useState([]);

    useEffect(() => {
        if (data) {
            const filteredClothes = data.clothings.filter(clothing =>
                clothing.category === category.category
            );
            setClothes(filteredClothes);
        }
    }, [data, category]);

    return (
        <Section>
            <div className='w-full flex justify-center items-center'>
                <ul className='flex flex-wrap gap-12 w-full mt-8 px-10'>
                    {clothes.map((clothing, index) => (
                        <Item item={clothing} key={index} />
                    ))}
                </ul>
            </div>
        </Section >
    );
}

export default Items;
