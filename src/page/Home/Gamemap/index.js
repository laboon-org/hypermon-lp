import React from "react";
import "./index.scss";
import GameMap from "./img/gamemap.png";
import Map from "./img/map1.png";
import Cloud from "./img/clouds.png";
import Cloud2 from "./img/sky.png";
import "./mobile.scss";

const index = () => {
  return (
    <div className="Gamemap mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="mx-auto pt-20">
        <div>
          <img className="mx-auto mb-header-gamemap" src={GameMap} alt="" />
        </div>
        <div>
          <div className="Gamemap__content mt-10">
            <p className="mx-auto mb-description-gameplay">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident
            </p>
          </div>
        </div>

        <div className="space">
        <div className="cloud1"  >
            <img src={Cloud2}  alt="" />
          </div>
          <div className="cloud"  >
            <img src={Cloud}  alt="" />
          </div>
          <div className="mt-20 main-img-content">
            <img src={Map} alt="" />
          </div>
          <div className="cloud2"  >
            <img src={Cloud2}  alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default index;
