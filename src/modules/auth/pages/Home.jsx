import { useNavigate } from 'react-router-dom'
import { handleLogout } from '../logic/handleLogout'

export const Home = () => {
    const navigate = useNavigate()

  return (
    <div>Home de Relatika
        <button onClick={() => handleLogout({ navigate })} className='p-2 bg-red-400'>Logout</button>
    </div>
  )
}
