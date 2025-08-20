import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import { InputField } from '../../../global/components/atoms/InputField';
import { Button } from '../../../global/components/atoms/Button';
import { registerUser } from '../services/authService';
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit';

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
  .oneOf([Yup.ref('password'), undefined], "Las contraseñas no coinciden")
  .required("Campo requerido"),
  first_name: Yup.string().required("Campo requerido"),
  last_name: Yup.string().required("Campo requerido"),
})

const initialValues = {
  username: "",
  email: "",
  password: "",
  password2: "",
  first_name: "",
  last_name: "",
}

const handleSubmit = (values, actions) =>  {
  handleFormSubmit({values, requestFn: registerUser, messageSuccess:"Te has registrado con éxito!"}, actions)
}

export const RegisterForm = () => {
  return (
    <section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-poppins">
              <InputField name="first_name" placeholder="Nombre" label="Nombre" />
              <InputField name="last_name" placeholder="Apellido" label="Apellido" />
              <InputField name="username" placeholder="Usuario" label="Usuario" />
              <InputField name="email" placeholder="Email" label="Email" />
              <InputField name="password" type="password" placeholder="Contraseña" label="Contraseña" className="col-span-2"/>
              <InputField name="password2" type="password" placeholder="Confirmar contraseña" label="Confirmar contraseña" className="col-span-2"/>
            </div>

            <Button
              type="submit"
              text={isSubmitting ? "Espere..." : "Registrarse"}
              className="w-full bg-indigo_light hover:bg-indigo-700 text-white py-2 rounded-lg shadow-md transition"
              disabled={isSubmitting}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};