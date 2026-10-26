import Header from "./components/header/Header";
import BottomNav from "./components/bottomnav/Bottomnav";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div id="content">
            <Header />
            <Outlet />
            <BottomNav />
            <Footer />
        </div>
    );
};

export default Layout;