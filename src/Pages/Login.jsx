import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2';
import axios from 'axios';

const Login = () => {
    const { signIn, googleSignIn, resetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;

        try {
            await signIn(email, password);
            navigate('/'); // Redirect to Home after login
            console.log("Login Successful");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleSignIn();
            
            


            const result = await googleSignIn();
            const user = result.user;

            const googleSignInUserInfo = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                role: "tourist"
            }

            axios.post('http://localhost:5000/allusers', googleSignInUserInfo)
                .then(data => {
                    console.log('user added successfully', data)
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Successful',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/'); // Redirect after registration
                })







            
        } catch (err) {
            setError(err.message);
            Swal.fire({
                icon: 'error',
                title: 'Login Failed',
                text: err.message
            });
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Enter your email first!',
                text: 'Please provide your registered email to reset your password.'
            });
            return;
        }

        try {
            await resetPassword(email);
            Swal.fire({
                icon: 'success',
                title: 'Reset Email Sent',
                text: 'Check your inbox for password reset instructions.'
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Reset Failed',
                text: err.message
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

                {error && <p className="text-red-500 text-center">{error}</p>}

                <label className="block mb-2">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    className="w-full p-2 border rounded mb-4" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />

                <label className="block mb-2">Password</label>
                <input type="password" name="password" className="w-full p-2 border rounded mb-2" required />

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    Login
                </button>

                <div className="text-right text-sm mt-2">
                    <button type="button" onClick={handleForgotPassword} className="text-blue-500 hover:underline">
                        Forgot Password?
                    </button>
                </div>

                <div className="text-center my-4">or</div>

                <button type="button" onClick={handleGoogleLogin} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Sign in with Google
                </button>
            </form>
        </div>
    );
};

export default Login;
