import Navb from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Navb />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <ToastContainer/>
    </div>
  );
}

export default App;

