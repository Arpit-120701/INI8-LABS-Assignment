import React , { useState , useEffect } from 'react'
import { Link , useLocation } from "react-router-dom";
import "./Header.css"

function Header() {
    const [ activeTab , setActiveTab ] = useState("Home")

    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/")
        {
            setActiveTab("Home")
        }
        else if(location.pathname==="/add")
        {
            setActiveTab("AddUser")
        } 
        else if (location.pathname ==="/about")
        {
            setActiveTab("About")
        }
    }, [location])
  return (
    <>
        <div className="header">
            <p className='logo'> USER MANAGEMENT SYSTEM</p>
            <div className='header-right'>
                <Link to="/">
                    <p className={ `${activeTab ===  "Home" ? "active" : ""}`} onClick={()=> setActiveTab("Home")}><b>Home</b></p>
                </Link>
                <Link to="/add">
                    <p className={ `${activeTab ===  "AddUser" ? "active" : ""}`}  onClick={()=> setActiveTab("AddUser")}>Add New User</p>
                </Link>
                <Link to="/about">
                    <p className={ `${activeTab ===  "About" ? "active" : ""}`} onClick={()=> setActiveTab("About")}>About</p>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Header
