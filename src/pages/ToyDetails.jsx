import React from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router";

const ToyDetails = () => {
  const { id } = useParams();
  const toysData = useLoaderData();

  const toy = toysData.find((t) => t.toyId === Number(id));
  const { toyId, toyName, price, rating, availableQuantity, pictureURL } = toy;
  return (
    <div className="text-black">
      <Helmet>
        <title>{toyName}</title>
      </Helmet>

    <h1>{toyName}</h1>
    </div>
  );
};

export default ToyDetails;
