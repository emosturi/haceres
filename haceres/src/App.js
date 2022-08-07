import GlobalStyle from "./globalStyle";
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/navbar/Navbar";
import TodoList from "./components/todolist/TodoList";
import TodoForm from "./components/todoform/TodoForm";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeContextProvider>
                <TodoContextProvider>
                    <Navbar />
                    <TodoForm />
                    <TodoList />
                </TodoContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
