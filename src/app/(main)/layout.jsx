
import Navbar from '@/components/navbar';
import React from 'react';

const layout = ({children}) => {
    return (
       <>
      <Navbar></Navbar>
        {children}
       
        </>
    );
};

export default layout;