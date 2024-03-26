import "./App.css";
import { Navbar } from "./Components";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      {/* <h1 className="bg-gray-800 text-white">Hello</h1> */}
    </>
  );
}

export default App;
