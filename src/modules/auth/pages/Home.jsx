import { useNavigate } from 'react-router-dom'
import { handleLogout } from '../logic/handleLogout'
import { useDispatch } from 'react-redux'

export const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

  return (
    <div>Home de Relatika
        <button onClick={() => handleLogout({ navigate, dispatch })} className='p-2 bg-red-400'>Logout</button>
    </div>
  )
}
