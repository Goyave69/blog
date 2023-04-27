import { createContext, useState } from "react";

// 1 create context "AuthContext" and default values (username, isLoggedIn, id, login, logout)
export const AuthContext = createContext({
    username: '',
    isLoggedIn: false,
    id: null,
    login: (user) => {},
    logout: () => {}
});

export default function AuthContextProvider(props) {
    // 2 create all useStates and function who let us handle login and logout
    const [username, setUsername] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [id, setId] = useState(null);

    const handleLogin = ({username, id}) => {
        setUsername(username);
        setId(id);
        setIsLoggedIn(true);
    }
    
    const handleLogout = () => {
        setUsername("");
        setId(null);
        setIsLoggedIn(false);
    }
    
    // 3 create contextValue with object that contains functions and state's values
    const contextValue = {
        username: username,
        isLoggedIn: isLoggedIn,
        id: id,
        login: handleLogin,
        logout: handleLogout
    }

    //4 return AuthContext.Provider with contextValue as value prop
    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>    
    )
}