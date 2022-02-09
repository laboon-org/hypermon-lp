import React from "react";
import "./index.scss";
import Hypermon from "./Hypermon";

import OurCharacter from "./OurCharacter";
import GamePlay from "./GamePlay";
import GameMap from "./Gamemap";
import GameCoin from "./GameCoin";
import GameGem from "./GameGem";
import RoadMap from "./Roadmap";
import OurPartner from "./Ourpartner";
import Footer from "../../components/Footer";
const HomePage = () => {
  return (
    <div className="">
      <div>
        <Hypermon />
      </div>
      <div>
        <OurCharacter />
      </div>
      <div>
        <GamePlay />
      </div>
      <div>
        <GameMap />
      </div>
      <div>
        <GameCoin />
      </div>
      <div>
        <GameGem />
      </div>
      <div>
        <RoadMap />
      </div>
      <div>
        <OurPartner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
