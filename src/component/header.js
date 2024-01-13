import React from "react";
import { CiSearch } from "react-icons/ci";

function Header() {
  return ( 
    <div className="flex flex-row items-center justify-evenly px-20 py-6">
      <div className="w-20">
        <img src="/images/logo.png" alt="" />
      </div>
      <div className="flex flex-row gap-5 items-center">
        <div>Campaigns</div>
        <div>Categories</div>
        <div>How it works</div>
        <div className="flex flex-row items-center">
          <CiSearch />
          <span className="ml-2">Search</span>
        </div>
        <div>EN</div>
        <div>
          <button className="text-[#1FC3E0] px-4 py-2 rounded border border-solid border-[#1FC3E0]">
            Login
          </button>
        </div>
        <div>
          <button className="bg-[#1FC3E0] text-white px-4 py-2 rounded">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
