import Radio from "./Radio";
import CategoryButton from "./CategoryButton";
import Loading from "./Loading";
import useCategory from "../hooks/useCategory";
import { Category } from "../types/Category.type";
import { useEffect, useState } from "react";

function Menu({ isOpen }: { isOpen: boolean }) {
  const { loadingCategories, categories } = useCategory();
  const [filterFavorites, setFilterFavorites] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);

  useEffect(() => {
    setFilteredCategories(
      categories.filter((category) =>
        !filterFavorites ? true : category.favorite === true
      )
    );
  }, [filterFavorites, categories]);

  return (
    <aside
      className={`fixed transition-transform transform z-10 h-full bg-white w-full md:translate-x-0 md:relative md:w-1/3 lg:w-1/4 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h2 className="bg-green-950 text-white text-center p-4">Posts</h2>
      <div className="flex space-x-4 p-4 text-sm">
        <Radio checked onChange={() => setFilterFavorites(false)}>
          All Categories
        </Radio>
        <Radio onChange={() => setFilterFavorites(true)}>
          Favorite Categories
        </Radio>
      </div>

      <div className="flex flex-col items-start p-4">
        {loadingCategories ? (
          <Loading />
        ) : (
          filteredCategories.map((category) => (
            <CategoryButton key={category.id} category={category} />
          ))
        )}
      </div>
    </aside>
  );
}

export default Menu;
