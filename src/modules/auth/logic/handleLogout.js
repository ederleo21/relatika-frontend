import { logout } from "../services/authService";
import { toast } from "react-toastify";
import { clearAuthUser } from '../slices/authUserSlice'

export const performLogout = async () => {
  try {
    await logout();
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  } finally {
    localStorage.removeItem("accessToken");
  }
};

export const handleLogout = async ({ navigate, dispatch }) => {
  await performLogout();
  dispatch(clearAuthUser())
  toast.success("Sesión cerrada");
  navigate("/");
};