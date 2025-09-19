import { useState } from 'react'

import { PageWrapper } from '../components/layout/PageWrapper'
import { useLocation } from 'react-router-dom'
import { UsersResultsList } from '../../modules/users/components/UsersResultsList';
import { CategoryFilters } from '../components/layout/CategoryFilters';

export const SearchResultsPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [activeCategory, setActiveCategory] = useState("users");

  return (
    <PageWrapper>
      <div className="flex gap-6 px-6 py-8">

        <div className="w-1/3">
          <CategoryFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>

        <div className="flex-1 flex flex-col gap-6 font-poppins">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Resultados para: <span className="text-indigo_light">{query}</span>
          </h2>

          {activeCategory === "users" && <UsersResultsList query={query} category={activeCategory} />}
          {activeCategory === "posts" && <div className="text-gray-600 text-lg">No hay posts por ahora...</div>}
          {activeCategory === "groups" && <div className="text-gray-600 text-lg">No hay grupos por ahora...</div>}
        </div>
      </div>
    </PageWrapper>
  );
};

