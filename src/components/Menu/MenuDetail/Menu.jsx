import React from 'react'

const Menu = ({menu}) => {
    return (
        <div class="container mt-5">
            <div class="row justify-content-center mb-5 pb-3 mt-5 pt-5">
                <div class="col-md-7 heading-section text-center ftco-animate">
                    <h2 class="mb-4">Our Menu Pricing</h2>
                    <p class="flip">
                        <span class="deg1"></span>
                        <span class="deg2"></span>
                        <span class="deg3"></span>
                    </p>
                    <p class="mt-5">
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>
            </div>

            <div class="row ftco-animate">
                {menu?.map(({ _id, title, priceSm, priceLg, description, image }) => (
                    <div key={_id} class="col-md-6 ">
                        <div class="pricing-entry d-flex ">
                            <div
                                class="img"
                                style={{ backgroundImage: `url(${process.env.REACT_APP_BASE_URL}/deals/${image})` }}
                            ></div>
                            <div class="desc pl-3">
                                <div class="d-flex text align-items-center">
                                    <h3>
                                        <span>{title}</span>
                                    </h3>

                                    <span class="price">Rs {priceSm} {priceLg}</span>
                                </div>
                                <div class="d-block">
                                    <p>
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Menu
