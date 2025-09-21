import { FaUser, FaRegNewspaper, FaUsers } from "react-icons/fa";

export const CategorySelect = ({ activeCategory, setActiveCategory }) => {
  const categories = [
      ["users", "Usuarios", <FaUser key="icon-user" />],
      ["posts", "Publicaciones", <FaRegNewspaper key="icon-posts" />],
      ["groups", "Grupos", <FaUsers key="icon-groups" />],
    ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-greybg sticky top-6 font-poppins">
      <h3 className="font-bold text-lg mb-6 text-darktext">Búsqueda</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Categorías a la izquierda */}
        <ul className="flex flex-col gap-3">
          {categories.map(([key, label, icon]) => (
            <li
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`
                cursor-pointer p-3 rounded-xl font-medium transition flex items-center justify-between
                ${activeCategory === key
                  ? "bg-indigo_light text-white shadow-md"
                  : "hover:bg-greybg text-lighttext"}
              `}
            >
              <span>{label}</span>
              <span className="text-lg">{icon}</span>
            </li>
          ))}
        </ul>

        {/* Filtros a la derecha */}
        <CategoryFilters activeCategory={activeCategory} />
      </div>
    </div>
  );
};


const CategoryFilters = ({ activeCategory }) => {

  return (
    <div className="bg-greybg p-4 rounded-xl shadow-inner">
      <h4 className="font-semibold text-darktext mb-3">Filtros</h4>

      {/* Users */}
      {activeCategory === "users" && (
        <div className="flex flex-col gap-3">
          <label className="text-sm text-lighttext">País</label>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="">Todos</option>
            <option value="ecuador">Ecuador</option>
            <option value="mexico">México</option>
            <option value="colombia">Colombia</option>
          </select>
        </div>
      )}

      {/* Posts */}
      {activeCategory === "posts" && (
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm text-lighttext">Rango de fecha</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="week">Última semana</option>
              <option value="month">Último mes</option>
              <option value="year">Último año</option>
              <option value="all">Todos</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-lighttext">Ordenar</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg">
              <option value="recent">Más recientes</option>
              <option value="popular">Más populares</option>
            </select>
          </div>
        </div>
      )}

      {/* Groups */}
      {activeCategory === "groups" && (
        <div className="flex flex-col gap-3">
          <label className="text-sm text-lighttext">Ordenar</label>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option value="az">Nombre A-Z</option>
            <option value="za">Nombre Z-A</option>
          </select>
        </div>
      )}
    </div>
  );
};
