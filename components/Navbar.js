"use client"
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[var(--border-light)] px-6 py-2 lg:px-10">
                <div className="flex items-center gap-2 text-[var(--text-primary)]">
                    <Link className="logo-font text-[var(--text-primary)] text-3xl font-bold leading-tight tracking-tighter" href="/"><span className="text-[var(--primary-color)]">Nex</span>Link</Link>
                </div>
                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors" href="/">Home</Link>
                    <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors" href="/shorten">Shorten</Link>
                    <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-sm font-medium leading-normal transition-colors" href="/about">About</Link>
                </nav>
                <div className="flex items-center gap-3">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[var(--primary-color)] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                        <Link className="truncate" href="/Login">Sign Up</Link>
                    </button>
                    <button className="hidden sm:flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[var(--background-light)] text-[var(--text-primary)] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
                        <Link className="truncate" href="/Login">Login</Link>
                    </button>
                </div>
                {/* Hamburger Button */}
                <button
                    className="md:hidden text-[var(--text-primary)]"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,88H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-gray-200 border-b border-[var(--border-light)] px-6 py-4 rounded-xl sm:rounded-none @container shadow-xl  my-2 mx-2.5">
                    <nav className="flex flex-col gap-4">
                        <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-base font-medium transition-colors" href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-base font-medium transition-colors" href="/shorten" onClick={() => setMenuOpen(false)}>Shorten</Link>
                        <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-base font-medium transition-colors" href="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link>
                        <Link className="text-[var(--text-primary)] hover:text-[var(--primary-color)] text-base font-medium transition-colors" href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link className="text-[var(--primary-color)] font-bold" href="/Login" onClick={() => setMenuOpen(false)}>Sign Up</Link>
                        <Link className="text-[var(--text-primary)]" href="/Login" onClick={() => setMenuOpen(false)}>Login</Link>
                    </nav>
                </div>
            )}
        </nav>
    );
};

export default Navbar;