import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

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
