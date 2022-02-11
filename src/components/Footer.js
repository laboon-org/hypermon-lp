import React from "react";

import iconFooter from "./../_assets/images/logo_mini2.png";

import { ReactComponent as IconEmail } from "../_assets/icon/email.svg";
import { ReactComponent as IconFb } from "../_assets/icon/fb.svg";
import { ReactComponent as IconTele } from "../_assets/icon/tele.svg";
import { ReactComponent as IconTw } from "../_assets/icon/tw.svg";

const Footer = () => {
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
              <IconEmail width="24px" height="24px" />
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
      </div>
    </div>
  );
};

export default Footer;
