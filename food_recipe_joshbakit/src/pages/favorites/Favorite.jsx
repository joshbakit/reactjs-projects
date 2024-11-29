import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Favorite = () => {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className=" py-8 px-4 mx-auto flex justify-center flex-wrap gap-5">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div className="text-center text-3xl text-red-800 font-extrabold ">
          Nothing is added here
        </div>
      )}
    </div>
  );
};

export default Favorite;
