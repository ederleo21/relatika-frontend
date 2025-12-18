import { Button } from "../atoms/Button";

export const ModalForm = ({ isOpen, onClose, title = "Formulario", isSubmitting, children}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 font-poppins">
      <div className="bg-white rounded-xl shadow-lg w-fit max-w-[90vw] min-w-[320px] p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-gray-800 font-lora text-center">
          {title}
        </h2>

        <div className="overflow-y-auto max-h-[75vh]">
          {children}
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <Button
            text="Cancelar"
            className="bg-slate-500 hover:bg-slate-600"
            onClick={onClose}
          />
          <Button
            text={isSubmitting ? "Espere..." : "Guardar"}
            className="bg-indigo_light hover:bg-indigo-700"
            type="submit"
            disabled={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
};
