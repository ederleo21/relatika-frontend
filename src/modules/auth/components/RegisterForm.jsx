import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import { InputField } from '../../../global/components/atoms/InputField';

const validationSchema = Yup.object({
  username: Yup.string().required("Campo requerido"),
  email: Yup.string().email("Email inválido"),
  password: Yup.string()
    .min(8, "Mínimo 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una minúscula")
    .matches(/[0-9]/, "Debe contener al menos un número")
    .required("Campo requerido"),
  password2: Yup.string()
  .oneOf([Yup.ref('password'), null], "Las contraseñas no coinciden")
  .required("Campo requerido"),
  first_name: Yup.string(),
  last_name: Yup.string(),
})

const initialValues = {
  username: "",
  email: "",
  password: "",
  password2: "",
  first_name: "",
  last_name: "",
}

const handleSubmit = (values, { resetForm }) =>  {
  console.log(values)
  resetForm()
}

export const RegisterForm = () => {
  return (
    <section>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        <Form>
          <div className='grid grid-cols-2 gap-x-5 gap-y-4 px-5 font-poppins'>
            <InputField name="first_name" placeholder="Nombre" label="Nombre" />
            <InputField name="last_name" placeholder="Apellido" label="Apellido" />
            <InputField name="username" placeholder="Username" label="Username" />
            <InputField name="email" placeholder="Email" label="Email" />
            <InputField name="password" type='password' placeholder="Contraseña" label="Contraseña" className='col-span-2' />
            <InputField name="password2" type='password' placeholder="Confirmar contraseña" label="Confirmar contraseña" className='col-span-2' />
          </div>

          <button type="submit">Enviar</button>
        </Form>
      </Formik>
    </section>
  );
};