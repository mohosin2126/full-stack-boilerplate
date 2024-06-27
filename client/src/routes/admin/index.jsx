import Dashboard from "@/views/admin/dashboard/index.jsx";
import Layout from "@/layouts/admin/index.jsx";
import { Navigate } from "react-router-dom";

const adminRoutes = [
    {
        path: "/admin/",
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

export default adminRoutes;