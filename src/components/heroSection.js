import { React} from "react";
import "./heroSection.css"


function Hero (){
return(
    <>
    <div class="d-flex justify-content-center container-with-scrollbar scrollable-content">
            <div class="row m-3 textSizing">
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">MARKET CAP</p>
                <p class="fontSize">$1.05T</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">EXCHANGE VOL</p>
                <p class="fontSize">$15.37B</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">ASSETS</p>
                <p class="fontSize">2,296</p>
              </div>
            </div>
            <div class=" row m-3 textSizing">
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">EXCHANGES</p>
                <p class="fontSize">73</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">MARKETS</p>
                <p class="fontSize">9,652</p>
              </div>
              <div class="col-lg-4 col-sm-12 textChange text-center">
                <p class="m-0">BTC DOM INDEX</p>
                <p class="fontSize">49.0%</p>
              </div>
            </div>
          </div>
    </>
)
}

export default Hero