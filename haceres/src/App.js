import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/navbar/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
import Main from "./components/main/main";
import SignIn from "./components/signin/signin";
import { auth } from "./utils/firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
    const [user] = useAuthState(auth);
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeContextProvider>
                <TodoContextProvider>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route
                                index
                                element={
                                    user ? <Main /> : <SignIn user={user} />
                                }
                            />
                            <Route path="signin" element={<SignIn />} />
                        </Route>
                    </Routes>
                </TodoContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
