import React from "react";
import "./index.scss";

import bg from "./img/bg.png";
import gameplay from "./img/gameplay.png";
import title from "./img/title.png";
import play from "./img/play.png";
import Squitle32 from "./img/Squitle32.png";
import Caterpie1a2 from "./img/Caterpie1a2.png";
import Chuong1 from "./img/chuong1.png";
import "./mobile.scss"
const GamePlay = () => {
  return (
    <div
      className="Gameplay mx-auto relative"
      style={{ backgroundColor: "#051435" }}
    >
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          //   height: 1000,
        }}
        className="container mx-auto"
      >
        <div>
          <img className="absolute Caterpie1a2" src={Caterpie1a2} alt="" />
        </div>

        <div>
          <img className="absolute Squitle32" src={Squitle32} alt="" />
        </div>
        <div>
          <img className="absolute Chuong1" src={Chuong1} alt="" />
        </div>
        <div className="container mx-auto Gameplay__container ">
          <div>
            <div>
              <img className="mx-auto mb-header-gameplay" src={gameplay} alt="" />
            </div>
            <div className="mt-8 flex  Gameplay__container--wrapper">
              <div className="flex-1 mb-description-gameplay">
                <div>
                  <img className="mx-auto" src={title} alt="" />
                </div>
                <div className="Gameplay_content mt-8 mx-auto">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.{" "}
                  </p>
                </div>
                <div className="pt-16 mb-play-icon">
                  <img className="mx-auto" src={play} alt="" />
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
