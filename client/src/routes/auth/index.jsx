import Layout from "@/layouts/auth/index.jsx";
import { Navigate } from "react-router-dom";
import Login from "@/views/auth/login/index.jsx";
import Register from "@/views/auth/register/index.jsx";
import ForgotPassword from "@/views/auth/forgot-password/index.jsx";

const authRoutes = [
    {
        path: "/auth/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Navigate replace to="login" />
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "register",
                element: <Register/>
            },
            {
                path: "forgot-password",
                element: <ForgotPassword/>
            }
        ]
    }
]

export default authRoutes;