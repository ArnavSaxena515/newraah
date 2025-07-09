"use client"
import React, {useState} from "react";
import Link from "next/link";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Newraah",
                    text: "Check out Newraah – the Swiss Army knife for job hunting!",
                    url: "https://www.newraah.com",
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            alert("Sharing is not supported on this browser.");
        }
    };


    return (
        <nav
            className="bg-transparent text-white  fixed top-0 left-0 w-full z-50">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="flex items-center justify-between h-20">
                    <Link href="/"
                       className="flex items-center space-x-2">
                        <img
                            src="/newraah_icon_v2.png"
                            alt="Newraah Logo"
                            className="h-22 w-22 transition-transform hover:scale-105"
                        />
                        Newraah
                    </Link>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                {menuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"/>
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"/>
                                )}
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden md:flex space-x-6">
                        <Link href="/about"
                           className="hover:text-green-400 transition-all duration-200">About</Link>
                        <Link href="/pricing"
                           className="hover:text-green-400 transition-all duration-200">Pricing</Link>
                        <Link href="/#features"
                           className="hover:text-green-400 transition-all duration-200">Features</Link>
                        <button
                            onClick={handleShare}
                            className="hover:text-green-400 transition-all duration-200"
                        >
                            Share
                        </button>

                    </div>
                </div>
            </div>
            {menuOpen && (
                <div
                    className="md:hidden bg-gray-800 py-2 px-4 space-y-2">
                    <Link href="/about"
                       className="block text-white hover:text-green-400 transition">About</Link>
                    <Link href="/pricing"
                       className="block text-white hover:text-green-400 transition">Pricing</Link>
                    <Link href="/#features"
                       className="block text-white hover:text-green-400 transition">Features</Link>
                    <button
                        onClick={handleShare}
                        className="hover:text-green-400 transition-all duration-200"
                    >
                        Share
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
