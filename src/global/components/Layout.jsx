import { Outlet } from 'react-router-dom'
import { useFetchProfile } from '../../modules/auth/hooks/useFetchProfile'

export const Layout = () => {
    useFetchProfile()

  return <Outlet/>
}
