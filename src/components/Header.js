import React, { useState } from "react";
import "./index.scss";

import LogoHypermon from "../assets/images/logo_large.png";

import LogoMP from "../assets/images/link_marketplace.png";
import HoverNav from "../assets/images/nav_item_hover.png";

const Header = () => {
  const [link, setLink] = useState("Home");
  return (
    <div class="Header mx-auto">
      <div className="Header_container ">
        <div className="flex justify-between ">
          <div>
            <LogoHypermon />
          </div>
          <div className="flex Header__link items-center ">
            <div
              onClick={() => setLink("Home")}
              className={`link relative z-10 ${link === "Home" && "active"}`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link1 link_bg"
              />
              <span>Home</span>
            </div>
            <div
              onClick={() => setLink("GAMEPLAY")}
              className={`link relative z-10 ${
                link === "GAMEPLAY" ? "active" : ""
              }`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link2 link_bg"
              />
              <span>GAMEPLAY</span>
            </div>

            <div
              onClick={() => setLink("NFTSITEM")}
              className={`link relative z-10 ${
                link === "NFTSITEM" ? "active" : ""
              }`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link3 link_bg"
              />
              <span>NFTS ITEM</span>
            </div>

            <div
              onClick={() => setLink("COIN")}
              className={`link relative z-10 ${
                link === "COIN" ? "active" : ""
              }`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link4 link_bg"
              />
              <span>COIN</span>
            </div>

            <div
              onClick={() => setLink("GEM")}
              className={`link relative z-10 ${link === "GEM" ? "active" : ""}`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link5 link_bg"
              />
              <span>GEM</span>
            </div>

            <div
              onClick={() => setLink("ROADMAP")}
              className={`link relative z-10 ${
                link === "ROADMAP" ? "active" : ""
              }`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link6 link_bg"
              />
              <span>ROADMAP</span>
            </div>

            <div
              onClick={() => setLink("PARTNER")}
              className={`link relative z-10 ${
                link === "PARTNER" ? "active" : ""
              }`}
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link7 link_bg"
              />
              <span>PARTNER</span>
            </div>
            <img src={LogoMP} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
