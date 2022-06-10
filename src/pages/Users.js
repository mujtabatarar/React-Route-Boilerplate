import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <>
      <div>
        <h1>users</h1>
      </div>
      <nav className="single-option">
        <Link to=":userId"> UsersId </Link>
        <Link to="admin"> Admin </Link>
      </nav>
      <Outlet />
    </>
  );
};
