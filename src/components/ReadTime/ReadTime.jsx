import React, { useEffect, useState } from 'react';

const ReadTime = ({ time }) => {

    const [updateTime, setUpdateTime] = useState(time);

    useEffect(() => {
        const getReadTime = localStorage.getItem("readTime");
        setUpdateTime(getReadTime);
    }, [time]);

    return (
        <div>

            <div className='border-2 border-indigo-400 py-5 mb-5 bg-indigo-100 rounded text-center'>
                <p className='text-2xl font-bold text-indigo-500'>
                    Spent Time On Read: {updateTime}
                </p>
            </div>

        </div>
    );
};

export default ReadTime;