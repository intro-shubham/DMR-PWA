import React from 'react';
import './Home.css';
import Product from './Product';

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="lord of the rings"
        />
        <div className="home__row">
          <Product
            title="MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7, Intel Iris Xe, 16GB RAM, 512GB NVMe SSD, Thunderbolt 4, Win10 Home, Intel Evo, Carbon Gray (A11M-629)"
            price={29.99}
            star={5}
            id="1"
            image="https://m.media-amazon.com/images/I/7189iXimfWL._AC_SY200_.jpg"
          />
          <Product
            title="MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7"
            price={39.99}
            star={5}
            id="2"
            image="https://m.media-amazon.com/images/I/71wuaEI87uL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7"
            price={49.99}
            star={5}
            id="3"
            image="https://m.media-amazon.com/images/I/81atqqJfG6L._AC_UY218_.jpg"
          />
          <Product
            title="MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7"
            price={59.99}
            star={5}
            id="4"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
          />
          <Product
            title="MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7"
            price={69.99}
            star={5}
            id="5"
            image="https://m.media-amazon.com/images/I/71MFE2UY6-L._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7MSI Prestige 14 Evo Professional Laptop: 14 FHD Ultra-Thin Bezel Display, Intel Core i7-1185G7"
            price={79.99}
            star={5}
            id="6"
            image="https://m.media-amazon.com/images/I/41wjYZ4VYJL._SY160_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
