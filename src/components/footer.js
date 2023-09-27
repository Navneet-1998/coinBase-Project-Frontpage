import {React} from "react"


function FooterSection(){
    return (<>
    
        <footer
        class=" w-100 mt-4"
      >
        <div class="gradingBackgroundnew mw-100">
          <div class="container text-center">
            <div class="row mx-3 ">
              <div class="col-3 ">
                <div class="p-3 text-start mt-3">
                  <p class="listFont">COINCAP.IO</p>
                  <ul class="list-unstyled listing">
                    <li class="listinghover m-1">Methodology</li>
                    <li class="listinghover m-1">Support</li>
                    <li class="listinghover m-1">Our API</li>
                    <li class="listinghover m-1">Rate Comparison</li>
                    <li class="listinghover m-1">Careers</li>
                  </ul>
                </div>
              </div>
              <div class="col-3">
                <div class="p-3 text-start mt-3">
                  <p class="listFont">LEGALS</p>
                  <ul class="list-unstyled listing">
                    <li class="listinghover m-1">Methodology</li>
                    <li class="listinghover m-1">Support</li>
                  </ul>
                  <p class="listFont">DISCLAIMER</p>
                  <ul class="list-unstyled listing">
                    <li
                      class="listinghover text-wrap"
                      style={{ width: "150%" }}
                    >
                      Neither ShapeShift AG nor CoinCap are in any way
                      associated with CoinMarketCap, LLC or any of its goods
                      and services.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-3">
                <div class="p-3 text-start mt-3">
                  <p class="listFont">FOLLOW US</p>
                  <ul class="list-unstyled listing d-flex flex-md-row flex-column">
                    <li class="me-2">
                      <a aria-current="page" href="###">
                        <b
                          class="listinghover listing fa fa-twitter"
                          style={{ fontSize: "24px" }}
                        ></b>
                      </a>
                    </li>
                    <li>
                      <a href="###">
                        <b
                          class="listinghover listing fa fa-facebook-official"
                          style={{ fontSize: "24px" }}
                        ></b>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-3">
                <div class="p-3 text-start mt-3">
                  <p class="listFont">COINCAP APP AVAILABLE ON</p>
                  <ul class="list-unstyled listing">
                    <li>
                      <a aria-current="page" href="###">
                        <img
                          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                          style={{ width: "160px" }}
                          alt="playstore logo"
                          class="imging"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="###" class="d-flex justify-content-start">
                        <img
                          src="https://w7.pngwing.com/pngs/440/692/png-transparent-app-store-apple-logo-apple-text-logo-microsoft-store-thumbnail.png"
                          style={{
                            width: "140px",
                            borderRadius: "6px",
                            marginLeft: "10px",
                          }}
                          alt="app store logo"
                          class="imging"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer></>)
}


export default FooterSection;
