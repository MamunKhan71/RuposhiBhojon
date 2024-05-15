import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen font-montserrat">
            <div className="font-nunito container mx-auto p-3 lg:p-0 space-y-8 lg:space-y-20 lg:mb-40">
                <Navbar />
                <Outlet />
            </div>
            <Footer />
            <ScrollRestoration />
        </div>
    );
};

export default MainLayout;