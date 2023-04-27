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
    const [username, setUsername] = useState(localStorage.getItem('username'));
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('isLoggedIn')));
    const [id, setId] = useState(Number(localStorage.getItem('id')));

    const handleLogin = ({username, id}) => {
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        localStorage.setItem('isLoggedIn', true);
        setUsername(username);
        setId(id);
        setIsLoggedIn(true);
    }
    
    const handleLogout = () => {
        localStorage.removeItem('username', username);
        localStorage.removeItem('id', id);
        localStorage.removeItem('isLoggedIn', true);
        setUsername("");
        setId(null);
        setIsLoggedIn(false)
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
        <AuthContext.Provider value={contextValue}>``
            {props.children}
        </AuthContext.Provider>    
    )
}