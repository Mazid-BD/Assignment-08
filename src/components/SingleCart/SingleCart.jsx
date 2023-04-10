import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCart = ({ blog, handleReadTime, handleBookmarked }) => {


    return (
        <div>
            <div className="bg-slate-100 mb-10">
                <div className='mb-4'>
                    <div>
                        <img src={blog.picture} alt="" />
                    </div>
                    <div className='mt-5 flex'>
                        <div className='mr-4'>
                            <img className='w-16 rounded-full ml-2' src={blog.logo} alt="" />
                        </div>
                        <div className='mr-72'>
                            <h4 className='text-black font-bold'>{blog.name}</h4>
                            <p className='text-gray-400 font-semibold'>{blog.publish_time}</p>
                        </div>
                        <div className='flex gap-3 mx-auto'>
                            <div>
                                <p className='text-gray-400 font-semibold'>{blog.time} Mins Read</p>
                            </div>
                            <div>
                                <button onClick={() => handleBookmarked(blog)}>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='mb-4'>
                    <h1 className='text-black font-bold text-4xl ml-2'>
                        {blog.title}
                    </h1>
                </div>

                <div className='flex text-gray-400 font-semibold mb-5 ml-2'>
                    <p className='mr-5'>#Beginners</p>
                    <p>#Programming</p>
                </div>

                <div className='ml-2'>
                    <button onClick={() => handleReadTime(blog.time)} className='text-blue-600 font-semibold underline underline-offset-1 mb-8'>Mark as read</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCart;