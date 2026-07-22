import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = () => {
    const news = [
        {
            _id: "1",
            title: "🎓New Batch Admissions open for Full Stack Web Development",
        },
        {
            _id: "2",
            title: "💼 100% Job Placement & Career Support Available",
        },
        {
            _id: "3",
            title: "🚀Join 50,000 successful learning today",
        },
    ];

    return (
        <div className=" bg-black-200 py-4 px-4">
            <div className='max-w-7xl mx-auto px-3 flex justify-between gap-4 items-center'>
                <button className="btn bg-red-500 text-white">Breaking News</button>
                <Marquee pauseOnHover={true} speed={100}>
                    {news.map((n) => (
                        <span key={n._id}>{n.title}</span>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};


export default MarqueePage;