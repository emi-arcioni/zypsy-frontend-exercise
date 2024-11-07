import React, { useState } from "react";
import Button from "./Button";
import MenuToggle from "./MenuToggle";
import Menu from "./Menu";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const posts = [
    {
      date: "Thursday, May 23rd 2024",
      categories: ["Cooking", "Latest Tech News", "Investing"],
      content:
        "Cooking delicious and nutritious meals on weeknights can often feel like a daunting task. However, with a few simple strategies, it’s possible to whip up satisfying dinners in no time. One key is to plan ahead and keep a stock of versatile ingredients like pasta, canned tomatoes, and frozen vegetables. These staples can be quickly transformed into a variety of dishes, from hearty pasta bakes to stir-fries.",
    },
  ];

  return (
    <div className="md:flex min-h-screen">
      <MenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu isOpen={isOpen} />

      <main className="md:w-3/4 px-4 py-14 border-gray-300 md:border-l">
        <div className="border border-gray-300 rounded">
          <h3 className="font-semibold text-gray-600 border-b border-gray-300 px-6 py-4">
            Found {posts.length} posts of “Cooking”
          </h3>
          {posts.map((post, index) => (
            <div
              key={index}
              className="m-6 [&:not(:last-child)]:pb-3 [&:not(:last-child)]:border-b border-gray-300"
            >
              <h4 className="font-bold mb-4">{post.date}</h4>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <div className="md:flex md:flex-row">
                {post.categories.map((category, i) => (
                  <Button key={i}>{category}</Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
