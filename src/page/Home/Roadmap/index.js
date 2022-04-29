import React from "react";
import "./index.scss";
import roadmap from "./img/roadmap.png";
import bg from "./img/bg.png";
import road_responsive from "./img/road_develop.png";
import Road from "./img/Road.png";
import "./mobile.scss";
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query = gql` 
{
  HpmlbgroadmapItems{
    items{
      id,
      content{
        describe,
        road_map,
        image,
      }
    }
  }
}`;

const index = () => {
  window.addEventListener('scroll', roadFly);
  function roadFly() {
    const roadFly = document.querySelectorAll('.roadFly');
    for (let i = 0; i < roadFly.length; i++) {
      const windowWidth = window.innerWidth;
      const roadFlyRight = roadFly[i].getBoundingClientRect().top;
      if (roadFlyRight < windowWidth) {
        roadFly[i].classList.add('road');
      } else {
        roadFly[i].classList.remove('road');
      }
    }
  }

  const { data } = useQuery(query);
  let story = data?.HpmlbgroadmapItems;
  return (
    <div
      id="road_map"
      className="Roadmap mx-auto"
      style={{
        backgroundColor: "#051435",
        backgroundImage: `url(${story?.items[0].content.image[0].img.filename})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto main-wrapper">
        <div>
          <img className="mx-auto header-name fadeUp" src={story?.items[0].content.image[1].img.filename} alt="" />
        </div>
        <div className="Roadmap__content mx-auto mt-10 contentFadeUp">
          <p>{story?.items[0].content.describe}</p>
        </div>
        <div className="maincontainer" >
          <div className="content-roadmap">
            <div className="wrapper-text">
              {story?.items[0].content.road_map.map((item,index) => (
                <div className={`reveal item${index}`}>
                <span>{item.date_start}</span>
                <span> <span className="symbol-text">I&nbsp;</span> {item.step}</span>
                <span>{item.content}</span>
              </div>
              ))}
              {/* <div className="reveal item">
                <span>1/2022</span>
                <span> <span className="symbol-text">I&nbsp;</span> Step one</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div className="reveal item1">
                <span>2/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step second</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div className="reveal item2">
                <span>3/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step third</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div className="reveal item3">
                <span>4/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step four</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div className="reveal item4">
                <span>5/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step five</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              */}
            </div> 

            {/* <img className="imgroad mx-auto roadFly" src={Road} alt="" /> */}
            <img className="imgroad-responsive roadFly" src={road_responsive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
