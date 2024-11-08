import React from "react";
import { Category } from "../types/Category.type";
import useCategory from "../hooks/useCategory";

function CategoryButton({ category }: { category?: Category }) {
  const { activeCategory, setActiveCategory, switchFavorite } = useCategory();

  const selected = category?.id === activeCategory?.id;

  const getClassName = (favorite: boolean, selected: boolean) => {
    const strokeClass = selected ? "stroke-green-950" : "stroke-white";
    const fillClass = favorite
      ? selected
        ? "fill-green-950"
        : "fill-white"
      : "";

    return `${fillClass} ${strokeClass}`.trim();
  };
  return (
    <div className="relative inline-flex items-center mr-4 mb-4">
      <button
        onClick={() => setActiveCategory(category)}
        className={`${
          selected
            ? "border border-green-950 bg-white text-black"
            : "bg-green-950 text-white"
        } font-semibold py-2 pl-5 pr-12 rounded text-left flex justify-between items-center`}
      >
        {category?.name}
      </button>
      <button
        onClick={() => switchFavorite(category)}
        className="absolute z-1 right-4 top-1/2 transform -translate-y-1/2 text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`size-5 ${getClassName(
            category?.favorite || false,
            selected
          )}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </button>
    </div>
  );
}

export default CategoryButton;
