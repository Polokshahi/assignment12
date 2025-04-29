import React from 'react';

const AddStories = () => {
    return (
        <div>
            <h1 className='text-center text-5xl underline'>Add Story</h1>

            <div className='mt-4'>
                    <label className="block font-semibold">Title</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 border rounded"
                        placeholder="Enter story title"
                    />
                </div>

                <div className='mt-4'>
                    <label className='block font-semibold'>Story Content</label>
                    <input
                        type="text"
                        multiple
                        image="images/"
                        required
                        className="w-full p-8 border rounded"
                        placeholder="Enter story content"
                    />
                </div>

                <div className='mt-4'>
                <input type="file" className="file-input" />
                </div>


                <div>
                    <button className="w-full mt-4 bg-orange-500 text-white p-2 rounded-lg">
                        Add Story
                    </button>
                </div>


            
        </div>
    );
};

export default AddStories;