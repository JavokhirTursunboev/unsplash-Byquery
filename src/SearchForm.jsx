import React from "react";
import { UseContextApp } from "./context";

const SearchForm = () => {
  const { setSearchImage } = UseContextApp();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchImage(searchValue);
  };
  return (
    <section>
      <h1 className="title">UNsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          className=" form-input search-input"
          placeholder="cat"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};
export default SearchForm;
