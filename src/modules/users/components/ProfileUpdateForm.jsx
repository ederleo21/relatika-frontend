import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'

import { ModalForm } from '../../../global/components/organism/ModalForm'
import { InputField } from '../../../global/components/atoms/InputField'
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit'
import { setAuthUser } from '../../auth/slices/authUserSlice'
import { updateProfile } from '../services/usersServices'

const validationSchema = Yup.object({
  username: Yup.string().required("Campo requerido"),
  first_name: Yup.string().required("Campo requerido"),
  last_name: Yup.string().required("Campo requerido"),
  email: Yup.string().email("Email inválido"),
})

export const ProfileUpdateForm = ({ isOpen, onClose, title, authUser }) => {
    const dispatch = useDispatch()

    const initialValues = {
        first_name: authUser.first_name,
        last_name: authUser.last_name,
        username: authUser.username,
        email: authUser.email || "",
        bio: authUser.bio || "",
        birth_date: authUser.birth_date || "",
        avatar: null
    }

    const handleSubmit = async(values, actions) => {
      const formData = new FormData();
      formData.append('first_name', values.first_name)
      formData.append('last_name', values.last_name)
      formData.append('username', values.username)
      formData.append('email', values.email)
      formData.append('bio', values.bio)
  
      if(values.birth_date) formData.append('birth_date', values.birth_date)
      if(values.avatar) formData.append('avatar', values.avatar)
      const { success, data } = await handleFormSubmit({ values: formData, requestFn: updateProfile, messageSuccess: "Usuario actualizado con éxito!"}, actions)
      if(success) dispatch(setAuthUser(data)) && onClose()
    }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}
    >
        {({ isSubmitting, setFieldValue, values }) => (
        <Form className='space-y-4'>
            <ModalForm isOpen={isOpen} onClose={onClose} title={title} isSubmitting={isSubmitting}>    
              <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-poppins">
                  <InputField name="first_name" label="Nombre" />
                  <InputField name="last_name" label="Apellido" />
                  <InputField name="username" label="Usuario" />
                  <InputField name="email" placeholder="Email" label="Email" />
                  <InputField name="bio" placeholder="Bio" label="Bio" className='col-span-2'/>
                  <InputField name="birth_date" label="Fecha de nacimiento" type='date'/>
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Avatar</label>
                    {authUser.avatar && !values.avatar && (
                      <img src={authUser.avatar} alt="Avatar actual" className="w-16 h-16 rounded-full mb-2"/>
                    )}
                    <input name="avatar" type="file" accept="image/*"
                      onChange={e => setFieldValue("avatar", e.currentTarget.files[0])}
                    />
                  </div>
              </div>
            </ModalForm>
        </Form>
        )}
    </Formik>
  )
}