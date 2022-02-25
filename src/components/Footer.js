import React from "react";
import iconFooter from "./../_assets/images/logo_mini2.png";
import { ReactComponent as IconEmail } from "../_assets/icon/email.svg";
import { ReactComponent as IconFb } from "../_assets/icon/Fb.svg";
import { ReactComponent as IconTele } from "../_assets/icon/tele.svg";
import { ReactComponent as IconTw } from "../_assets/icon/Tw.svg";
import "./mobile.scss"

const Footer = () => {
  const [status, setStatus] = React.useState("HOME")
  return (
    <div
      className="Footer mx-auto"
      style={{ backgroundColor: "#000000", height: 659 }}
    >
      <div className="container mx-auto">
        <div className="pt-28">
          <img className="mx-auto" src={iconFooter} alt="" />
        </div>

        <div>
          <div className="Footer__nav pt-24">
            <div className="flex justify-center wrapper-nav">
              <div>
                <a
                  href="#hypermon"
                  className={`${status == "HOME" && "active"}`}
                  onClick={() => setStatus("HOME")}
                >
                  HOME
                </a>
              </div>
              <div>
                <a
                  href="https://play.hypermon.games/"
                  className={`${status === "GAMEPLAY" && "active"}`}
                  onClick={() => setStatus("GAMEPLAY")}
                >
                  GAMEPLAY
                </a>
              </div>
              <div>
                <a
                  href="#nft_items"
                  className={`${status === "NFT ITEMS" && "active"}`}
                  onClick={() => setStatus("NFT ITEMS")}
                >
                  NFT ITEMS
                </a>
              </div>
              <div>
                <a
                  href="#coin"
                  className={`${status === "COIN" && "active"}`}
                  onClick={() => setStatus("COIN")}
                >
                  COIN
                </a>
              </div>
              <div>
                <a
                  href="#gem"
                  className={`${status === "GEM" && "active"}`}
                  onClick={() => setStatus("GEM")}
                >
                  GEM
                </a>
              </div>
              <div>
                <a
                  href="#road_map"
                  className={`${status === "ROADMAP" && "active"}`}
                  onClick={() => setStatus("ROADMAP")}
                >
                  ROADMAP
                </a>
              </div>
              <div>
                <a
                  href="#partner"
                  className={`${status === "PARTNER" && "active"}`}
                  onClick={() => setStatus("PARTNER")}
                >
                  PARTNER
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__inf flex justify-center">
          <div>
            <div className="flex items-center email">
              {/* <IconEmail width="24px" height="24px" />
              <span className="pl-4">hi@laboon.org</span> */}
            </div>
            <div className="Footer__bottom pt-4">
              <div className="text-center">
                <span>
                  Copyright © 2022, all right reserved. Developed by{" "}
                  <b>Laboon.org</b>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center pt-8">
            <div>
              <IconFb width="24px" height="24px" />
            </div>
            <div className="px-8">
              <IconTele width="24px" height="24px" />
            </div>
            <div>
              <IconTw width="24px" height="24px" />
            </div>
          </div>
        </div>
        <div className="version">v0.1.4 - 20220224</div>
      </div>
    </div>
  );
};

export default Footer;
