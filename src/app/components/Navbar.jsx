import React from "react";
import { LuGlobe } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPersonCircle } from "react-icons/bs";


const Navbar = () => {
    return(
        <div className="flex flex-row items-center justify-between space-x-[280px]">
            <div className="flex flex-row items-center">
                <img
                src='/air.png'
                alt="Airbnb Logo"
                className="w-[60px]"
                />
                <p className="text-red-600 font-bold text-xl">airbnb</p>
            </div>

            <div className="flex flex-row items-center space-x-10">
                <div>
                    <p className="text-gray-900 text-l cursor-pointer">Stays</p>
                </div>
                <div>
                    <p className="text-gray-500 text-l cursor-pointer">Experiences</p>
                </div>
                <div>
                    <p className="text-gray-500 text-l cursor-pointer">Online Experiences</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between space-x-6">
                <div className="flex flex-row space-x-4">
                    <p className="text-black text-md cursor-pointer">Airbnb your home</p>
                    <LuGlobe color="black" size={21} className="font-bold cursor-pointer"/>
                </div>
                <div className="flex flex-row items-center justify-between space-x-2 border border-gray-400 rounded-full p-2 hover:border-gray-700 transition ">
                    <RxHamburgerMenu color="black" size={21} />
                    <BsPersonCircle color="black" size={21} />
                </div>
            </div>
        </div>
    );
}

export default Navbar