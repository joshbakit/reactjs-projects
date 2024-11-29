/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const RecipeItem = ({ item }) => {
  return (
    <div className="bg-cyan-800 w-[227px] h-[295px] shadow-xl rounded-xl flex flex-col">
      <figure className="h-[150px]">
        <img
          src={item?.image_url}
          alt={item?.title}
          className="rounded-xl w-full h-full object-cover"
        />
      </figure>
      <div className="align-bottom text-center">
        <h2 className="text-[16px]">{item?.title}</h2>
        <p className="text-[14px]">{item?.publisher}</p>
        <div className="card-actions justify-center">
          <Link
            to={`/recipe-item/${item?.id}`}
            className="px-4 py-2 rounded-lg bg-sky-200 text-black text-[12px] hover:bg-sky-400"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
