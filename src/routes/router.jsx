import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import ToyDetails from "../pages/ToyDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
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
                path: "/toy/:id",
                loader: async() => await fetch("/toysData.json"),
                element: <ToyDetails></ToyDetails>
            }
        ]
    }
]);