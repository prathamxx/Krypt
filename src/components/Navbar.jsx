import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BrowserRouter, Routes, Route , Navigate ,Link} from 'react-router-dom';
import logo from "../../images/logo.png";
import '../Nav.css';

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return ( 
      <nav>
        <div className="Logo">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </div>
        <div className="links">
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/market">Market</Link></li>
            <li><Link to="/padlet">Padlet</Link></li>
            <li><Link to="/bot">Bot</Link></li>
            {/* <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>  */}
          </ul>  
        </div>
        <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/market">Market</Link></li>
            <li><Link to="/padlet">Padlet</Link></li>
            <li><Link to="/bot">Bot</Link></li>
          </ul>
        )}
      </div> 

      </nav>
  );
};

export default Navbar;
