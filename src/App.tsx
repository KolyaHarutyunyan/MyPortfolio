import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Interests from "./components/interests/Interests";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div className="app">
      <div className="app-circle-1" />
      <div className="app-circle-2" />
      <div className="app-circle-3" />
      <div className="app-circle-4" />
      <Header />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Interests />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
