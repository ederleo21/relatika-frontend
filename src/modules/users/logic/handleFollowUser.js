import { removeIdFollowing, addIdFollowing } from '../../auth/slices/authUserSlice'
import { unFollowUser, followUser } from '../services/usersServices'
import { toast } from "react-toastify";

export const handleFollowUser = async(isFollowing, { id, username }, dispatch) => {
        try{
          if(isFollowing){
            await unFollowUser(id)
            toast.success(`Dejaste de seguir a ${username}`)
            dispatch(removeIdFollowing(id))
          }else{  
              await followUser({"userId": id})
              toast.success(`¡Ahora sigues a ${username}!`)
              dispatch(addIdFollowing(id))
          }
        }catch(err){
          toast.error(err?.response?.data?.error || "Error inesperado")
        }
}
