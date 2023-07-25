import React, { useEffect } from "react";
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';



const Carousal = () => {

    return (
      <section class="home-slider owl-carousel img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>

      <div class="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
      	<div class="overlay"></div>
        <div class="container">
          <div class="row slider-text justify-content-center align-items-center">

            <div class="col-md-7 col-sm-12 text-center ftco-animate">
            	<h1 class="mb-3 mt-5 bread">Our Menu</h1>
	            <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home</a></span> <span>Menu</span></p>
            </div>

          </div>
        </div>
      </div>
    </section>
    );
}
export default Carousal;

