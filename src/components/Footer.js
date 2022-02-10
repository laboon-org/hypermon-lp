import React from "react";

// import iconFooter from "../assets/images/logo_mini.png";

import { ReactComponent as Email } from "../assets/icon/email.svg";
import { ReactComponent as Fb } from "../assets/icon/fb.svg";
import { ReactComponent as Tele } from "../assets/icon/tele.svg";
import { ReactComponent as Tw } from "../assets/icon/tw.svg";

const Footer = () => {
  return (
    <div
      className="Footer mx-auto"
      style={{ backgroundColor: "#000000", height: 659 }}
    >
      <div className="container mx-auto">
        <div className="pt-28">
          {/* <img className="mx-auto" src={iconFooter} alt="" /> */}
        </div>

        <div>
          <div className="Footer__nav pt-24">
            <div className="flex justify-center">
              <div>
                <span className="active">Home</span>
              </div>
              <div>
                <a href="https://play.hypermon.games/">
                  <span>GAMEPLAY</span>
                </a>
              </div>
              <div>
                <span>NFTS ITEM</span>
              </div>
              <div>
                <span>COIN</span>
              </div>
              <div>
                <span>GEM</span>
              </div>
              <div>
                <span>ROADMAP</span>
              </div>
              <div>
                <span>PARTNER</span>
              </div>
            </div>
          </div>
        </div>
        <div className="Footer__inf flex justify-center">
          <div>
            <div className="flex items-center email">
              <Email />
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
          </div>
        </div>
        <div className="">
          <div className="flex justify-center pt-8">
            <div>
              <Fb />
            </div>
            <div className="px-8">
              <Tele />
            </div>
            <div>
              <Tw />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
