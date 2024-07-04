import Footer from "../footer/Footer";
import NavBar2 from "../navbar/NavBar2";
import Navbar from "../navbar/Navbar";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <div>
            <NavBar2 />
            {/* <Navbar /> */}
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
