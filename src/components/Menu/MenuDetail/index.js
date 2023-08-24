import React from "react";
import Deals from "./Deals";
import Menu from "./Menu";
import { useEffect } from "react";

const MenuDetail = ({ deals: { deals } }) => {
  // console.log(menu);

  //   console.log("deals", deals);
  const groupedDeals =
    deals?.reduce((groups, deal) => {
      const categoryIdValue = deal.categoryId.value; // Extract the categoryId.value
      const categoryTypeDeals = deal.type.value === "deals";
      // console.log('type',categoryType)

      if (!groups[categoryIdValue]) {
        groups[categoryIdValue] = []; // Initialize an array for the category if not exists
      }
      if (categoryTypeDeals) groups[categoryIdValue].push(deal); // Push the deal into the appropriate category
      
      return groups;
    }, {}) || {};

    const groupedMenu=deals?.filter(deal=>deal.type.value==='menu');
    console.log('Menu',groupedMenu);

  // console.log("grouped", groupedDeals);

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
      <Deals groupedDeals={groupedDeals} />
      <Menu groupedMenu={groupedMenu} />
    </section>
  );
};
export default MenuDetail;
