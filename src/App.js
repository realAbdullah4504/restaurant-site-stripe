import { useEffect } from "react";
import Home from "./components/Home";
import Intro from "./components/Intro";
import NavBar from "./components/Navbar";
import AOS from 'aos';
import { anim } from "./main";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Counter from "./components/Counter";
import MenuSelect from "./components/MenuSelect";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
//import 'aos/dist/aos.css';



function App() {
  useEffect(() => {

    anim(window.$);
  }, [])


  return (
    <>
      <NavBar />
      <Home />
      <Intro />
      <About />
      <Services />
      <Menu />
      <Gallery />
      <Counter />
      <MenuSelect />
      <Blog />
      <Contact />
      <Footer />
      <div id="ftco-loader" class="show fullscreen"><svg class="circular" width="48px" height="48px"><circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" /><circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" /></svg></div>

    </>
  );
}

export default App;
