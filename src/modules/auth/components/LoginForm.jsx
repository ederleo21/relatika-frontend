import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import { InputField } from '../../../global/components/atoms/InputField'
import { Button } from '../../../global/components/atoms/Button'
import { loginUser } from '../services/authService'
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit'

const validationSchema = Yup.object({
    username: Yup.string().required("Campo requerido"),
    password: Yup.string().required("Campo requerido")
})

const initialValues = {
    username: "",
    password: ""
}
export const LoginForm = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (values, actions) => {
      handleFormSubmit({values, 
                        requestFn: loginUser, 
                        messageSuccess: "Bienvenido a Relatika!",
                        onSuccess: () => navigate("/home")
                      }, actions)
  }

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
      {({ isSubmitting }) => (
        <Form>
          <div className='grid grid-cols-2 gap-x-5 gap-y-4 px-5 font-poppins'>
            <InputField name="username" placeholder="Username" label="Username" />
            <InputField name="password" type='password' placeholder="Contraseña" label="Contraseña" className='col-span-2' />
          </div>

          <Button type='submit' text={isSubmitting ? "Iniciando..." : "Iniciar"} className='bg-indigo-600 hover:bg-indigo-700' disabled={isSubmitting} />
        </Form>
      )}
      </Formik>
    </section>
  )
}