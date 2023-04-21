import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-2xl md:text-3xl font-semibold">
          Auth Master
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink className="" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/register">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink className="" to="/orders">
                Orders
              </NavLink>
            </li>
          </ul>
        </div>

        {user ? (
          <div className="md:flex ml-10 md:ml-4 md:gap-2">
            <span>{user.email}</span>
            <button onClick={handleLogOut} className="btn btn-xs">
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login">
            {" "}
            <ArrowRightOnRectangleIcon className="h-6 w-6 text-blue-100-500" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
