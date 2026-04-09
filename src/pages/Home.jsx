import React from 'react';
import Banner from '../components/Header/Banner';
import PopularToys from '../components/Main/PopularToys';

const Home = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <Banner></Banner>
            <main>
                <PopularToys></PopularToys>
            </main>
        </div>
    );
};

export default Home;