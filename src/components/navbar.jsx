import { Search } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        <div>
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-3">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/All-Titles">All-Titles</NavLink>
                <NavLink href="/my-profile">My-Profile</NavLink>
                <Link
                  href="/login"
                  className="px-5 py-2.5 font-medium border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                >
                  Login
                </Link>

                <Link
                  href="/sing-up"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </ul>
            </div>
            <Link href="/" className="text-3xl font-bold">
              <span className="text-blue-600 ">Skill</span>
              <span className="text-black">Sphere</span>
            </Link>
          </div>
        </div>

        <div>
          <ul  className="hidden lg:flex items-center gap-8">
            <NavLink href={"/"}>Home</NavLink>
            <NavLink href={"/All-Titles"}>All-Titles</NavLink>
            <NavLink href={"/my-profile"}>My-Profile</NavLink>

          </ul>
        </div>



        <div className="hidden lg:flex items-center gap-4">
          <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition">
            <Search size={20} />
          </button>

          <Link
            href="/login"
            className="px-5 py-2.5 font-medium border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Login
          </Link>

          <Link
            href="/sing-up"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

      </nav>
    </header >
  );
};

export default Navbar;