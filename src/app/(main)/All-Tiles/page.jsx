import Tilecard from '@/components/Tilecard';
import getTiles from '@/liv/data';
import React from 'react';


const AlltitlesPage = async () => {
    const tiles = await getTiles();
  
    return (
        <section className="max-w-7xl mx-auto py-16 px-6">

            <h1 className="text-5xl font-bold text-center mb-12">
                All Tiles
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tiles.map((tile) => (
                    <Tilecard
                        key={tile.id}
                        tile={tile}
                    />
                ))}
            </div>

        </section>
    );
};

export default AlltitlesPage;