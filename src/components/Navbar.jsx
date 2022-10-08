import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();


  const handleLogout = async () => {
    try{
      await logOut();
      navigate('/login')
    }catch(error){
      console.log(error);
    }
  }


  return (
    <div className="text-white flex items-centerr justify-between p-4 z-[100] w-full absolute bg-[#000000]">
      <div className="flex justify-center items-center">

      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div className="hidden sm:flex px-7 text-white">
      <ul className="flex space-x-2"> 
        <Link to="/">
        <li className=" focus:text-white">Home</li>
        </Link>
        <Link to="/mylist">
        <li>My list</li>
        </Link>  
      </ul>
      </div>
      <p className="block sm:hidden px-7">Browse</p>
      </div>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer" onClick={handleLogout}>
              Log out
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign in</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
