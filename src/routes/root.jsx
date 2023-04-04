import Navbar from "../components/Navbar";

export default function Root({children}) {
    return (
      <>
        <Navbar/>
        <main>
            {children}
        </main>
      </>
    );
  }