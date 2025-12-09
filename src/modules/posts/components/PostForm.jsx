import { useState } from 'react'
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

    const [previewImages, setPreviewImages] = useState([]);

    const initialValues = {
        title: "",
        content: "",
        images: []
    };

    const handleSubmit = async(values, actions) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);

        if (values.images && values.images.length > 0) {
            values.images.forEach((file) => {
                formData.append("images", file);
            });
        }

        const { success } = await handleFormSubmit({
            values: formData,
            requestFn: createPost,
            messageSuccess: "Publicación creada con éxito"
        }, actions);

        if (success) onClose();
    };

    // Manejar imágenes + previews
    const handleImagesChange = (e, setFieldValue) => {
        const files = Array.from(e.target.files);

        setFieldValue("images", files);

        const previews = files.slice(0, 2).map(file => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    return (
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true}
      >
          {({ isSubmitting, setFieldValue }) => (
              <Form>
                  <ModalForm isOpen={isOpen} onClose={onClose} isSubmitting={isSubmitting} title="Crear Nueva Publicación">
                      <div className="flex flex-col gap-4 font-poppins w-full max-w-2xl mx-auto">
          
                          <div className="flex flex-col gap-1">
                            <InputField name="title" label="Título" placeholder="Título" className="text-base py-3 px-4 rounded-lg border"/>
                          </div>
          
                          <div className="flex flex-col gap-1">
                            <InputField name="content" label="Contenido" placeholder="Contenido" as="textarea" className="text-base p-4 h-40 rounded-lg border resize-none"/>
                          </div>
          
                          <div className="flex flex-col gap-1">
                              <label className="text-sm font-medium">Imágenes</label>
          
                              <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 border rounded-lg py-2 px-3 w-fit text-sm text-gray-700 transition">
                                  Seleccionar imágenes
                                  <input
                                      type="file"
                                      name="images"
                                      multiple
                                      className="hidden"
                                      onChange={(e) => handleImagesChange(e, setFieldValue)}
                                  />
                              </label>
          
                              <span className="text-xs text-gray-500">
                                  Puedes subir varias imágenes. Solo se mostrarán 2 previsualizaciones.
                              </span>
                          </div>
          
                          {previewImages.length > 0 && (
                              <div className="flex gap-3 mt-1">
                                  {previewImages.map((src, index) => (
                                      <img
                                          key={index}
                                          src={src}
                                          alt="preview"
                                          className="w-28 h-28 object-cover rounded-xl border shadow-sm"
                                      />
                                  ))}
      
                                  {previewImages.length === 2 && (
                                      <div className="flex items-center justify-center w-28 h-28 border rounded-xl text-sm text-gray-500 bg-gray-50 shadow-sm">
                                          + más...
                                      </div>
                                  )}
                              </div>
                          )}
                      </div>
                  </ModalForm>
              </Form>
          )}
      </Formik>
    );
};
