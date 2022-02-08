import React from "react";
import "./index.scss";
import GameCoin from "./img/gamecoin.png";
import vang from "./img/vang.png";
import line from "./img/Arrow2.png";
import line1 from "./img/Arrow1.png";
import exchange from "./img/exchange.png";
import coin from "./img/coin.png";
import kc from "./img/kc.png";
import trade from "./img/trade.png";
import goldB from "./img/tuivang.png";
import goldBText from "./img/Freetoearn.png";
import bgCoint from "./img/XMLID_57_.png";
import circle from "./img/circle.png";
import bgafter from "./img/bgafter.jpg";

const index = () => {
  return (
    <div className="GameCoin mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="container mx-auto pt-20">
        <div className="relative z-10">
          <div>
            <img className="mx-auto" src={GameCoin} alt="" />
          </div>
          <div className="GameCoin__content mx-auto mt-10">
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>

        <div>
          <div className="flex justify-around relative">
            <div>
              <div className="Gamecoin_exchange relative z-10">
                <img className="pl-8" src={vang} alt="" />
                <div className="relative">
                  <img
                    style={{ top: -9, left: -17 }}
                    className="absolute"
                    src={circle}
                    alt=""
                  />
                  <img className="relative" src={line} alt="" />
                </div>
                <img className="pt-10" src={exchange} alt="" />
              </div>

              <div className="Gamecoin_exchange relative pt-28 z-10">
                <img className="pl-8" src={kc} alt="" />
                <div className="relative">
                  <img
                    style={{ top: -9, left: -17 }}
                    className="absolute"
                    src={circle}
                    alt=""
                  />
                  <img className="relative" src={line} alt="" />
                </div>
                <img className="pt-10" src={trade} alt="" />
              </div>
            </div>
            <div className="flex-1">
              <div>
                <img className="absolute bgafter" src={bgafter} alt="" />
                <img
                  style={{ left: 178 }}
                  className="absolute z-10"
                  src={coin}
                  alt=""
                />
                <img
                  style={{ top: 130, left: 270 }}
                  className="absolute z-10"
                  src={bgCoint}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="Gamecoin__free relative">
                <div className="flex justify-end pr-8">
                  <img src={goldB} alt="" />
                </div>
                <div>
                  <div className="relative">
                    <img
                      style={{ top: -9, right: -8 }}
                      className="absolute"
                      src={circle}
                      alt=""
                    />
                    <img className="relative" src={line1} alt="" />
                  </div>
                </div>
                <div className="flex justify-end pt-10">
                  <img src={goldBText} alt="" />
                </div>
              </div>
              <div>
                <div className="Gamecoin__text relative flex pt-8 justify-end">
                  <ul style={{ textAlign: "right" }}>
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">Special Events</span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">Battle Pass</span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">Ranking Rewards</span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">Quest</span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">Guild War</span>
                    </li>
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">Tournament</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
