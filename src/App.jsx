import Hero from "./components/Hero";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Hero />
      <Navbar />
      <About />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
