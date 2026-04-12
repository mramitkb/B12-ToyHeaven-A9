import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";
import { toast, Zoom } from "react-toastify";

const ToyDetails = () => {
  const { id } = useParams();
  const toysData = useLoaderData();

  const toy = toysData.find((t) => t.toyId === Number(id));
  const {
    toyName,
    price,
    rating,
    availableQuantity,
    pictureURL,
    sellerEmail,
    description,
  } = toy;

  const handleTryNowForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    toast(`🧸 Thank You for reaching us - "${name}"!`, {
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
  };
  return (
    <div className="my-10 w-10/12 mx-auto">
      <Helmet>
        <title>{toyName}</title>
      </Helmet>
      {/* Toy Details */}
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex-1">
          <img className="rounded-xl" src={pictureURL} alt="" />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-bold">{toyName}</h1>
          <p>Email: {sellerEmail}</p>
          <p>Description: {description}</p>
          <div className="flex items-center justify-between font-semibold">
            <p>
              Price: ${price}/
              <span className="line-through decoration-red-600 decoration-2">
                ${parseInt(price + 20)}
              </span>
            </p>
            <p
              className={`${availableQuantity > 10 ? "text-green-600" : "text-red-600"}`}
            >
              Quantity: {availableQuantity}
            </p>
            <p className="text-yellow-400">Rating: {rating}</p>
          </div>
          <hr className="text-[#a9d8bb]" />
          {/* Try Now */}
          <div className="flex items-center flex-col mt-10">
            <h1 className="text-2xl font-bold text-primary mb-3">Try Now </h1>
            <form onSubmit={handleTryNowForm} className="fieldset w-full">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Your Name"
                required
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Your Email"
                required
              />
              {/*  */}
              <button
                type="submit"
                className="btn w-fit mx-auto btn-neutral mt-4 hover:text-primary"
              >
                Try Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
