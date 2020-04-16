import React from "react";

const Card = (props) => {
  return (
    <div className="max-w-sm overflow-hidden bg-white border rounded-lg">
      <img src={props.image} alt={props.image} />
      <div className="p-6 ">
        <div className="text-xs font-semibold tracking-wide text-gray-600 uppercase">
          {props.beds} beds * {props.baths} baths
        </div>
        <h4 className="text-lg font-semibold leading-tight truncate">
          {props.title}
        </h4>

        <div className="mt-1 ">
          ${props.price} <span className="text-sm text-gray-600"> / wk</span>
        </div>
        <div className="mt-4 font-semibold text-teal-600">
          {props.rating}/5 stars{"   "}
          <span className="text-sm text-gray-600">
            (based on {props.reviewCount}) reviews
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
