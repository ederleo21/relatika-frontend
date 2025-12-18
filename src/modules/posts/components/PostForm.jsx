import { useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'

import { ModalForm } from '../../../global/components/layout/ModalForm'
import { InputField } from '../../../global/components/atoms/InputField'
import { handleFormSubmit } from '../../../global/utils/handleFormSubmit'
import { createPost } from '../services/postServices'

const validationSchema = Yup.object({
    title: Yup.string().required("Escribe un título"),
    content: Yup.string().required("Escribe un contenido"),
    post_type: Yup.string().required("Elige un tipo de post"),
})

export const PostForm = ({ isOpen, onClose }) => {

    const [previewImages, setPreviewImages] = useState([]);

    const initialValues = {
        title: "",
        content: "",
        post_type: "",
        images: []
    };

    const handleSubmit = async(values, actions) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        formData.append("post_type", values.post_type);

        if (values.images && values.images.length > 0) {
            values.images.forEach((file) => {
                formData.append("images", file);
            });
        }

        const { success } = await handleFormSubmit({ values: formData, requestFn: createPost, messageSuccess: "Publicación creada!" }, actions);
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
              <ModalForm
                isOpen={isOpen}
                onClose={onClose}
                isSubmitting={isSubmitting}
                title="Crear Nueva Publicación"
              >
                <div className="font-poppins w-full max-w-5xl mx-auto">
        
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
                    {/* COLUMNA IZQUIERDA */}
                    <div className="flex flex-col gap-3">
        
                      {/* Título */}
                      <InputField
                        name="title"
                        label="Título"
                        placeholder="Título"
                        className="text-sm py-2.5 px-3 rounded-md border"
                      />
        
                      {/* Tipo de post */}
                      <InputField
                        name="post_type"
                        as="select"
                        label="Tipo de post"
                        className="text-sm py-2.5 px-3 rounded-md border"
                      >
                        <option value="">Selecciona un tipo</option>
                        <option value="story">Historia</option>
                        <option value="experience">Experiencia</option>
                        <option value="reflection">Reflexión</option>
                      </InputField>
        
                      {/* IMÁGENES (igual que antes) */}
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
        
                        {previewImages.length > 0 && (
                          <div className="flex gap-3 mt-2">
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
                    
                    </div>
                    
                    {/* COLUMNA DERECHA */}
                    <div className="flex flex-col h-full">
                      <InputField
                        name="content"
                        label="Contenido"
                        placeholder="Escribe aquí tu publicación..."
                        as="textarea"
                        className="text-sm p-4 h-[420px] rounded-md border resize-none leading-relaxed"
                      />
                    </div>
                    
                  </div>
                </div>
              </ModalForm>
            </Form>
          )}
        </Formik>
    );
};
