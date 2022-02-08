import React from "react";
import "./index.scss";
import gamegem from "./img/gamegem.png";
import item1 from "./img/item1.png";
import item2 from "./img/item2.png";
import item3 from "./img/item3.png";
import item4 from "./img/item4.png";
import gem41 from "./img/gem41.png";
import circle from "./img/circle.png";
import line from "./img/Arrow2.png";
import line1 from "./img/Arrow1.png";
import exchange from "./img/exchange.png";
import trade from "./img/trade.png";
import goldBText from "./img/Evolvehypermon.png";
import staking from "./img/staking.png";
import klipartz from "./img/klipartz11.png";
import klipartz12 from "./img/klipartz12.png";

const index = () => {
  return (
    <div className="Gamegem mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="container mx-auto pt-20 ">
        <div>
          <img className="mx-auto" src={gamegem} alt="" />
        </div>
        <div className="Gamegem__content mx-auto mt-10">
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
        <div className="mt-28">
          <div className="flex justify-around relative">
            <div>
              <div className="Gamecoin_exchange relative">
                <img className="pl-8" src={item1} alt="" />
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

              <div className="Gamecoin_exchange relative pt-28">
                <img className="pl-8" src={item2} alt="" />
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
                <img
                  style={{ left: 138 }}
                  className="absolute z-10"
                  src={gem41}
                  alt=""
                />
                <img
                  style={{ top: 72, left: 198 }}
                  className="absolute"
                  src={klipartz12}
                  alt=""
                />
                <img
                  style={{ top: -41, left: 110 }}
                  className="absolute"
                  src={klipartz}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="Gamecoin__free relative">
                <div className="flex justify-end pr-8">
                  <img src={item3} alt="" />
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
              <div className="Gamecoin__free relative pt-20">
                <div className="flex justify-end pr-8">
                  <img src={item4} alt="" />
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
                  <img src={staking} alt="" />
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
