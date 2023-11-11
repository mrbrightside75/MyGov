import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout =() => {
    return(
        <>
            <div className="row">
                <Navbar />
            </div>
            <Outlet />
        </>
    );
};

export default Layout;