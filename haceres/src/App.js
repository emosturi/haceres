import GlobalStyle from "./globalStyle";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeContextProvider>
                <TodoContextProvider>
                    <Navbar />
                    <TodoList />
                    <TodoForm />
                </TodoContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
