import React from "react";
import "./index.scss";
import "./tablet.scss";
import "./mobile.scss";
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query = gql`
{
  HpmlbegameplayItems{
    items{
      id,
      content{
        describe,
        image,
      }
    }
  }
}` ;

const GamePlay = () => {
  const { data } = useQuery(query);
  const story = data?.HpmlbegameplayItems;

  return (
    <div
      id="game_play"
      className="Gameplay mx-auto relative"
      style={{ backgroundColor: "#051435" }}
    >
      <div
        style={{
          backgroundImage: `url(${story?.items[0].content.image[6].img.filename})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   height: 1000,
        }}
        className="container mx-auto"
      >
        <div className="wrapper-Chuong1-Caterpie1a2">
          <img className="absolute Chuong1 skill" src={story?.items[0].content.image[3].img.filename} alt="" />

          <img className="absolute Caterpie1a2" src={story?.items[0].content.image[4].img.filename} alt="" />
        </div>
        <div>
          <img className="absolute Squitle32" src={story?.items[0].content.image[2].img.filename} alt="" />
        </div>
        <div>
        </div>
        <div className="container mx-auto Gameplay__container ">
          <div>
            <div className="fadeUp">
              <img className="mx-auto mb-header-gameplay" src={story?.items[0].content.image[0].img.filename} alt="" />
            </div>
            <div className="mt-8 flex  Gameplay__container--wrapper">
              <div className="flex-1 mb-description-gameplay">
                <div>
                  <img className="mx-auto" src={story?.items[0].content.image[5].img.filename} alt="" />
                </div>
                <div className="Gameplay_content mt-8 mx-auto">
                  <p>{story?.items[0].content.describe}</p>
                </div>
                <div className="pt-16 mb-play-icon">
                  <img className="mx-auto" src={story?.items[0].content.image[1].img.filename} alt="" />
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePlay;
