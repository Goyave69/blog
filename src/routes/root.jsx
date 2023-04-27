import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import AuthContextProvider from "../context/AuthContextProvider";

export default function Root() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </AuthContextProvider>
    </>
  );
}
