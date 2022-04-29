import React from "react";
import "./index.scss";
import GameMap from "./img/gamemap.png";
import Map from "./img/map1.png";
import Cloud from "./img/clouds.png";
import Cloud2 from "./img/sky.png";
import "./mobile.scss";
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query = gql`
{
  HpmlbggamemapItems{
    items{
      id,
      content{
        describe,
        img,
        }
      }
    }
}`;

const index = () => {
  window.addEventListener('scroll', contentFadeUp);
  function contentFadeUp() {
    const contentFadeUp = document.querySelectorAll('.contentFadeUp');
    for (let i = 0; i < contentFadeUp.length; i++) {
      const windowHeight = window.innerHeight;
      const contentFadeUpTop = contentFadeUp[i].getBoundingClientRect().top;
      if (contentFadeUpTop < windowHeight) {
        contentFadeUp[i].classList.add('contentFly');
      } else {
        contentFadeUp[i].classList.remove('contentFly');
      }
    }
  }

  const { data } = useQuery(query);
  const story = data?.HpmlbggamemapItems;
  console.log('gamemap-----', story);
  return (
    <div  className="Gamemap mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="mx-auto pt-20">
        <div className="fadeUp" >
          <img className="mx-auto mb-header-gamemap" src={story?.items[0].content.img[1].img.filename} alt="" />
        </div>
        <div>
          <div className="Gamemap__content mt-10">
            <p className="mx-auto mb-description-gameplay contentFadeUp">{story?.items[0].content.describe}</p>
          </div>
        </div>

        <div className="mt-20 main-img-content">
            <img src={story?.items[0].content.img[0].img.filename} alt="" />
          </div>
        <div className="space">
          <div className="cloud1"  >
            <img src={story?.items[0].content.img[2].img.filename}  alt="" />
          </div>
          <div className="cloud"  >
            <img src={story?.items[0].content.img[3].img.filename}  alt="" />
          </div>
          <div className="cloud2"  >
            <img src={story?.items[0].content.img[2].img.filename}  alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
