import React from "react";

interface CardProps {
  title: string;
  thumbnail: string;
  price: number;
  rating: number;
}

const Card = ({ title, thumbnail, price, rating }: CardProps) => {
  return (
    <div className="flex flex-col justify-end">
      <div className="relative">
        <img src={thumbnail} alt="" className="h-96 object-cover m-auto" />
        <span className="absolute top-4 px-4 py-2 bg-sky-200 text-sky-800 font-bold">
          ${(price / 100).toFixed(2)}
        </span>
      </div>
      <div className="p-2 text-center">
        <h2 className="my-4 text-2xl font-bold">{title}</h2>
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default Card;