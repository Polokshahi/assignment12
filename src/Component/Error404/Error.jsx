import React from 'react';

const Error = () => {
    return (
        <div className="flex items-center justify-center min-h-screen  text-white">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-6xl font-extrabold mb-4 text-red-600">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
                <p className="text-gray-700 mb-6">We couldn't find the page you were looking for.</p>
                <a
                    href="/"
                    className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-500 hover:to-teal-400 transition"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default Error;
