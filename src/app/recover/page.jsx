import React from 'react';

function RecoveryAccount() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-white text-2xl font-semibold mb-4">Recovery Account</h2>
                <p className="text-gray-400 mb-6">Enter e-mail to send message to your email</p>
                <form>
                    <label className="block text-gray-300 mb-2" htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 mb-4 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all">Submit</button>
                </form>
                <div className="flex items-center justify-center text-gray-400 my-6">
                    <span className="border-t border-gray-600 flex-grow"></span>
                    <span className="mx-2">OR</span>
                    <span className="border-t border-gray-600 flex-grow"></span>
                </div>
                <div className="flex justify-between">
                    <a href="#" className="text-blue-500 hover:underline">Login</a>
                    <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default RecoveryAccount;
