import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

function AppLayout() {
  return (
    <div className='flex flex-col min-h-screen transition-colors duration-200'>
      <NavigationBar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
