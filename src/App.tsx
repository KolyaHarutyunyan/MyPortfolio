import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Interests from "./components/interests/Interests";
import Experience from "./components/experience/Experience";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => (
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
    <Blog />
    <Contact />
    <Footer />
  </div>
);

export default App;
