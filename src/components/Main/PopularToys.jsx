import React, { use } from 'react';
import ToyCard from './ToyCard';

const fetchData = async() => {
    const res = await fetch("/toysData.json");
    const data = await res.json();
    return data;
}
const toysPromise =  fetchData();

const PopularToys = () => {
    const toys = use(toysPromise);
    
    return (
        <div className='mt-10'>
            <h1 className='text-3xl font-bold text-center'>Popular Toys</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    toys.map(toy => <ToyCard key={toy.toyId} toy={toy}></ToyCard>)
                }
            </div>
        </div>
    );
};

export default PopularToys;