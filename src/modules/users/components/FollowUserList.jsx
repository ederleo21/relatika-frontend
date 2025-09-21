import React, { useEffect, useState } from 'react'
import { ModalContent } from '../../../global/components/layout/ModalContent'
import { getListFollowers, getListFollowing } from '../services/usersServices'
import { SectionLoader } from '../../../global/components/atoms/SectionLoader'
import { Link } from 'react-router-dom'

export const FollowUserList = ({ title="Lista de usuarios", labelStat="", onClose, userId }) => {
    const [loading, setLoading] = useState(true)
    const [listUsers, setListUsers] = useState([])

    useEffect(() => {
        const fetchListUsers = async () => {
            try {
                let res = []
                if(labelStat === "Seguidores"){
                    res = await getListFollowers(userId)
                } else if(labelStat === "Siguiendo"){
                    res = await getListFollowing(userId)
                }
                setListUsers(res)
            } catch(err) {
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchListUsers()
    }, [labelStat, userId])

    return (
      <ModalContent onClose={onClose}>
        {loading ? (
          <SectionLoader />
        ) : listUsers.length > 0 ? (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
            <ul className="flex flex-col gap-3 w-full">
              {listUsers.map(user => (
                <Link key={user.id} to={`/user/${user.id}/`} className="w-full">
                  <li
                    className="
                      flex items-center gap-4 py-3 px-4 bg-white rounded-xl shadow-md 
                      hover:shadow-lg hover:bg-gray-50 hover:ring-2 hover:ring-indigo_light
                      transition cursor-pointer
                    "
                  >
                    <img
                      src={user.avatar}
                      alt={user.username}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold text-gray-800">
                        {user.first_name} {user.last_name}
                      </span>
                      <span className="text-sm text-gray-500">@{user.username}</span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-400 text-lg mt-6">
            No hay usuarios para mostrar.
          </p>
        )}
      </ModalContent>
    )
}
