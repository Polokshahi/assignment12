import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const { signUp } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        const role = 'tourist'; //default role

        try {
            // Create user
            const userCredential = await signUp(email, password);
            const user = userCredential.user;
            
            // Update profile
            await updateProfile(user, {
                displayName: name,
                photoURL: photoURL
               
            });

        // Store user data in the database with the default role

        const userInfo = {
            name: name,
            email: email,
            photoURL: photoURL,
            role: role
        }

        // TODO: Save user data in the database with the default role

        axios.post('http://localhost:5000/allusers', userInfo)
        .then(data => {
            console.log('user added successfully', data)
            navigate('/'); // Redirect after registration
        })

        } catch (error) {
            console.log("Registration Error:", error.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleRegister} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

                <label className="block mb-2">Name</label>
                <input type="text" name="name" className="w-full p-2 border rounded mb-4" required />

                <label className="block mb-2">Email</label>
                <input type="email" name="email" className="w-full p-2 border rounded mb-4" required />

                <label className="block mb-2">Image URL</label>
                <input type="text" name="photoURL" className="w-full p-2 border rounded mb-4" />

                <label className="block mb-2">Password</label>
                <input type="password" name="password" className="w-full p-2 border rounded mb-4" required />

                 
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Register
                    </button>
                
            </form>
        </div>
    );
};

export default Register;
