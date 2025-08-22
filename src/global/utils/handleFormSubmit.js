import { toast } from "react-toastify"

export const handleFormSubmit = async({ values, requestFn, messageSuccess="Operación exitosa"}, actions) => {
    const { resetForm, setErrors, setSubmitting } = actions;
    
    try{
        const res = await requestFn(values);
        toast.success(messageSuccess);
        resetForm();
        return { success: true, data: res }

    }catch(error){
        if (error.response && error.response.data){

            const data = error.response.data;
            setErrors(data);
            if (data.non_field_errors) {
                const message = Array.isArray(data.non_field_errors) ? data.non_field_errors.join(" ") : data.non_field_errors;
                toast.error(message);
            }
            if (data.error) toast.error(data.error)
            if (data.detail) toast.error(data.detail);
            
        } else {
            toast.error("Error inesperado. Intenta más tarde.");
        }
    }finally{
        setSubmitting(false);
    }
}