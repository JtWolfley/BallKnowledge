import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import BottomNav from "./components/bottomnav/Bottomnav";
import Footer from "./components/footer/Footer";
import Players from "./pages/players/Players";

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <BottomNav />
            <Footer />
        </div>
    );
}

export default App;