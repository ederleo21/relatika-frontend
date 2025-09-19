import React, { useEffect, useState } from 'react'
import { getSearchResults } from '../../../global/services/globalServices'
import { SectionLoader } from '../../../global/components/atoms/SectionLoader'
import { CardUser } from './CardUser';

export const UsersResultsList = ({ query, category }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserResults = async (query) => {
      setLoading(true);
      try {
        const res = await getSearchResults(query, category);
        setUsers(res);
      } catch(err){
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUserResults(query);
  }, [query, category]);

  if (loading) return <SectionLoader />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user) => (
        <CardUser user={user}/>
      ))}
    </div>
  );
};
