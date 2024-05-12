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
import Profile from "../pages/Profile";
import ProfileSettings from "../components/ProfileSettings";
import AccountSettings from "../components/AccountSettings";
import Notifications from "../components/Notifications";
import axios from "axios";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><AddProducts /></PrivateRoute>
            },
            {
                path: '/food/:id',
                loader: ({ params }) => axios.get(`http://localhost:5000/food/${params.id}`),
                element: <FoodDetails />
            },
            {
                path: '/my-food',
                element: <PrivateRoute><MyFoodList /></PrivateRoute>
            },
            {
                path: '/my-request',
                element: <PrivateRoute><MyRequestList /></PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>,
                children: [
                    {
                        path: '',
                        element: <ProfileSettings />
                    },
                    {
                        path: 'profile-settings',
                        element: <ProfileSettings />
                    },
                    {
                        path: 'account-settings',
                        element: <AccountSettings />
                    },
                    {
                        path: 'notifications',
                        element: <Notifications />
                    }
                ]
            }
        ]
    },
]);
export default router;