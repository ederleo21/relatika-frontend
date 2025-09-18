import { useSelector, useDispatch } from "react-redux";

import { BorderDesign } from "../../../global/components/atoms/BorderDesign";
import { ProfileUserStatsAndFriends } from "./ProfileUserStatsAndFriends";
import { ProfileUserMainInfo } from "./ProfileUserMainInfo";
import { followUser, unFollowUser } from "../services/usersServices";
import { toast } from "react-toastify";
import { addIdFollowing, removeIdFollowing } from "../../auth/slices/authUserSlice";

export const ProfileUserHeader = ({ isProfile, user }) => {
  const followingIds = useSelector(state => state.authUser.followingIds)
  const isFollowing = followingIds.includes(user.id)
  const dispatch = useDispatch();

  const handleFollow = async(user) => {
    try{
      if(isFollowing){
        await unFollowUser(user.id)
        toast.success(`Dejaste de seguir a ${user.username }`)
        dispatch(removeIdFollowing(user.id))
      }else{  
          await followUser({"userId": user.id})
          toast.success(`¡Ahora sigues a ${user.username }!`)
          dispatch(addIdFollowing(user.id))
      }
    }catch(err){
      toast.error(err?.response?.data?.error || "Error inesperado")
    }
  }

  return (
    <div className="w-full bg-lightbg font-poppins p-4 md:p-6">
      <div className="bg-lightbg relative rounded-2xl shadow-lg p-6 md:p-8 w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
        <BorderDesign/>
        <ProfileUserMainInfo user={user} isProfile={isProfile} isFollowing={isFollowing} handleFollow={handleFollow} />
        <ProfileUserStatsAndFriends user={user} />
      </div>
    </div>
  )
}
