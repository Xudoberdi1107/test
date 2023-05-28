import React, {useState} from 'react';
import body from './header.module.scss'
import {NavLink} from "react-router-dom";
import { FaBars, FaHome,FaOpencart} from "react-icons/fa";
import {FcAbout} from "react-icons/fc"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {MultpleSelect} from "../index";


const Sidebar = () => {
    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <FaHome/>
        },
        {
            path: "/products",
            name: "Products",
            icon: <FaOpencart/>
        },
        {
            path: "/about",
            name: "About",
            icon: <FcAbout/>
        },
    ]
    const [isOpen , setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
        <div className={body.header}>
        <div className={body.navbar}>
            <div>
                <h3 >🅔𝒮𝔥𝓞𝒫</h3>
            </div>
            <div className={body.navbar_links}>
            {
                menuItem.map((item, index) => {
                    return (
                        <NavLink to={item.path}
                                 key={index}
                                 style={({ isActive, isPending }) => {
                                     return {
                                         fontWeight: isActive ? "bold" : "",
                                         textDecoration: isActive ? "underline" : "",
                                     };
                                 }}
                        >
                            <div   className={body.link_text}>{item.name}</div>
                        </NavLink>
                    )
                })
            }
            </div>
            <div className="d-flex align-items-center gap-2">
            <div className={body.cart}>
                <AiOutlineShoppingCart/>
                <span>1</span>
            </div>

            </div>
        </div>

            </div>
        <div className={body.sidebar} style={  {width: isOpen ? "300px" : "50px", transition: "0.5s", } }>
            <div className={body.top_section}>
                <h1 className={body.logo} style={{display: isOpen ? "block" : "none"}}>🅔𝒮𝔥𝓞𝒫</h1>
                <div className={body.bars}   style={{marginLeft: isOpen ? "50px" : "-7px"}}>
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {
                menuItem.map((item, index) => {
                    return (
                        <NavLink to={item.path}
                                 key={index}
                                 className={body.link}
                                 style={({ isActive, isPending }) => {
                                     return {
                                         fontWeight: isActive ? "bold" : "",
                                         background: isActive ? "lightskyblue" : "",
                                     };
                                 }}
                        >
                            <div className={body.icon}>{item.icon}</div>
                            <div  style={{display: isOpen ? "block" : "none"}} className={body.link_text}>{item.name}</div>
                        </NavLink>
                    )
                })
            }
        </div>
        </>
    );
};

export default Sidebar;