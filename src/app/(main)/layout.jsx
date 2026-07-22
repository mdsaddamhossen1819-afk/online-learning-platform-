
import HeroBanner from '@/components/Banner';
import Header from '@/components/Header';
import Navbar from '@/components/navbar';
import React from 'react';

const layout = ({children}) => {
    return (
       <>
       <Header></Header>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
        {children}
       
        </>
    );
};

export default layout;