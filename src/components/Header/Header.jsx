import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="btn btn-ghost rounded-full px-6 hover:bg-sky-400 hover:text-white"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="btn  btn-ghost  rounded-full px-6 hover:bg-sky-400 hover:text-white"
        >
          Join
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            Nova Properties
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div
              className="avatar mr-3 tooltip tooltip-left"
              data-tip={user.email}
            >
              <div className="w-14 rounded-full">
                <img
                  className=""
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-circle px-10 hover:bg-sky-400 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
