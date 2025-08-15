import { toast } from "react-toastify"

export const handleFormSubmit = async({ values, requestFn, messageSuccess="Operación exitosa", onSuccess = null}, actions) => {
    const { resetForm, setErrors, setSubmitting } = actions;
    
    try{
        await requestFn(values);
        toast.success(messageSuccess);
        resetForm();
        if(onSuccess){
            onSuccess()
        }

    }catch(error){
        if (error.response && error.response.data){

            const data = error.response.data;
            //Errores de campos individuales, DRF envia
            setErrors(data);
            //Errores entre campos, DRF envia
            if (data.non_field_errors) {
                const message = Array.isArray(data.non_field_errors) ? data.non_field_errors.join(" ") : data.non_field_errors;
                toast.error(message);
            }
            //Errores personalizados de logica
            if (data.error) toast.error(data.error)
            //Error de autenticación
            if (data.detail) toast.error(data.detail);
        } else {
            toast.error("Error inesperado. Intenta más tarde.");
        }
    }finally{
        setSubmitting(false);
    }
}