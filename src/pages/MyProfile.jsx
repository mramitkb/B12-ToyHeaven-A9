import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import { toast, Zoom } from "react-toastify";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    updateUserProfile(displayName, photoURL)
      .then(() => {
        toast(`আপনার প্রোফাইল আপডেট সফল হয়েছে।`, {
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
        e.target.reset();
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
    <div className="w-10/12 mx-auto my-10 md:my-20">
        <Helmet>
            <title>My Profile</title>
        </Helmet>
      <h1 className="text-2xl font-semibold text-center">Profile Details</h1>
      <hr className="text-[#8cdaaa] border my-5" />
      {/* Show Profile Details */}
      <div className="flex flex-col border-base-300 border md:w-6/12 mx-auto justify-center space-y-3 shadow-xl p-5 rounded-lg">
        <div className="">
          <img
            className="object-cover rounded-xl md:w-[50%] mx-auto"
            src={user?.photoURL}
            alt=""
          />
        </div>
        <h1 className="font-semibold">Name: {user?.displayName}</h1>
        <p className="text-sm font-medium">Email: {user?.email}</p>
      </div>
      {/* Update Profile Name & PhotoURL */}
      <div className="md:w-8/12 mx-auto mt-10">
        <form
          onSubmit={handleUpdateProfile}
          className="fieldset w-[70%] mx-auto"
        >
          <h1 className="font-bold text-xl md:text-3xl text-center text-[#24ad6d]">
            Update Profile
          </h1>
          <hr className="text-[#8cdaaa] my-3 md:my-5" />
          {/* Name */}
          <label className="label font-semibold text-sm">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full bg-base-200 border-[#8cdaaa] outline-none md:py-6 focus:shadow-none"
            placeholder="Update Your Name"
            required
          />
          {/* PhotoURL */}
          <label className="label font-semibold text-sm">PhotoURL</label>
          <input
            type="url"
            name="photo"
            className="input w-full bg-base-200 border-[#8cdaaa] outline-none md:py-6 focus:shadow-none"
            placeholder="Update Your Photo"
            required
          />
          {/* Button */}
          <button
            type="submit"
            className="btn w-fit mx-auto btn-sm md:btn-md btn-neutral hover:bg-success hover:shadow-none hover:border-none hover:text-black mt-4"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
