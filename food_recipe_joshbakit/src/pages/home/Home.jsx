import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>loading ...</div>;
  }

  return (
    <div className=" py-8 px-4 mx-auto flex justify-center flex-wrap gap-5">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} key={item.id} />)
      ) : (
        <div className="text-center text-3xl text-red-800 font-extrabold ">
          No recipes found! Try search for something.
        </div>
      )}
    </div>
  );
};

export default Home;
