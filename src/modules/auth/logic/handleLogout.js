import { logout } from "../services/authService";
import { toast } from "react-toastify";

export const performLogout = async () => {
  try {
    await logout();
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  } finally {
    localStorage.removeItem("accessToken");
  }
};

export const handleLogout = async ({ navigate }) => {
  await performLogout();
  toast.success("Sesión cerrada");
  navigate("/");
};