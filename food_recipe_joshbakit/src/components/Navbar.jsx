import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context";
import { useContext } from "react";

const Navbar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Food Recipe</a>
      </div>
      <div className="flex-1 gap-2 search">
        <form onSubmit={handleSubmit} className="form-control w-full">
          <input
            type="text"
            name="search"
            value={searchParam}
            onChange={(event) => setSearchParam(event.target.value)}
            placeholder="Search"
            className="input input-bordered w-auto"
          />
        </form>
      </div>
      <div className="flex-1 gap-2 links justify-end mr-4">
        <div className="links flex gap-2">
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/favorites" className="link link-hover">
            Favorite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
