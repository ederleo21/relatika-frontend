import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { handleFollowUser } from '../logic/handleFollowUser';

export const CardUser = ({ user }) => {
  const {followingIds, authUser} = useSelector(state => state.authUser)
  const isFollowing = followingIds.includes(user.id)
  const dispatch = useDispatch();
  
  return (
    <div key={user.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col items-center text-center font-poppins">

      <div className="w-28 h-28 rounded-full overflow-hidden mt-5 border-2 border-indigo_light">
        <img
          src={user.avatar || "/default-avatar.png"}
          alt={user.first_name + " " + user.last_name}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="font-lora font-semibold text-xl text-darktext mt-4">
        {user.first_name} {user.last_name}
      </h3>

      <p className="text-lighttext mb-4">@{user.username}</p>

      <div className="flex gap-3 mb-5">
        {authUser.id != user.id && (
          <button onClick={() => handleFollowUser(isFollowing, user, dispatch)} className={`px-4 py-2 rounded-full text-sm font-medium transition ${isFollowing ? "bg-gray-300 text-gray-700 hover:bg-gray-400" : "bg-indigo-500 text-white hover:bg-indigo-600"}`}>
            { isFollowing ? "Siguiendo" : "Seguir" }
          </button>
        )}
        <Link to={`/user/${user.id}`}>
          <button className="bg-greybg text-darktext px-4 py-2 rounded-full text-sm font-medium hover:bg-lightbg transition">
            Ver Perfil
          </button>
        </Link>
      </div>
    </div>
  );
};
