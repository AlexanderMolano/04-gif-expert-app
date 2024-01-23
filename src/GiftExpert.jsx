import React, { useState } from "react";
import { AddCategory, GifList } from "./components";

const GiftExpert = () => {
  const [categories, setCategories] = useState([]);

  const handleNewCategory = (newCategory) => {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  };

  return (
    <div>
      <h1>Gif Search App</h1>
      <AddCategory onNewCategory={handleNewCategory} />
      {categories.map((category) => (
        <GifList key={category} category={category} />
      ))}
    </div>
  );
};

export default GiftExpert;
