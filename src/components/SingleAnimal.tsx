import React from "react";
import { Animal } from "../model/animal";
import { Link } from "react-router-dom";

const SingleAnimal: React.FC<Animal | any> = ({ data }) => {
  const shortDescription = (des: string) => {
    return des.slice(0, 100) + "...";
  };

  return (
    <Link to={`/${data.animal_id}`}>
      <div className="mt-10 p-4 rounded-md w-[300px] text-center shadow-card">
        <img
          src={data.animal_avatar}
          alt=""
          className="w-[300px] rounded-md object-cover"
        />
        <h1 className=" mt-2">{data.animal_name}</h1>
        <p className="text-black">{shortDescription(data.animal_desc)}</p>
        <h3>{data.animal_price}$</h3>
      </div>
    </Link>
  );
};

export default SingleAnimal;
