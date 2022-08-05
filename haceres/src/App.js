import GlobalStyle from "./globalStyle";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <ThemeContextProvider>
                <BookContextProvider>
                    <Navbar />
                    <BookList />
                    <BookForm />
                </BookContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
