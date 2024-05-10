import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pricing from "../pages/Pricing";
import AvailableFood from "../pages/AvailableFood";
import AddProducts from "../pages/AddProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/pricing',
                element: <Pricing />
            },
            {
                path: '/available-food',
                element: <AvailableFood />
            },
            {
                path: '/add-food',
                element: <AddProducts />
            }
        ]
    },
]);
export default router;