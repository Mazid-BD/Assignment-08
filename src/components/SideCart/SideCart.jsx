import React from 'react';

const SideCart = ({ bookMark }) => {
    console.log(bookMark);
    return (
        <div>
            <div className='border-2 border-stone-500 px-8 py-8 bg-gray-200 rounded'>
                <p className='text-2xl font-bold text-black mb-4 text-center'>Bookmarked Blogs: {bookMark.length}</p>

                <div>
                    
                    {
                        bookMark.map(book => 
                        <div className='bg-white rounded p-2 text-lg font-semibold text-black mb-4'>
                            {book.title}
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default SideCart;