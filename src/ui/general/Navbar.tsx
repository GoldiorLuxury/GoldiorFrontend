import logo from '../../assets/goldior-logo.png';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <nav className={'h-24 p-3 flex items-center justify-between '}>
                <span className={'flex items-center justify-center gap-4 w-[35%] sm:w-[25%] h-full'}>
                    <button onClick={() => console.log("l")}>
                        <RxHamburgerMenu size={25} className={'block sm:hidden'} />
                    </button>
                    <img src={logo} alt='Goldior' className={'h-[60%] sm:h-[80%] w-[65%] sm:w-[55%] md:w-[30%]'} />
                </span>
                <div className={'hidden sm:flex w-[55%]'}>
                    <ul className={'flex items-center justify-center sm:gap-6 md:gap-10 lg:gap-16 w-full'}>
                        <NavLink to={"/"} className={'text-center lg:text-lg roboto-regular'}>Home</NavLink>
                        <NavLink to={"/"} className={'text-center lg:text-lg roboto-regular'}>Shop</NavLink>
                        <li className={'text-center lg:text-lg roboto-regular'}>About</li>
                        <li className={'text-center lg:text-lg roboto-regular'}>Services</li>
                        <li className={'text-center lg:text-lg roboto-regular'}>Blog</li>
                    </ul>
                </div>
                <div className={'h-full w-[40%] sm:w-[25%] flex items-center justify-evenly lg:mx-16'}>
                    <IoSearchSharp size={23} />
                    <FaRegUser size={23} />
                    <FaRegHeart size={23} />
                    <Link to="/cartpage">
                        <BsHandbag size={23} />
                    </Link>
                </div>
            </nav>
            {/* <span className={' mx-8 sm:mx-16 md:mx-24 lg:mx-32'}>path from url</span> */}
        </>
    )
}