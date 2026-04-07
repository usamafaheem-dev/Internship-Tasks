import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import logo from "../assets/logo.webp";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="bg-gray-100 p-3">
      {/* Top Bar */}
      <header className="flex justify-between items-center">
        {/* logo */}
        <img className="w-12.5 " src={logo} alt="website-logo" />
        {/* for desktop navlinks */}
        <ul className="md:flex  gap-4  items-center hidden shadow shadow-black rounded-4xl p-2 font-medium">
          <li className="hover:text-blue-700">Home</li>
          <li className="hover:text-blue-500">Services</li>
          <li className="hover:text-blue-500">Portfolio</li>
          <li className="hover:text-blue-500">Blog</li>
          <li className="hover:text-blue-500">Contact</li>
        </ul>

        <button className="bg-black text-white px-3 p-2 rounded-2xl font-medium hidden md:block  hover:bg-blue-500 cursor-pointer">
          Get Started
        </button>

        {/* Menu Button (mobile only) */}
        <button onClick={() => setShow(!show)} className="md:hidden">
          <CgMenuRight size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {show && (
        <ul className="flex flex-col mt-3 gap-2  md:hidden">
          <li>Home</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
