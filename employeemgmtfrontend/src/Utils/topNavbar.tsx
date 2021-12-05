import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import {
  Logo,
  LogoName,
  NavItem,
  NavItemGroup,
  TopNavBar,
} from "./../styles/topNavBar";
import { useDispatch } from "react-redux";
import { changeLogin } from "../components/redux/action";
export const NavBar: React.FC = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
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
          <NavLink className="Link" to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem style={{ width: "200px" }}>
          <NavLink className="Link" to="/register">
            Register
          </NavLink>
        </NavItem>

        <NavItemGroup>
          <NavItem>
            <NavLink
              onClick={(e) => {
                e.preventDefault();
                cookie.remove("user");
                dispatch(changeLogin(false));
                // navigate("/signin");
              }}
              className="Link"
              to="/signin"
            >
              LogOut
            </NavLink>
          </NavItem>
        </NavItemGroup>
      </NavItemGroup>
    </TopNavBar>
  );
};
