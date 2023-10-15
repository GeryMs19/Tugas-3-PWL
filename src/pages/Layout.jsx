import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-5 py-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
