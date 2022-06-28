import React, { useState, useEffect } from "react";
import "./index.scss";

import LogoMP from "./../_assets/images/link_marketplace.png";
import HoverNav from "./../_assets/images/nav_item_hover.png";
import LogoHypermon from "./../_assets/images/logo_large.png";
import menu_mobile from "./../_assets/images/menu_mobile.png";
import home_mobile from "./../_assets/images/home_mobile.png";
import cancel_menu from "./../_assets/images/cancel_menu.png";
import link_marketplace_mobile from "./../_assets/images/link_marketplace_mobile.png";
import shadow from "./../_assets/images/shadow.png";

import "./mobile.scss"

import iconEmail from "../_assets/icon/email.svg";
import iconFb from "../_assets/icon/Fb.svg";
import iconTele from "../_assets/icon/tele.svg";
import iconTw from "../_assets/icon/Tw.svg";
const Header = () => {
  const [link, setLink] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setShowMenu(false)
  }, [link])

  return (
    <div className={`Header mx-auto ${showMenu && "unset-padding"}`}>
      <div className="Header_container ">
        <div
          className={`flex justify-between mb-wrapper-header ${showMenu && "show-menu"
            }`}
        >
          <a className="mb-logo-Header relative" href="#hypermon">
            <img src={LogoHypermon} className="toggle-icon-change" alt="" />
            <div className="mb-menu">
              <img
                src={!showMenu ? menu_mobile : cancel_menu}
                onClick={() => setShowMenu(!showMenu)}
                alt=""
                style={{ width: 36 }}
              />
            </div>
          </a>
          <div className="flex Header__link items-center ">
            <img
              className={`${showMenu ? "active relative" : "hidden"}`}
              src={LogoHypermon}
              alt=""
            />
            <a
              onClick={() => setLink("Home")}
              className={`link relative z-10 ${link === "Home" && "active"}`}
              href="#hypermon"
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link1 link_bg"
              />
              <span>Home</span>
            </a>
            <a
              onClick={() => setLink("GAMEPLAY")}
              className={`link relative z-10 ${link === "GAMEPLAY" ? "active" : ""
                }`}
              // href="#game_play"
              href="https://play2.hypermon.games/"
            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link2 link_bg"
              />
              <span>GAMEPLAY</span>
            </a>

            <a
              onClick={() => setLink("NFTSITEM")}
              className={`link relative z-10 ${link === "NFTSITEM" ? "active" : ""
                }`}
              href="#nft_items"

            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link3 link_bg"
              />
              <span className="link3">NFT ITEMS</span>
            </a>

            <a
              onClick={() => setLink("COIN")}
              className={`link relative z-10 ${link === "COIN" ? "active" : ""
                }`}
              href="#coin"

            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link4 link_bg"
              />
              <span>COIN</span>
            </a>

            <a
              onClick={() => setLink("GEM")}
              className={`link relative z-10 ${link === "GEM" ? "active" : ""}`}
              href="#gem"

            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link5 link_bg"
              />
              <span>GEM</span>
            </a>

            <a
              onClick={() => setLink("ROADMAP")}
              className={`link relative z-10 ${link === "ROADMAP" ? "active" : ""
                }`}
              href="#road_map"

            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link6 link_bg"
              />
              <span>ROADMAP</span>
            </a>

            <a
              onClick={() => setLink("PARTNER")}
              className={`link relative z-10 ${link === "PARTNER" ? "active" : ""
                }`}
              href="#out_partner"

            >
              <img
                src={HoverNav}
                alt=""
                className="absolute link_bg link7 link_bg"
              />
              <span>PARTNER</span>
            </a>
            <div className="relative w-100">

              <a href="https://play2.hypermon.games/marketplace" className="mb-img-header">

                <img
                  src={showMenu ? link_marketplace_mobile : LogoMP}
                  alt=""
                />
              </a>

              {showMenu && (
                <div className="active-lastimg">
                  <img src={shadow}></img>
                </div>
              )}
            </div>
            <div className="relative bottom-header-menu">
              <div className="flex items-center email">
                <img src={iconEmail}></img>
                <span className="pl-4">hi@laboon.org</span>
              </div>
              <div className="Footer__bottom pt-4">
                <div className="text-center">
                  <span>© 2022, all right reserved</span>
                </div>
                <div>
                  <span>Developed by Laboon.org</span>
                </div>
              </div>
              <div className="flex justify-center pt-8">
                <div>
                  <img src={iconFb}></img>
                </div>
                <div className="px-8">
                  <img src={iconTele}></img>
                </div>
                <div>
                  <img src={iconTw}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
