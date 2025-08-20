import React from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import { InputField } from '../../../global/components/atoms/InputField'
import { ModalForm } from '../../../global/components/organism/ModalForm'

const validationSchema = Yup.object({
  username: Yup.string().required("Campo requerido"),
  email: Yup.string().email("Email inválido"),
  first_name: Yup.string().required("Campo requerido"),
  last_name: Yup.string().required("Campo requerido"),
})

export const ProfileUpdateForm = ({ isOpen, onClose, title }) => {
    const { authUser } = useSelector(state => state.authUser)
    
    const initialValues = {
        first_name: authUser.first_name,
        last_name: authUser.last_name,
        username: authUser.username,
        email: authUser.email || "",
        bio: authUser.bio || "",
        birth_date: authUser.birth_date || ""
    }

    const handleSubmit = (values, { setSubmitting }) => {
        console.log(values)
    }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
        {({ isSubmitting }) => (
        <Form className='space-y-4'>
            <ModalForm isOpen={isOpen} onClose={onClose} title={title} isSubmitting={isSubmitting}>    
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-poppins">
                  <InputField name="first_name" label="Nombre" />
                  <InputField name="last_name" label="Apellido" />
                  <InputField name="username" label="Usuario" />
                  <InputField name="email" placeholder="Email" label="Email" />
                  <InputField name="bio" placeholder="Bio" label="Bio" className='col-span-2'/>
                  <InputField name="birth_date" label="Fecha de nacimiento" type='date'/>
              </div>
            </ModalForm>
        </Form>
        )}
    </Formik>
  )
}