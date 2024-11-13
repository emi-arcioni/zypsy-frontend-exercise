import { useContext } from "react";
import { CategoryContext } from "../providers/CategoryProvider";

function useCategory() {
  return useContext(CategoryContext);
}

export default useCategory;
