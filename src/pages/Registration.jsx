import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, Zoom } from "react-toastify";

const Registration = () => {
  const {
    setLoading,
    createUser,
    updateUserProfile,
    emailVerification,
    signOutUser,
  } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    // Name without spacing
    const cleanName = displayName.trim().replace(/\s+/g, " ");
    if (!cleanName) {
      setErrorMessage(
        <>
          <p>
            "Must be a meaningful{" "}
            <span className="text-info font-semibold">Name</span> !
          </p>
        </>,
      );
      return;
    }

    // Password types
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

    if (!passwordPattern.test(password)) {
      setErrorMessage(
        "Password should be 1 Uppercase, 1 lowercase, 1 digit, 1 special character and minimum 6 characters.",
      );
      return;
    }

    // Terms tick
    if (!terms) {
      setErrorMessage("Accept Terms & Conditions!");
      return;
    }

    setErrorMessage("");

    // create user
    createUser(email, password)
      .then((result) => {
        // setLoading(false);
        console.log(result.user);

        // update profile
        updateUserProfile(displayName, photoURL).then().catch();

        // email verification
        emailVerification().then(() => {
          if (!result.user.emailVerified) {
            toast("আপনার ই-মেইলটি ভেরিফাই করুন।", {
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
          }
        });

        // sign out user
        signOutUser()
          .then(() => {
            navigate("/login");
          })
          .catch();

        e.target.reset();
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          toast.error("এই ই-মেইলটি আগে ব্যবহার করা হয়েছে!", {
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
          return;
        }
      });
  };
  return (
    <div>
      <form
        onSubmit={handleRegistration}
        className="fieldset bg-white mx-auto rounded-box w-2xl px-20 py-20 min-h-[50vh]"
      >
        <h1 className="font-bold text-3xl text-center">
          Register Your Account
        </h1>
        <hr className="text-info my-5" />
        {/* Name */}
        <label className="label font-semibold text-base">Name</label>
        <input
          type="name"
          name="name"
          className="input w-full bg-base-200 border-info outline-none py-6 focus:shadow-none"
          placeholder="Enter Your Name"
          required
        />
        {/* Photo URL */}
        <label className="label font-semibold text-base mt-3">Photo URL</label>
        <input
          type="url"
          name="photo"
          className="input w-full bg-base-200 border-info outline-none py-6 focus:shadow-none"
          placeholder="Enter Your Photo URL"
          required
        />
        {/* Email */}
        <label className="label font-semibold text-base mt-3">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full bg-base-200 border-info outline-none py-6 focus:shadow-none"
          placeholder="Enter Your Email"
          required
        />
        {/* Password */}
        <label className="label font-semibold text-base mt-3">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input w-full bg-base-200 border-info outline-none py-6 focus:shadow-none"
            placeholder="Enter Your Password"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-4 right-3 text-base cursor-pointer"
          >
            {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
          </span>
        </div>
        {/* T & C */}
        <label className="label mt-2">
          <input
            name="terms"
            onClick={() => setTerms(!terms)}
            type="checkbox"
            className="checkbox checkbox-xs rounded-sm text-info border-info"
          />
          Accept Our Terms & Conditions.
        </label>
        {/* Button */}
        <button
          disabled={!terms}
          type="submit"
          className="btn btn-neutral hover:shadow-none hover:bg-info hover:border-none hover:text-black mt-4"
        >
          Registration
        </button>
        <p className="my-4 text-center text-sm">
          Already have an Account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
        {/* Message */}
        <div>
          {errorMessage && (
            <p className="text-red-500 text-center">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Registration;
