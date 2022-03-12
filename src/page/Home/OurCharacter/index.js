import React from "react";
import "./index.scss";
import textOur from "./img/ourcharacterText.png";
import bg from "./img/character11.png";
import background from "./img/ourcharacter_background.png";
import item1 from "./img/charmande/item1.png";
import item2 from "./img/charmande/item2.png";
import item3 from "./img/charmande/item3.png";
import item4 from "./img/charmande/item4.png";
import star from "./img/charmande/star.png";
import Charmande1 from "./img/Charmande1.png";
import Vector from "./img/Vector.png";
import Fire from "./img/fire.png";
import "./mobile.scss";
import "./tablet.scss";
import "../../../components/reveal.scss";

const OurCharacter = () => {
  window.addEventListener('scroll', fadeUp);
  function fadeUp() {
    const fadeUp = document.querySelectorAll('.fadeUp');
    for (let i = 0; i < fadeUp.length; i++) {
      const windowHeight = window.innerHeight;
      const fadeUpTop = fadeUp[i].getBoundingClientRect().top;
      if (fadeUpTop < windowHeight) {
        fadeUp[i].classList.add('fly');
      } else {
        fadeUp[i].classList.remove('fly');
      }
    }
  }
  return (
    <div id="our_character" style={{ backgroundColor: "#051435" }}>
      <div className="Ourcharacter mx-auto">
        <div className="mx-auto pt-28 fadeUp">
          <img className="mx-auto mb-name-Ourcharacter" src={textOur} alt="" />
        </div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="container-full mx-auto"
        >
          <div className=" mx-auto" style={{ position: "relative" }}>
            <p className="name-character">CHARMANDE</p>
            <div className="Ourcharacter__item">
              <div className="flex justify-center items-center">
                <div>
                  <img src={item1} alt="" />
                </div>
                <div>
                  <img src={item2} alt="" />
                </div>
                <div className="wrapper-star">
                  <img className="start-img" src={star} alt="" />
                </div>
                <div>
                  <img src={item3} alt="" />
                </div>
                <div>
                  <img src={item4} alt="" />
                </div>
              </div>
            </div>

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
                className="fire__img"
                src={Fire}
                alt=""
              />
              <div className="character-properties">
                <li>SPIT FILE</li>
                <li>THUNDER</li>
                <li>DISCHARG</li>
              </div>
            </div>
            <div className="Ourcharacter_description">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip
              </span>
              <span>
                2.630 HPM
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OurCharacter;
