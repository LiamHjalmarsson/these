import React, { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import Section from '../../../components/Layouts/Section/Section';
import Item from './Item';
import Heading from '../../../components/Elements/Heading/Heading';

const Items = ({ category, gender }) => {
    let { data } = useFetch('/api/clothing');
    let [clothes, setClothes] = useState([]);

    let genderType = gender === 'herr' ? 'male' : 'female';

    useEffect(() => {
        if (data) {
            let filteredClothes = data.clothings.filter(clothing =>
                clothing.category === category.category && clothing.genderType === genderType
            );
            setClothes(filteredClothes);
        }
    }, [data, category]);

    return (
        <Section>
            <div className='w-full flex flex-col justify-center items-center'>
                {
                    clothes.length !== 0 && <Heading heading={clothes[0].category} />
                }
                <ul className='flex flex-wrap gap-16 w-full mt-8 px-10 justify-center'>
                    {clothes.map((clothing, index) => (
                        <Item item={clothing} key={index} />
                    ))}
                </ul>
            </div>
        </Section >
    );
}

export default Items;
