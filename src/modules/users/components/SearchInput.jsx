import { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { api } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const containerRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      api.get(`/users/search/`, { params: { q: query }})
        .then(res => setResults(res.data))
        .catch(err => console.error(err));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div ref={containerRef} className="relative flex items-center w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => {setQuery(e.target.value);setShowDropdown(true);}}
        placeholder="Buscar en Relatika..."
        className="w-full text-lg placeholder:text-lighttext rounded-full px-4 py-2
                   border-2 border-gray-200 bg-greybg text-darktext
                   focus:outline-none focus:border-red_coral
                   hover:border-red_coral transition duration-200 pr-10"
        onFocus={() => setShowDropdown(true)}
      />

      <button
        type="button"
        className="absolute right-3 text-gray-500 hover:text-red_coral transition-colors"
        onClick={() => {query.trim() && navigate(`/results?query=${query}`); setShowDropdown(false)}}>
        <FiSearch size={22} />
      </button>

      {showDropdown && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 w-full max-h-80 bg-white shadow-lg rounded-lg border border-gray-200 z-50 overflow-auto">
          {results.map((user) => (
            <Link key={user.id} to={`/user/${user.id}/`}>
              <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3">
                <img src={user.avatar} alt={user.username} className="w-10 h-10 rounded-full"/>
                <div>
                  <p className="font-medium text-darktext">{user.first_name} {user.last_name}</p>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
