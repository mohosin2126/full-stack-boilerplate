import Dashboard from "@/views/user/dashboard/index.jsx";
import Layout from "@/layouts/user/index.jsx";
import {Navigate} from "react-router-dom";

const userRoutes = [
    {
        path: "/user/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Navigate replace to="dashboard" />
            },
            {
                path: "dashboard",
                element: <Dashboard/>
            }
        ]
    }
]

export default userRoutes;