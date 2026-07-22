import { format } from 'date-fns';
import React from 'react';
import MarqueePage from './Breaking';

const Header = () => {
    return (
        <div className='max-w-7xl mx-auto my-5'>
            <h1 className="text-3xl font-extrabold text-center"><span  className="text-blue-600">Online</span><span>Learning</span><span  className="text-blue-600">Platform</span></h1>
            <div>
                <p className='text-center font-semibold pt-3'>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
            </div>
            <div>
                <MarqueePage></MarqueePage>
            </div>
            
        </div>
    );
};

export default Header;