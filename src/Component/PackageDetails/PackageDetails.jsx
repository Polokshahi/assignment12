import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const PackageDetails = () => {
    const { id } = useParams();
    const packageData = useLoaderData();

    // Filter the data to get the single package based on the id
    const singlePackageData = packageData.find(data => data._id === id);

    if (!singlePackageData) {
        return <h1 className="text-center text-xl text-red-600">Package not found!</h1>;
    }


    const { photo,
        tourType,
        tripTitle,
        price } = singlePackageData;

    return (
        <div >

            <h1 className='text-center mt-4 font-extrabold text-[64px] underline'>Package Details</h1>

            <div className='flex-none md:flex lg:flex items-center justify-center gap-6 mt-5 mb-5 shadow-lg rounded-xl p-5 bg-gray-100'>

                <div className='mb-4 '>

                    <img className='w-[400px] rounded-xl' src={photo} alt="" />

                </div>

                <div >

                    <h1 className='text-center text-4xl font-bold mb-3 text-sky-600'>{tripTitle}</h1>
                    <p className='text-center text-4xl font-bold mb-3 text-red-600'>Tour Type: {tourType}</p>
                    <p className='text-center text-4xl font-bold text-green-600'>Price: ${price}</p>

                </div>

            </div>



        </div>
    );
};

export default PackageDetails;
