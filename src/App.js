import Navb from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <div className="App">
      <Navb />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;

