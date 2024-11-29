import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavorites(getCurrentItem) {
    let cpyFavoritelist = [...favoritesList];
    const index = cpyFavoritelist.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritelist.push(getCurrentItem);
    } else {
      cpyFavoritelist.splice(index);
    }

    setFavoritesList(cpyFavoritelist);
  }

  console.log(favoritesList, "favoritesList");

  return (
    <GlobalContext.Provider
      value={{
        recipeDetailsData,
        setRecipeDetailsData,
        searchParam,
        loading,
        recipeList,
        setSearchParam,
        handleSubmit,
        handleAddToFavorites,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
