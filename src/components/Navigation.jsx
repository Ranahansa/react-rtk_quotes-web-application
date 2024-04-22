import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 py-4 rounded-md">
            <div className="container mx-auto px-4 flex justify-between">
                <div className="text-white font-bold">My Blog</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            Posts List
                        </Link>
                    </li>
                    <li>
                        <Link to="/add" className="text-white hover:text-gray-300">
                            Add Post
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;