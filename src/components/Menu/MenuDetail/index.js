import React from "react";
import Deals from "./Deals";
import Menu from "./Menu";

const MenuDetail = ({ deals: { deals }, menu: { menu } }) => {
  console.log(menu);
  return (
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section ftco-animate text-center">
            <h2 class="mb-4">Hot Pizza Meals</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      {/* pizza deals */}
      <Deals deals={deals} />
      <Menu menu={menu} />
    </section>
  );
};
export default MenuDetail;
