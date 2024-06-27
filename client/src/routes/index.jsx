import {createBrowserRouter, Navigate} from "react-router-dom";
import adminRoutes from "@/routes/admin/index.jsx";
import userRoutes from "@/routes/user/index.jsx";
import authRoutes from "@/routes/auth/index.jsx";
import ErrorPage from "@/views/common/not-found/index..jsx";

const routes = [
    {
        path: "",
        element: <Navigate replace to="/auth" />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    ...authRoutes,
    ...adminRoutes,
    ...userRoutes,
]

const router = createBrowserRouter(
    routes
);

export default router;