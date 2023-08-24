import React from "react";

const Deals = ({ groupedDeals }) => {
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
                      <div key={deal._id} className="col-lg-6 d-flex">
                        <div className="services-wrap d-flex">
                          <a
                            href="#"
                            className="img"
                            style={{
                              backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/deals/${deal.image})`,
                            }}
                          ></a>
                          <div className="text p-4">
                            <h3>{deal.title}</h3>
                            <p>{deal.description} </p>
                            <p className="price">
                              <span>Rs {deal.price}</span>{" "}
                              <a
                                href="#"
                                className="ml-2 btn btn-white btn-outline-white"
                              >
                                Order
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
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
