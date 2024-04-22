import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";

const Navigation = () => {
    return (
        <nav className="bg-gray-800 py-3 rounded-md ">
            <div className="container mx-auto px-4 flex justify-between">
                <div className="text-white font-bold">My Blog</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            <IoHome 
                                size={25}/>
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