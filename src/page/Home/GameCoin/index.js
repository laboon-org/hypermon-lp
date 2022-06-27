import React from "react";
import "./index.scss";
import "./tablet.scss"
import "./mobile.scss"
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
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query =  gql`
{
  HpmlbggamecoinItems{
    items{
      id,
      name,
      content{
        feature,
        describe,
        attribute,
        image,
      }
    }
  }
}`;

const index = () => {
  window.addEventListener('scroll', reveal);
  function reveal() {
    const reveal = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveal.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveal[i].getBoundingClientRect().top;
      if (revealTop < windowHeight) {
        reveal[i].classList.add('detail');
      } else {
        reveal[i].classList.remove('detail');
      }
    }
  }

  const { data } = useQuery(query);
  const story = data?.HpmlbggamecoinItems;
  console.log('gamecoin', story);

  return (
    <div id="coin" className="GameCoin mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="container mx-auto pt-20">
        <div className="relative z-10">
          <div>
            <img className="mx-auto mb-nameheader fadeUp" src={story?.items[0].content.image[5].img.filename} alt="" />
          </div>
          <div className="GameCoin__content mx-auto mt-10 contentFadeUp">
            <p>{story?.items[0].content.describe}</p>
          </div>
        </div>

        <div>
          <div className="flex justify-around relative">
            <div className="mb-feature-left">
              <div className="Gamecoin_exchange relative z-10 reveal item2">
                <img className="pl-8" src={story?.items[0].content.feature[0].img.filename} alt="" />
                <div className="relative">
                  <img
                    style={{ top: -9, left: -17 }}
                    className="absolute"
                    src={story?.items[0].content.image[4].img.filename}
                    alt=""
                  />
                  <img className="relative" src={story?.items[0].content.image[3].img.filename} alt="" />
                </div>
                <img className="pt-10" src={story?.items[0].content.feature[0].name.filename} alt="" />
              </div>

              <div className="Gamecoin_exchange relative pt-28 z-10 reveal item3">
                <img className="pl-8" src={story?.items[0].content.feature[1].img.filename} alt="" />
                <div className="relative">
                  <img
                    style={{ top: -9, left: -17 }}
                    className="absolute"
                    src={story?.items[0].content.image[4].img.filename}
                    alt=""
                  />
                  <img className="relative" src={story?.items[0].content.image[3].img.filename} alt="" />
                </div>
                <img className="pt-10" src={story?.items[0].content.feature[1].name.filename} alt="" />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-wrapper-imgcenter">
                <img className="absolute bgafter" src={story?.items[0].content.image[6].img.filename} alt="" />
                <img
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  className="absolute z-10 reveal item1"
                  src={story?.items[0].content.image[0].img.filename}
                  alt=""
                />
                <img
                  style={{
                    top: 130,
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                  className="absolute z-10 dot-start light"
                  src={story?.items[0].content.image[1].img.filename}
                  alt=""
                />
              </div>
            </div>
            <div>
              <div className="Gamecoin__free relative reveal item4">
                <div className="flex justify-end pr-8">
                  <img src={story?.items[0].content.feature[2].img.filename} alt="" />
                </div>
                <div>
                  <div className="relative">
                    <img
                      style={{ top: -9, right: -8 }}
                      className="absolute"
                      src={story?.items[0].content.image[4].img.filename}
                      alt=""
                    />
                    <img className="relative" src={story?.items[0].content.image[2].img.filename} alt="" />
                  </div>
                </div>
                <div className="flex justify-end pt-10">
                  <img src={story?.items[0].content.feature[2].name.filename} alt="" />
                </div>
              </div>
              <div>
                <div className="Gamecoin__text relative flex pt-8 justify-end">
                  <ul style={{ textAlign: "right" }}>
                  {story?.items[0].content.attribute.map(item => (
                    <li className="flex items-center justify-end">
                      <span className="dot"></span>
                      <span className="ml-2">{item.attribute}</span>
                  </li>
                  ))}
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
