import React from 'react';

function Navbar() {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#" className="text-white">Logo</a>
                    </div>
                    {/* Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                    {/* Search Box */}
                    <div className="flex-shrink-0 flex justify-end">
                        <div className="flex w-full max-w-sm space-x-3">
                            <input type="text" className="border rounded-md p-2 w-full focus:outline-none" placeholder="Search..." />
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
