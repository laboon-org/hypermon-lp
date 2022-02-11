import React from "react";
import "./index.scss";
import "./mobile.scss"
import bg from "./img/bg.png";
import Banner from "./img/name.png";
import totalPlayer from "./img/Totalplayer.png";
import number from "./img/1.670.890.png";
import Header from "../../../components/Header";

const Hypermon = () => {
  return (
    <div
      className="Hypermon mx-auto"
      style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
    >
      <Header />
      <div className="container mx-auto ">
        <div className="Hypermon__container">
          <div className="text-center flex">
            <img src={Banner} alt="" className="mx-auto mb-logo-GameCoin" />
          </div>
          <div className="Hypermon_text mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="Hypermon_text--bottom mt-8 mx-auto pb-16 mb-content-GameCoin">
            <div className="flex justify-around items-center mb-wrap-content-GameCoin">
              <div className="flex items-center mb-player-GameCoin">
                <img src={number} alt="" />
                <img src={totalPlayer} alt="" />
              </div>
              <div>
                <div className="Hypermon_contract--top">
                  <span>$THG Contract Address</span>
                </div>
                <div className=" Hypermon_contract mt-2">
                  <div className="flex ">
                    <div className=" Hypermon_contract--left">
                      <span>BEP20</span>
                    </div>
                    <div className="px-8">
                      <span>0xvd0w314324wfsjfgrf086349dhd86301</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Hypermon_contract--top">
                  <span>$THG Contract Address</span>
                </div>
                <div className="flex Hypermon_contract mt-2">
                  <div className=" Hypermon_contract--left">
                    <span>BEP20</span>
                  </div>
                  <div className="px-8">
                    <span>0xvd0w314324wfsjfgrf086349dhd86301</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hypermon;
