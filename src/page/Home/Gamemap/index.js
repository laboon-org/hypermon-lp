import React from "react";
import "./index.scss";
import GameMap from "./img/gamemap.png";
import Map from "./img/map1.png";
const index = () => {
  return (
    <div className="Gamemap mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="container mx-auto pt-20">
        <div>
          <img className="mx-auto" src={GameMap} alt="" />
        </div>
        <div>
          <div className="Gamemap__content mt-10">
            <p className="mx-auto">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident
            </p>
          </div>
        </div>
        <div>
          <div className="mt-20">
            <img src={Map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
