import React, { useContext } from "react";
import MyLink from "./MyLink";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { ClockLoader } from "react-spinners";
import { toast, Zoom } from "react-toastify";

const Navbar = () => {
  const { user, loading, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOutUser()
      .then(() => {
        toast(`সাইন-আউট সফল হয়েছে!`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.code, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Zoom,
        });
      });
  };
  return (
    <div className="shadow-sm bg-[#d1ffe3]">
      <div className="navbar w-10/12 mx-auto px-0">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 gap-3 w-32 p-3 shadow z-5"
            >
              <MyLink to={"/"}>Home</MyLink>
              <MyLink to={"/my-profile"}>My Profile</MyLink>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-bold">
            <span className="text-[#FB4231]">T</span>
            <span className="text-[#dfce15]">o</span>
            <span className="text-[#5FC209]">y</span>
            <span className="text-[#14a6ce]">H</span>
            <span className="text-[#FC42B4]">e</span>
            <span className="text-[#dfce15]">a</span>
            <span className="text-[#5FC209]">v</span>
            <span className="text-[#14a6ce]">e</span>
            <span className="text-[#AA43FA]">n</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex gap-5">
          <MyLink to={"/"}>Home</MyLink>
          <MyLink to={"/my-profile"}>My Profile</MyLink>
        </div>
        {/* Login/Logout */}
        {loading ? (
          <div className="navbar-end gap-2">
            <ClockLoader size={36} color="#FB4231" />
            <div className="skeleton btn bg-[#F8F8F8] btn-ghost w-16 h-8 shrink-0"></div>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            {user?.photoURL && (
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={user.photoURL}
                alt=""
                title={user?.displayName}
              />
            )}
            {user ? (
              <Link
                to=""
                onClick={handleLogout}
                className="btn btn-sm border-none shadow-none hover:text-primary hover:bg-black"
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm btn-neutral border-none shadow-none hover:text-primary"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
