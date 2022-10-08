import React from "react";
import { BsCollectionPlay } from "react-icons/bs";
import { Link } from "react-router-dom";
import avatarOne from "../assets/avatar1.png";
import avatarTwo from "../assets/avatar2.png";
import avatarThree from "../assets/avatar3.png";
import avatarFour from "../assets/avatar4.png";
import { UserAuth } from "../context/AuthContext";


const Account = () => {
  const {user} = UserAuth();
  const style = { color: "red" };
  return (
    <>
      <div className=" pt-20">
        <div className="divide-y divide-slate-200 px-10 pt-5">
          <div className="flex items-center space-x-4 py-2">
            <h2 className="text-2xl text-gray-700">Account</h2>
            <div className="p-[-10] flex space-x-1">
              <BsCollectionPlay size={20} style={style} />
              <p className="font-bold text-sm text-gray-600">
                {" "}
                Member Since November 2020{" "}
              </p>
            </div>
          </div>
          <p className="py-2 text-lg text-gray-500">MEMBERSHIP & BILLING</p>
          <button className="p-3 text-xs bg-gray-200 w-[180px]">
            Cancel Membership
          </button>
        </div>
        <div className="divide-y divide-slate-200 px-10 pt-5">
          <div class="flex justify-between">
            <div class="">
              <p>{user.email}</p>
              <p>Password: *******</p>
            </div>
            <div class="flex flex-col space-y-4 mb-5">
              <Link to="/">
                <p className="text-blue-600">Change account email</p>
              </Link>
              <Link to="/">
                <p className="text-blue-600">Change password</p>
              </Link>{" "}
              <Link to="/">
                <p className="text-blue-600">Add phone number</p>
              </Link>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="">
              <div class="flex mt-3">
                <img
                  className="w-[50px] h-[30px]"
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/netflix-gift-card-v2.svg"
                  alt=""
                ></img>
                <p>22.01 TL Netflix credit</p>
              </div>
              <p>Your account is paid until November 5, 2022.</p>
            </div>
            <div class="flex flex-col space-y-4 mt-3 max-w-[153px]">
              <Link to="/">
                <p className="text-blue-600">Manage payment info</p>
              </Link>
              <Link to="/">
                <p className="text-blue-600">Add backup payment method</p>
              </Link>{" "}
              <Link to="/">
                <p className="text-blue-600">Billing details</p>
              </Link>
              <Link to="/">
                <p className="text-blue-600">Change billing day</p>
              </Link>
            </div>
          </div>
          <div class="flex justify-between mt-5">
              <h2 className="mt-5 mb-5">PLAN DETAILS</h2>
              <Link to="/">
                <p className="text-blue-600 w-[153px] mt-5">Change plan</p>
              </Link>
          </div>
          <div className="divide-y divide-slate-200">
            <h2 className="text-gray-500 text-lg mt-3">
              PROFILE & PARENTAL CONTROLS
            </h2>
            <div className="flex mt-5 items-center">
              <img
                className="w-[60px] mt-3 sm:w-[80px]"
                src={avatarOne}
                alt="avatar1"
              />
              <div className="ml-4">
                <p className="font-bold text-xl">Alex</p>
                <p>All Maturity Ratings</p>
              </div>
            </div>
            <div className="flex mt-5 items-center">
              <img
                className="w-[60px] mt-3 sm:w-[80px]"
                src={avatarTwo}
                alt="avatar1"
              />
              <div className="ml-4">
                <p className="font-bold text-xl">Jane</p>
                <p>All Maturity Ratings</p>
              </div>
            </div>
            <div className="flex mt-5 items-center">
              <img
                className="w-[60px] mt-3 sm:w-[80px]"
                src={avatarThree}
                alt="avatar1"
              />
              <div className="ml-4">
                <p className="font-bold text-xl">Jane</p>
                <p>All Maturity Ratings</p>
              </div>
            </div>
            <div className="flex mt-5 mb-10 items-center">
              <img
                className="w-[60px] mt-3 sm:w-[80px]"
                src={avatarFour}
                alt="avatar1"
              />
              <div className="ml-4">
                <p className="font-bold text-xl">Jane</p>
                <p>All Maturity Ratings</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-lg text-gray-500 mb-5 mt-5">
              Questions? Contact us.
            </h2>
            <div className="grid grid-cols-3 text-gray-500 gap-5 text-sm">
              <Link to="/">
                <p>Audio and Subtitles</p>
              </Link>
              <Link to="/">
                <p>Helps Center</p>
              </Link>
              <Link to="/">
                <p>Gift Cards</p>
              </Link>
              <Link to="/">
                <p>Invesor Relations</p>
              </Link>
              <Link to="/">
                <p>Media Center</p>
              </Link>
              <Link to="/">
                <p>Jobs</p>
              </Link>
              <Link to="/">
                <p>Cookie Preferences</p>
              </Link>
              <Link to="/">
                <p>Terms of Use</p>
              </Link>
              <Link to="/">
                <p>Privacy Statement</p>
              </Link>
            </div>
            <div className="h-[150px] flex items-center">
              <button className="text-gray-500 border-2 border-gray-500 h-[40px] w-[120px]">
                Service Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
