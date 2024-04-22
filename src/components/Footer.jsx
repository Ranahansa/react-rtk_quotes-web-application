import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-3 rounded-md fixed bottom-1 w-11/12">
            <div className="container px-4 flex justify-between items-center">
                <div className="text-white font-bold">My Blog &copy; {new Date().getFullYear()}</div>
                <div className="text-gray-400">
                    <a
                        href="https://github.com/Ranahansa/react-rtk_quotes-web-application"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;