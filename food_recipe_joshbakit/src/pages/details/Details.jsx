import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorites,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    };
    fetchRecipeDetails();
  }, []);

  return (
    <div className="mx-auto mt-5">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={recipeDetailsData?.recipe?.image_url} alt="Album" />
        </figure>
        <div className="card_body p-4">
          <h2 className="card-title">{recipeDetailsData?.recipe?.title}</h2>
          <p className="text-start text-gray-400">
            From: {recipeDetailsData?.recipe?.publisher}
          </p>
          <ul className="mt-4">
            <p className="font-bold text-start">Ingredients:</p>
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index}>
                <p className="capitalize text-start text-sm text-gray-400 italic">
                  {ingredient?.quantity}
                  {ingredient?.unit} {ingredient?.description}
                </p>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleAddToFavorites(recipeDetailsData?.recipe)}
            className="mt-4 text-xs border py-2 px-4 rounded-lg hover:bg-white hover:text-black "
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "remove for favorites"
              : "add to favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
