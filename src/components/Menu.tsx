import Radio from "./Radio";
import Button from "./Button";

function Menu({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`fixed transition-transform transform z-10 h-full bg-white w-full md:translate-x-0 md:relative md:w-1/4 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <h2 className="bg-green-950 text-white text-center p-4">Posts</h2>
      <div className="flex space-x-4 p-4 text-sm">
        <Radio>All Categories</Radio>
        <Radio>Favorite Categories</Radio>
      </div>
      <div className="flex flex-col items-start p-4">
        <Button>Cooking</Button>
        <Button>Latest Tech News</Button>
        <Button>Travel and Adventure</Button>
        <Button>Product Reviews</Button>
        <Button>DIY Projects</Button>
        <Button>Investing</Button>
        <Button>Entrepreneurship</Button>
        <Button>Motorsport</Button>
      </div>
    </aside>
  );
}

export default Menu;
