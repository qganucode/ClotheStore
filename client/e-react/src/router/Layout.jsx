import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout