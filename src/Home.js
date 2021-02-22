import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

         <div className="home__row">
          <Product
            id="12321341"
            title="Super Mario 3D World + Bowser's Fury - Nintendo Switch"
            price={59.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81TK5d%2BI%2ByL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Bravely Default II - Nintendo Switch"
            price={59.90}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/719Sgv7q6kL._SL1215_.jpg"
          />
           <Product
            id="49538094"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
            price={299.90}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4938850"
            title="Just Dance 2021 - Nintendo Switch Standard Edition"
            price={29.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81JMb%2BkSAAL._SL1500_.jpg"
          />
          <Product
            id="23444430"
            title="Elgato Stream Deck - Live Content Creation Controller with 15 Customizable LCD Keys, Adjustable Stand, for Windows 10 and macOS 10.13 or Late (10GAA9901)"
            price={147.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/710R9YpV9nL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Persona 5 Strikers - PlayStation 4"
            price={59.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81aEa8zePHL._SL1500_.jpg"
          />
          <Product
            id="49538094"
            title="Bravely Default II - Nintendo Switch"
            price={59.90}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/719Sgv7q6kL._SL1215_.jpg"
          />
          <Product
            id="90829342"
            title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
            price={299.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

