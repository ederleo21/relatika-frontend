import { useLocation, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'

import { ProfileUserHeader } from '../components/ProfileUserHeader'
import { PageWrapper } from '../../../global/components/layout/PageWrapper'
import ThreeColumnsLayout from '../../../global/components/layout/ThreeColumnsLayout'
import { ActionPanel } from '../../../global/components/layout/ActionPanel'
import { ErrorState } from '../../../global/components/layout/ErrorState'
import { setLoading, setError, upsertUser, selectUserById } from '../slices/usersSlice'
import { getUser } from '../services/usersServices'
import { parseError } from '../../../global/utils/parseError'

export const ProfileUserPage = () => {
  const location = useLocation();
  const isProfile = location.pathname == "/profile";
  const authUser = useSelector(state => state.authUser.authUser)
  const { loading, error } = useSelector(state => state.users)
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();
  const existingUser = useSelector(state => selectUserById(state, id))
  console.log(authUser)

  useEffect(() => {
      if(isProfile){
        if(error) dispatch(setError(null))
        setUser(authUser)
      }else if(!existingUser){
        dispatch(setLoading())
        const fetchUser = async() => {
          try{
            const res = await getUser(id);
            setUser(res);
            dispatch(upsertUser(res));
          }catch(err){
            dispatch(setError(parseError(err)));
          }
        }
        fetchUser()
      }else{
        setUser(existingUser)
      }
    }, [isProfile, authUser, id, dispatch])
    
    if(loading) return null
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
            </ThreeColumnsLayout.Center>

            <ThreeColumnsLayout.Right>
                <ActionPanel/>
            </ThreeColumnsLayout.Right>

          </ThreeColumnsLayout>
    </PageWrapper>
  )
}