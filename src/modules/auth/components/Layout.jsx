import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useFetchProfile } from '../hooks/useFetchProfile'
import { PageLoader } from '../../../global/components/atoms/PageLoader'

export const Layout = () => {
    useFetchProfile()
    const { loading } = useSelector((state) => state.authUser)

    if (loading) return  <PageLoader/>

  return <Outlet/>
}
