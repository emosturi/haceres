import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyle";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todolist/TodoList";
import TodoForm from "./components/todoform/TodoForm";
import ThemeContextProvider from "./contexts/ThemeContext";
import Main from "./components/main/main";
import SignIn from "./components/signin/signin";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeContextProvider>
                <TodoContextProvider>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route index element={<Main />} />
                            <Route path="signin" element={<SignIn />} />
                        </Route>
                    </Routes>
                </TodoContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
