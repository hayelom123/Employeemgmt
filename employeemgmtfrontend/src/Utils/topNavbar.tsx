import React from "react";
import {  NavLink } from "react-router-dom";

import { Logo, LogoName, NavItem,NavItemGroup, TopNavBar } from './../styles/topNavBar';

export const NavBar: React.FC = () => {
    return (
        <TopNavBar>
            <Logo>
                <LogoName>Employee Mangement</LogoName>
            </Logo>
            {/* <Link to="/">Home</Link>
                <Link to="/register">Add</Link>
                <Link to="/">LogOut</Link> */}
            <NavItemGroup>
                
                <NavItem>
                    {/* Home */}
                     {/* className={(navData) => navData.isActive ? "active" : "Link" } */}
                    <NavLink className="Link"   to="/">Home</NavLink>
                </NavItem>
                <NavItem style={{width:'200px'}}>
                  <NavLink className="Link" to="/register">Register</NavLink>
                </NavItem>
            
             <NavItemGroup>
                <NavItem>
                 <NavLink className="Link"  to="/signin">LogOut</NavLink>
                </NavItem>
                </NavItemGroup>
            </NavItemGroup>
        </TopNavBar>
    );
}