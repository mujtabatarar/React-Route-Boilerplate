import React from "react";
import { Link, Outlet } from "react-router-dom";
import { New } from "./New";
import { Featured } from "./Featured";
import "../../App.css";


export const Products = () => {
  return (
    <>
      <div className="search-bar">
        <input type="search" placeholder="search products" />
      </div>

      <nav className="single-option">
        <Link to="featured"> Featured </Link>
        <Link to="new"> New </Link>
      </nav>
      <Outlet />
    </>
  );
};
