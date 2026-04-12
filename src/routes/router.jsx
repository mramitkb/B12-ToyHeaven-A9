import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import ToyDetails from "../pages/ToyDetails";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import LoadingSpinner from "../pages/LoadingSpinner";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/my-profile",
                element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/toy/:id",
                loader: async() => await fetch("/toysData.json"),
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            }
        ]
    }
]);