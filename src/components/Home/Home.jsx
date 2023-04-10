import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';

const Home = ({handleReadTime, handleBookmarked}) => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    return (
        <div>
            {
                blogs.map((blog) =>( 
                <SingleCart 
                handleReadTime={handleReadTime} 
                handleBookmarked={handleBookmarked}
                blog={blog}
                key={blog.id}
                ></SingleCart>
                ))
            }
        </div>
    );
};

export default Home;