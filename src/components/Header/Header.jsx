import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();

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
      {!user && (
        <>
          {!loading && (
            <li>
              <NavLink
                to="/register"
                className="btn  btn-ghost  rounded-full px-5 hover:bg-sky-400 hover:text-white"
              >
                Join
              </NavLink>
            </li>
          )}
        </>
      )}

      <li>
        <NavLink
          to="/userprofile"
          className="btn btn-ghost rounded-full px-5 hover:bg-sky-400 hover:text-white"
        >
          User Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/updateprofile"
          className="btn btn-ghost rounded-full px-5 hover:bg-sky-400 hover:text-white"
        >
          Update Profile
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => navigate("/"))
      .catch();
  };

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
              className="menu menu-sm dropdown-content flex gap-2 mt-3 z-[1] p-2 shadow rounded-box w-52"
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
          {loading && (
            <span className="loading loading-ring -translate-x-16 loading-lg"></span>
          )}
          {user ? (
            <div className="flex items-center">
              <div
                tabIndex={0}
                role="button"
                className="avatar mr-3 tooltip tooltip-left dropdown "
                data-tip={user.email}
              >
                <ul
                  tabIndex={0}
                  className="menu right-0 sm:right-auto menu-sm dropdown-content flex gap-2 mt-16 w-36  p-2 shadow rounded-box"
                >
                  <li>
                    <NavLink
                      to="/userprofile"
                      className="btn  rounded-full  hover:bg-sky-400 hover:text-white w-full"
                    >
                      User Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/updateprofile"
                      className="btn rounded-full  hover:bg-sky-400 hover:text-white w-full"
                    >
                      Update Profile
                    </NavLink>
                  </li>

                  <li className="block sm:hidden">
                    <hr className="my-2" />
                    <a
                      onClick={handleLogOut}
                      className="btn rounded-full w-full hover:bg-orange-400 hover:text-white"
                    >
                      Logout
                    </a>
                  </li>
                </ul>
                <div className="w-14 rounded-full ring ring-neutral-100 ">
                  <img className="" src={user.photoURL} />
                </div>
              </div>

              <div className="hidden sm:block">
                <a
                  onClick={handleLogOut}
                  className="btn rounded-full hover:bg-orange-400 hover:text-white"
                >
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <>
              {!loading && (
                <NavLink
                  to="/login"
                  className="btn btn-circle px-10 hover:bg-sky-400 hover:text-white"
                >
                  Login
                </NavLink>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
