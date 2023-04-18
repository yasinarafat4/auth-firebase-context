import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between navbar bg-primary text-primary-content">
        <div>
          <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        </div>
        <div>
          {" "}
          <NavLink className="btn btn-ghost normal-case text-xl" to="/">
            Home
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/login">
            Login
          </NavLink>
          <NavLink className="btn btn-ghost normal-case text-xl" to="/register">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
