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
  
  const handleSubmit = async(values, actions) => {
      const { success } = await handleFormSubmit({values, requestFn: loginUser, messageSuccess: "Bienvenido a Relatika!"}, actions)
      if(success) navigate("/home")
  }

  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 gap-y-6 font-poppins">
              <InputField name="username" placeholder="Usuario" label="Usuario" />
              <InputField name="password" type="password" placeholder="Contraseña" label="Contraseña"/>
            </div>
        
            <Button
              type="submit"
              text={isSubmitting ? "Espere..." : "Iniciar"}
              className="w-full bg-indigo_light hover:bg-indigo-700 text-white py-2 rounded-lg shadow-md transition"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </section>
  )
}