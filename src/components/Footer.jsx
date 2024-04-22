import React from 'react';
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-3 rounded-md fixed bottom-2 w-11/12">
            <div className="container px-4 flex justify-between items-center">
                <div className="text-white font-bold">My Blog &copy; {new Date().getFullYear()}</div>
                <div className="text-white">
                    <a
                        href="https://github.com/Ranahansa/react-rtk_quotes-web-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        <FaGithub
                            size={26}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;