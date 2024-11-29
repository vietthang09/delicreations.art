import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 space-y-16 py-8">
      <Hero />
      <About />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
