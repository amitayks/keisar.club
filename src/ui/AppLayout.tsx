import { Outlet } from "react-router-dom";
import Navbar from "./navBar/Navbar";
import Footer from "./footer/Footer";

function AppLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
