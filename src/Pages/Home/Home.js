import React from 'react';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Intro from '../../Components/Intro/Intro';
import Experiences from '../../Components/Experiences/Experiences';
import Services from '../../Components/Services/Services';

const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Experiences/>
            <Services/>
            <Intro/>
            <Faq/>
            <Footer/>
        </>
    );
};

export default Home;