import { useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { ProfileUserHeader } from '../components/ProfileUserHeader'
import { PageWrapper } from '../../../global/components/layout/PageWrapper'
import ThreeColumnsLayout from '../../../global/components/layout/ThreeColumnsLayout'
import { ActionPanel } from '../../../global/components/layout/ActionPanel'
import { PageLoader } from '../../../global/components/atoms/PageLoader'
import { ErrorState } from '../../../global/components/layout/ErrorState'
import { setLoading, setError, upsertUser } from '../slices/usersSlice'
import { getUser } from '../services/usersServices'

export const ProfileUserPage = () => {
  const location = useLocation();
  const isProfile = location.pathname == "/profile";
  const authUser = useSelector(state => state.authUser.authUser)
  const { loading, error } = useSelector(state => state.users)
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
      if(isProfile){
        setUser(authUser)
      }else{
        dispatch(setLoading())
        const fetchUser = async() => {
          try{
            const res = await getUser(id);
            setUser(res);
            dispatch(upsertUser(res))
          }catch(err){
            dispatch(setError({status: err.status || 500, message: err.response.data.detail || "Error inesperado"}))
          }
        }
        fetchUser()
      }
    }, [isProfile, authUser, id, dispatch])

  if(loading) return <PageLoader/>
  if(error) return <ErrorState error={error}/>
  if(!user) return null

  return (
    <PageWrapper>
          <ProfileUserHeader isProfile={isProfile} user={user}/>
          <ThreeColumnsLayout>

            <ThreeColumnsLayout.Left>
              <h2 className="text-lg font-bold mb-2">Perfil</h2>
              <p>Información del usuario...</p>
            </ThreeColumnsLayout.Left>

            <ThreeColumnsLayout.Center>
              <h2 className="text-lg font-bold mb-2">Feed</h2>
              <div className="space-y-3">
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded h-48">Post 1</div>
                <div className="p-3 border rounded">Post 2</div>
              </div>
            </ThreeColumnsLayout.Center>

            <ThreeColumnsLayout.Right>
                <ActionPanel/>
            </ThreeColumnsLayout.Right>

          </ThreeColumnsLayout>
    </PageWrapper>
  )
}