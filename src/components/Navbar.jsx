import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../constants';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative" >
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img
                                className="w-auto h-6 sm:h-7"
                                src="https://websitedemos.net/outdoor-adventure-02/wp-content/uploads/sites/351/2020/01/white-logo.png"
                                alt="logo"
                            />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden bg-white">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="p-3 bg-primary hover:bg-primaryDark text-white"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
                            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {navItems.map((item, index) => (
                            <NavLink to={item.link} key={index} className={({ isActive }) =>
                                `px-3 py-2 mx-3 mt-2 text-[16px] lg:mt-0 border-b lg:border-none rounded-md transition-colors duration-300 transform 
                                ${isActive ? 'text-primary font-bold' : 'text-secondary lg:text-white border-neutral-300 hover:text-primary'}`
                            }>{item.label}</NavLink>
                        ))}
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">
                            <button className="hidden mx-4  transition-colors duration-300 transform lg:block btn" aria-label="show notifications">
                                Take Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
