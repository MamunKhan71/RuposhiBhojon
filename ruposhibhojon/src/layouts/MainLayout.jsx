import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-montserrat">
            <div className="font-nunito container mx-auto">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;