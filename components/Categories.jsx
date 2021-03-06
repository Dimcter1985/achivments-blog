import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../requests";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white bg-opacity-70 shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-pink-600 pb-4">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
          <span className="cursor-pointer block pb-3 mb-3 transition duration-300 hover:text-pink-600">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
