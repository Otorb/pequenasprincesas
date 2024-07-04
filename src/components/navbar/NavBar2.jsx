import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi"


function NavBar2() {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }
    const [click, setClick] = useState(false);
    const mobile = () => {
      setClick(!click);
    };
    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )


  return (
    <div className="p-1 md:p-4 flex items-center justify-between h-10 w-full">
    <div className="flex flex-row items-center gap-2">
      {/* <img src={logo} alt="" height={50} width={50} className="dark:hidden" /> */}
      {/* <img
        src={gif}
        alt=""
        height={20}
        width={20}
        className="hidden dark:block"
      /> */}
      <span className="text-2xl font-[1000] text-center dark:text-white">
        SNKR.
        <span className="font-extrabold text-sm">hub</span>
      </span>
    </div>
    <SearchBar />
    <ul className="hidden md:flex text-sm  text-black dark:text-white font-semibold md:tracking-wide  flex-col  gap-2 md:flex-row  md:gap-8">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/explore">Explore</Link>
      </li>
      <li>
        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-xl " />
            {cartItems.length > 0 && (
              <span
                className="absolute -top-1 -right-2 bg-green-600 text-xs w-4 h-4 
                flex justify-center items-center animate-bounce rounded-full text-white"
              >
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </li>
    </ul>
    {/* hidden max-sm:block */}
    <div className="block md:hidden">
      <button 
       onClick={mobile}
      >
        {!click && <GiHamburgerMenu className="text-2xl dark:text-white" />}
        {click && <FaTimes className="text-2xl dark:text-white" />}
        <ul
         className={`text-sm ${
           click ? "block" : "hidden"
         } w-full flex flex-col gap-y-4 absolute top-10 left-0 right-0 text-black dark:text-white font-semibold z-10 backdrop-blur-sm`}
        >
          <li className=" rounded-md h-8 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" rounded-md h-8">
            <Link to="/explore">Explore</Link>
          </li>
          <li className=" rounded-md h-8">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </button>
    </div>
  
  </div>
  )
}

export default NavBar2