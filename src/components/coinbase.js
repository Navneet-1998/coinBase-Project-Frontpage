
import React from "react";
import "./coinbase.css";
import Navbar from "./navbar";
import Hero from "./heroSection";
import CartSection from "./card";
import FooterSection from "./footer";


function Coinbase() {
  
  return (
    <body class="mh-100">
      <Navbar/>
        <div class="gradingBackground">
          <Hero/>
         <CartSection/>

        <FooterSection/>
        </div>
    </body>
  );
}

export default Coinbase;

//
