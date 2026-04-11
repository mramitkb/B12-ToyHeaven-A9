import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import ToyDetails from "../pages/ToyDetails";
import Registration from "../pages/Registration";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        hydrateFallbackElement: <p>Loading...</p>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/my-profile",
                element: <MyProfile></MyProfile>
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
                element: <ToyDetails></ToyDetails>
            }
        ]
    }
]);