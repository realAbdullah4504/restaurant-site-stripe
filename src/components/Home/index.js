import React, { useEffect } from "react";
import Carousal from "./Carousal";
import Intro from "./Intro";
import About from "./About";
import Services from "./Services";
import Menu from "./Menu";
import Gallery from './Gallery';
import Counter from './Counter';
import MenuSelect from './MenuSelect';
import Blog from './Blog';
import Contact from "./Contact";
import { anim } from "../../main";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



const Home = () => {
    useEffect(() => {
      anim(window.$);
    }, [])

  return (
    <>
      <Carousal />
      <Intro/>
      <About />
      <Services />
      <Menu />
      <Gallery />
      <Counter />
      <MenuSelect />
      <Blog />
      <Contact />
    </>

  );
}
export default Home;

