import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

export default function Contact() {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <>
      <h1>
        {!authCtx.isLoggedIn
          ? "Please connect if you want to contact us"
          : `${authCtx.username} contact us if you want ! Your id is : ${authCtx.id}`}
      </h1>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
        {authCtx.isLoggedIn && <button>Contact us</button>}
        <button
          onClick={
            authCtx.isLoggedIn
              ? authCtx.logout
              : () => authCtx.login({ username: "goyave le brave", id: 1 })
          }
        >
          {authCtx.isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
}
