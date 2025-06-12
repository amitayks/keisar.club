import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className='flex flex-col min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-stone-100 transition-colors duration-200'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
