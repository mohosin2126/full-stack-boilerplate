import {Outlet} from "react-router-dom";
import Header  from "@/layouts/admin/header/index.jsx";
import SideBar from "@/layouts/admin/sidebar/index.jsx";

export default function AdminLayout() {
    return (
        <>
            <Header/>
            <SideBar/>
            <Outlet/>
        </>
    )
}