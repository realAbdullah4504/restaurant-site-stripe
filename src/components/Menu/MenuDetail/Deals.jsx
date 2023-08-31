import React from "react";


import Product from "./Product";

const Deals = ({ groupedDeals, handleClick }) => {
  return (

    <div className="ftco-animate">
      {Object?.keys(groupedDeals)?.map((category, index) => (
        <div key={index}>
          {/* {category?.type?.value === "deals" && ( */}
          {groupedDeals[category]?.length > 0 && (
            <div>
              <div>
                <div className="container mt-5">
                  <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section  text-center">
                      <h2 className="mb-4">{category}</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="container-wrap">
                  <div className="row no-gutters ">
                    {groupedDeals[category]?.map((deal) => (
                      <Product key={deal._id} handleClick={handleClick} deal={deal}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Deals;
