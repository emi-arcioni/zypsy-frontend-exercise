import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import CategoryButton from "./CategoryButton";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";
import useCategory from "../hooks/useCategory";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { Post } from "../types/Post.type";
import Loading from "./Loading";

function App() {
  dayjs.extend(advancedFormat);
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const { activeCategory, categories } = useCategory();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/categories/${activeCategory?.id}/posts`
        );
        const sortedPosts = response.data.sort(
          (a: Post, b: Post) =>
            dayjs(a.date).toDate().getTime() - dayjs(b.date).toDate().getTime()
        );
        setPosts(sortedPosts);
      } catch (err) {
        if (err instanceof AxiosError) {
          toast.error(`Posts couldn't be loaded: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    if (activeCategory) fetchData();

    setIsOpen(false);
  }, [activeCategory]);

  return (
    <div className="md:flex min-h-screen">
      <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen} />

      <main className="md:w-3/4 px-4 py-14 border-gray-300 md:border-l">
        {loading ? (
          <Loading />
        ) : (
          activeCategory && (
            <div className="border border-gray-300 rounded">
              <h3 className="font-semibold text-gray-600 border-b border-gray-300 px-6 py-4">
                Found {posts.length} posts of "{activeCategory?.name}"
              </h3>
              {posts.map((post, index) => (
                <div
                  key={post.id}
                  className="m-6 [&:not(:last-child)]:pb-3 [&:not(:last-child)]:border-b border-gray-300"
                >
                  <h4 className="font-bold mb-4">
                    {dayjs(post.date).format("dddd, MMMM Do YYYY")}
                  </h4>
                  <p className="text-gray-700 mb-4">{post.description}</p>
                  <div className="md:flex md:flex-row">
                    {post.categories.map((categoryId, i) => (
                      <CategoryButton
                        key={categoryId}
                        category={categories.find(
                          (category) => category.id === categoryId
                        )}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )
        )}
      </main>
    </div>
  );
}

export default App;
