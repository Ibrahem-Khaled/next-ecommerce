import React from 'react';

function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6">Login</h2>
                <form >
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-base font-medium">Enter your email and password to login</label>
                        <input type="email" id="email" className="w-full p-2.5 text-gray-900 rounded-lg focus:outline-none" placeholder="E-mail" />
                    </div>
                    <div className="mb-4">
                        <input type="password" id="password" className="w-full p-2.5 text-gray-900 rounded-lg focus:outline-none" placeholder="Password" />
                    </div>
                    <div className="flex items-center mb-6">
                        <label htmlFor="terms" className="text-sm">
                            <input type="checkbox" id="terms" className="mr-2" />
                            I agree the Terms and Conditions
                        </label>
                    </div>
                    <button type="submit" className="w-full p-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">Login</button>
                </form>
                <div className="text-center text-sm mt-6">
                    <p>
                        Forgot your password? <a href="javascript:void(0)" className="text-blue-500">Recovery Password</a>
                    </p>
                    <p>
                        Don't have any account? <a href="javascript:void(0)" className="text-blue-500">Sign Up</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

function handleSubmit(event) {
    event.preventDefault();
}

export default Login;
