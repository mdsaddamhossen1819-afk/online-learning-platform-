import Image from 'next/image'
import React from 'react';


const Tilecard = ({tile}) => {
    const {image,title,}= tile;
    console.log(image,title);
    return (
       
        <div className="bg-gray-700 rounded-xl shadow-lg overflow-hidden">

            <Image
                src={tile.image}
                alt={tile.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
            />

            <div className="p-5">

                <h2 className="text-2xl font-bold">
                    {tile.title}
                </h2>

                <p className="text-accent mt-2">
                    {tile.category}
                </p>

                <p className="text-yellow-600 font-bold mt-4 text-xl">
                    ${tile.price}
                </p>

            </div>
        </div>
       
    );
};

export default Tilecard;