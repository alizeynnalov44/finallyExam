import React from 'react'
import'./index.scss'
import { NavLink, Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="header">
                <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="logo" />
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/Home"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Product"}>Product</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ProductAdd"}>ProductAdd</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Shop"}>Shop</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
               <Link> <IoSearchOutline /></Link>
                <Link><CiHeart /></Link>
                <Link><FiShoppingCart /></Link>

                </div>
            </div>
        </div>
    </header>
  )
}

export default Header