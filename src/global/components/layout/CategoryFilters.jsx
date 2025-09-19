
export const CategoryFilters = ({ activeCategory, setActiveCategory }) => {
  const categories = ["users", "posts", "groups"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-greybg sticky top-6 font-poppins">
      <h3 className="font-bold text-lg mb-6 text-darktext">Categorías</h3>
      <ul className="flex flex-col gap-3">
        {categories.map((cat) => (
          <li
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              cursor-pointer p-3 rounded-xl text-center font-medium transition
              ${activeCategory === cat 
                ? "bg-indigo_light text-white shadow-md" 
                : `hover:bg-greybg text-lighttext`}
            `}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

