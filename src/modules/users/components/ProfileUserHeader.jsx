import { useSelector } from "react-redux";

import { BorderDesign } from "../../../global/components/atoms/BorderDesign";
import { ProfileUserStatsAndFriends } from "./ProfileUserStatsAndFriends";
import { ProfileUserMainInfo } from "./ProfileUserMainInfo";

export const ProfileUserHeader = ({ isProfile, user }) => {

  const followingIds = useSelector(state => state.authUser.followingIds)
  console.log(followingIds)
  const isFollowing = followingIds.includes(user.id)

  return (
    <div className="w-full bg-lightbg font-poppins p-4 md:p-6">
      <div className="bg-lightbg relative rounded-2xl shadow-lg p-6 md:p-8 w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
        <BorderDesign/>
        <ProfileUserMainInfo user={user} isProfile={isProfile} isFollowing={isFollowing}/>
        <ProfileUserStatsAndFriends/>
      </div>
    </div>
  )
}
