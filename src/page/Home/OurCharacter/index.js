import React from "react";
import "./index.scss";
import textOur from "./img/ourcharacterText.png";
import bg from "./img/character11.png";
import item1 from "./img/charmande/item1.png";
import item2 from "./img/charmande/item2.png";
import item3 from "./img/charmande/item3.png";
import item4 from "./img/charmande/item4.png";
import star from "./img/charmande/star.png";
import Charmande1 from "./img/Charmande1.png";
import Vector from "./img/Vector.png";
import Fire from "./img/fire.png";
const OurCharacter = () => {
  return (
    <div style={{ backgroundColor: "#051435" }}>
      <div className="Ourcharacter mx-auto">
        <div className="mx-auto pt-28">
          <img className="mx-auto" src={textOur} alt="" />
        </div>
        <div
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: 1200,
          }}
          className="container-full mx-auto"
        >
          <div className="container mx-auto">
            <div className="Ourcharacter__item">
              <div className="flex justify-center items-center">
                <div>
                  <img src={item1} alt="" />
                </div>
                <div>
                  <img src={item2} alt="" />
                </div>
                <div>
                  <img className="px-20" src={star} alt="" />
                </div>
                <div>
                  <img src={item3} alt="" />
                </div>
                <div>
                  <img src={item4} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="Charmande1 relative">
                  <img
                    className="mx-auto vector absolute  "
                    src={Vector}
                    alt=""
                  />
                  <img
                    className="mx-auto Charmande__img relative"
                    src={Charmande1}
                    alt=""
                  />
                  <img
                     className="mx-auto fire__img"
                     src={Fire}
                     alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCharacter;
