import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Pricing from "../pages/Pricing";
import AvailableFood from "../pages/AvailableFood";
import AddProducts from "../pages/AddProducts";
import FoodDetails from "../pages/FoodDetails";
import MyFoodList from "../pages/MyFoodList";
import MyRequestList from "../pages/MyRequestList";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
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
            },
            {
                path: '/details',
                element: <FoodDetails />
            },
            {
                path: '/my-food',
                element: <MyFoodList />
            },
            {
                path: '/my-request',
                element: <MyRequestList />
            }
        ]
    },
]);
export default router;