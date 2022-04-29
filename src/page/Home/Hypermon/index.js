import React from "react";
import "./index.scss";
import "./mobile.scss"
import number_player from "./img/number_player.png";
import Banner from "./img/name.png";
import totalPlayer from "./img/Totalplayer.png";
import number from "./img/1.670.890.png";
import Header from "../../../components/Header";
import Light from "./img/light.png";
import Fire from "./img/fire.png";
import Thunder from "./img/thunder.png";
import "./tablet.scss"
import { formatThreeDigits } from "../../../util/formatThreeDigits";
import { gql, useQuery } from "@apollo/client";

const query = gql` 
{
  HpmlbghomeItems{
    items{
      id,
      content{
        describe,
        address,
        contract,
        coming,
        total_player,
        image,
      }
    }
  }
}`;

const Hypermon = () => {
  const { data } = useQuery(query);
  let story = data?.HpmlbghomeItems;

  return (
    <div id="hypermon" className="Hypermon mx-auto mobile-Hypermon">
      <Header />
      <div className="container mx-auto ">
        <div className="Hypermon__container">
        <div>
          <img src={story?.items[0].content.image[0].img.filename} alt="" className="fire mb-fire"/>
          </div>
          <div>
          <img src={story?.items[0].content.image[2].img.filename} alt="" className="thunder mb-thunder"/>
          </div>
          <div>
            <img src={story?.items[0].content.image[1].img.filename} alt="" className="light" />
          </div>
          <div className="text-center flex">
            <img src={story?.items[0].content.image[3].img.filename} alt="" className="mx-auto mb-logo-GameCoin" />
          </div>
          <div className="Hypermon_text mx-auto">
            <p>{story?.items[0].content.describe}</p>
          </div>
          <div className="Hypermon_text--bottom mt-8 mx-auto pb-16 mb-content-GameCoin">
            <div className="flex justify-around items-center mb-wrap-content-GameCoin">
              <div className="flex items-center mb-player-GameCoin">
                <div className="style-text">
                 {formatThreeDigits(story?.items[0].content.total_player)}
                </div>
                <img src={story?.items[0].content.image[4].img.filename} alt="" />
              </div>
              <div>
                <div className="Hypermon_contract--top">
                  <span>{story?.items[0].content.address}</span>
                </div>
                <div className=" Hypermon_contract mt-2">
                  <div className="flex ">
                    <div className=" Hypermon_contract--left">
                      <span>{story?.items[0].content.contract}</span>
                    </div>
                    <div className="px-8">
                      <span>{story?.items[0].content.coming}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Hypermon_contract--top">
                  <span>{story?.items[0].content.address}</span>
                </div>
                <div className="flex Hypermon_contract mt-2">
                  <div className=" Hypermon_contract--left">
                    <span>{story?.items[0].content.contract}</span>
                  </div>
                  <div className="px-8">
                    <span>{story?.items[0].content.coming}</span>
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