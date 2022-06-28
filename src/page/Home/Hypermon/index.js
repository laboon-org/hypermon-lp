import React, { useEffect, useState } from "react";
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
  const [playerCount, setPlayerCount] = useState(0);
  const [count, setCount] = useState(0);
  const { data } = useQuery(query, {
    onCompleted: (data) => {
      setCount(parseInt(data.HpmlbghomeItems.items[0].content.total_player))
    }
  });
  let story = data?.HpmlbghomeItems;
  
  useEffect(() => {
    let countStep = Math.ceil(count / 500)
    if (playerCount + countStep < count ) {
      var timer = setTimeout(() => {
        setPlayerCount((playerCount) => playerCount + countStep);
      }, 0)
    }
    else setPlayerCount(count); 

    return () => clearTimeout(timer);

    //TODO: Find a better way to countup
    
    // let timer = setInterval(() => {
    //   setPlayerCount((playerCount) => playerCount + 1);
    // }, 5000)
  }, [count, playerCount]);

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
                  {formatThreeDigits(playerCount)}
                </div>
                <img src={story?.items[0].content.image[4].img.filename} alt="" />
              </div>
              <div>
                <div className="Hypermon_contract--top">
                  <span><b>{story?.items[0].content.address}</b> Contract Address</span>
                </div>
                <div className=" Hypermon_contract mt-2">
                  <div className="flex ">
                    <div className=" Hypermon_contract--left">
                      <span>{story?.items[0].content.contract}</span>
                    </div>
                    <div className="px-8">
                      {/* <span>{story?.items[0].content.coming}</span> */}
                      <span>0xvd0w314324wfsjfgrf086349dhd86301</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="Hypermon_contract--top">
                  <span><b>{story?.items[0].content.address}</b> Contract Address</span>
                </div>
                <div className="flex Hypermon_contract mt-2">
                  <div className=" Hypermon_contract--left">
                    <span>{story?.items[0].content.contract} </span>
                  </div>
                  <div className="px-8">
                    {/* <span>{story?.items[0].content.coming}</span> */}
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