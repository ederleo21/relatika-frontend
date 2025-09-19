import { api } from "../../services/api";
import { endpoints } from "../../services/endpoints";

export const getSearchResults = async(query, category="users") => {
    const res = await api.get(endpoints.global.searchResults, { params: { q: query, category: category  }})
    return res.data
}