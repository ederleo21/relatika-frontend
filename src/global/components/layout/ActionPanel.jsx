import React, { useState } from 'react'
import { Button } from '../atoms/Button'
import { PostForm } from '../../../modules/posts/components/PostForm'

export const ActionPanel = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col gap-2 items-center bg-lightbg py-3 px-5'>
        <h1 className='text-xl font-lora font-bold'>Acciones</h1>
        <Button text='Crear publicación' className='bg-indigo_light hover:bg-indigo-700' onClick={() => setIsOpen(true)}/>
        <Button text='Buscar publicación' className='bg-red_coral'/>
        <PostForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}
