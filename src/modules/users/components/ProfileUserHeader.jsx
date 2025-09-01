import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { BorderDesign } from "../../../global/components/atoms/BorderDesign";
import { ProfileUserStatsAndFriends } from "./ProfileUserStatsAndFriends";
import { ProfileUserMainInfo } from "./ProfileUserMainInfo";
import { PageLoader } from '../../../global/components/atoms/PageLoader';
import { getUser } from '../services/usersServices';

export const ProfileUserHeader = ({ isProfile }) => {
  const authUser = useSelector(state => state.authUser.authUser)
  const [user, setUser] = useState(null);
  const { id } = useParams();
  
  useEffect(() => {
    if(isProfile){
      setUser(authUser)
    }else{
      const fetchUser = async() => {
        try{
          const res = await getUser(id)
          setUser(res)
        }catch(err){
         console.log(err) 
        }
      }
      fetchUser()
    }
  }, [isProfile, authUser, id])

  if(!user) return <PageLoader/>

  return (
    <div className="w-full bg-lightbg font-poppins p-4 md:p-6">
      <div className="bg-lightbg relative rounded-2xl shadow-lg p-6 md:p-8 w-full flex flex-col lg:flex-row gap-6 lg:gap-8">
        <BorderDesign/>
        <ProfileUserMainInfo user={user} isProfile={isProfile} />
        <ProfileUserStatsAndFriends/>
      </div>
    </div>
  )
}
