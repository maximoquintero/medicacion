import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Home from "../pages/Home";
import Medicamento from "../pages/Medicamento";



export const rutas = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/home/:id_usuario",
    element: <Home />,
  },
  {
    path: "/medicamento/:id_usuario",
    element: <Medicamento/>
  }
]);
