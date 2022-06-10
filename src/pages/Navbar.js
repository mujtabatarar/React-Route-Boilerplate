import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./authentication/auth";

export const Navbar = () => {

  const auth = useAuth();
  return (
    <>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/profile">Profile</NavLink>
         
        {!auth.user && (
          <NavLink to="/Login">
          Login
          </NavLink>
        )}
      </nav>
    </>
  );
};
