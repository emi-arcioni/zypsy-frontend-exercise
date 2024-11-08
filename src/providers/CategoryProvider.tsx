import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Category } from "../types/Category.type";
import axios from "axios";

export const CategoryContext = createContext<{
  activeCategory: Category | undefined;
  setActiveCategory: Dispatch<SetStateAction<Category | undefined>>;
  categories: Category[];
  loadingCategories: boolean;
  switchFavorite: (category?: Category) => void;
}>({
  activeCategory: undefined,
  setActiveCategory: () => {},
  categories: [],
  loadingCategories: true,
  switchFavorite: () => {},
});

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const query = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const categoryId = query.get("categoryId");
  const [activeCategory, setActiveCategory] = useState<Category | undefined>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  const switchFavorite = async (category?: Category) => {
    if (!category) return;
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/categories/${category.id}`,
        {
          id: category.id,
          name: category.name,
          favorite: !category.favorite,
        }
      );
      setCategories((categories) =>
        categories.map((c) =>
          c.id === category.id ? { ...response.data } : { ...c }
        )
      );
    } catch (err) {
      console.log("Favorite couldn't be updated");
    }
  };

  const categoryContextValue = useMemo(
    () => ({
      activeCategory,
      setActiveCategory,
      categories,
      loadingCategories: loading,
      switchFavorite,
    }),
    [activeCategory, categories, loading]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`);
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        console.log("Categories couldn't be loaded");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (categories.length) {
      let category: Category | undefined = categories[0];
      if (categoryId)
        category = categories.find((category) => category.id === categoryId);

      setActiveCategory(category);
    }
  }, [categories, categoryId]);

  useEffect(() => {
    if (activeCategory)
      navigate(`?categoryId=${activeCategory?.id}`, { replace: true });
  }, [activeCategory, navigate]);

  return (
    <CategoryContext.Provider value={categoryContextValue}>
      {children}
    </CategoryContext.Provider>
  );
};
