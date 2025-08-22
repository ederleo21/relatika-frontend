import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import { ModalForm } from '../../../global/components/layout/ModalForm'
import { InputField } from '../../../global/components/atoms/InputField'
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit'
import { createPost } from '../services/postServices'

const validationSchema = Yup.object({
    title: Yup.string().required("Escribe un título"),
    content: Yup.string().required("Escribe un contenido")
})

export const PostForm = ({ isOpen, onClose }) => {
    
    const initialValues = {
        title: "",
        content: "",
    }

    const handleSubmit = async(values, actions) => {
        const formData = new FormData()
        formData.append("title", values.title)
        formData.append("content", values.content)
        if (values.images && values.images.length > 0){
            values.images.forEach((file) => {
            formData.append("images", file);
        })}
        const { success, data } = await handleFormSubmit({ values: formData, requestFn: createPost, messageSuccess: "Publicación creada con éxito"}, actions)
        if(success) onClose();
    }   
    
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
    >
        {({ isSubmitting, setFieldValue }) => (
            <Form>
                <ModalForm isOpen={isOpen} onClose={onClose} isSubmitting={isSubmitting} title='Crear Nueva Publicación'>
                    <div className="grid grid-cols-3 gap-x-4 gap-y-3 font-poppins"> 
                        <InputField name="title" label='Titulo' placeholder='Titulo'/>
                        <InputField name="content" label='Contenido' placeholder='Contenido'/>
                        <input type="file" name="images" multiple className="col-span-3"
                          onChange={(e) => setFieldValue("images", Array.from(e.target.files))} 
                        />
                    </div>
                </ModalForm>
            </Form>
        )}
    </Formik>
  )
}