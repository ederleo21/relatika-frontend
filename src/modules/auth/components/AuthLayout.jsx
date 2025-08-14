import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useFetchProfile } from '../hooks/useFetchProfile'
import { PageLoader } from '../../../global/components/atoms/PageLoader'

export const AuthLayout = () => {
  useFetchProfile()
  const { loading, authUser } = useSelector((state) => state.authUser)

  if (loading || !authUser ) return  <PageLoader/>

  return <Outlet/>
}
