import {Outlet} from "react-router-dom";
import Header  from "@/layouts/user/header/index.jsx";
import SideBar from "@/layouts/user/sidebar/index.jsx";

export default function UserLayout() {
    return (
        <>
            <Header/>
            <SideBar/>
            <Outlet/>
        </>
    )
}