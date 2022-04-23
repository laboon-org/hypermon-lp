import React from "react";
import "./index.scss";
import textOur from "./img/ourcharacterText.png";
import background from "./img/ourcharacter_background.png";
import poke1 from "./img/charmande/Caterpie.png";
import poke2 from "./img/charmande/squitle.png";
import poke3 from "./img/charmande/bulbasaur.png";
import poke4 from "./img/charmande/pikachu.png";
import star1 from "./img/starBig.png";
import starMini from "./img/starMini.png";
import Charmande1 from "./img/charmande.png";
import Vector from "./img/Vector.png";
import Fire from "./img/fire.png";
import fileLight from "./img/fireLight.png";
import "./mobile.scss";
import "./tablet.scss";
import "../../../components/reveal.scss";

const fakeData = [
  {id: 1, name: 'Caterpie', img: poke1, level: 3, },
  {id: 2, name: 'Squitle', img: poke2, level: 4},
  {id: 3, name: 'Bulbasaur', img: poke3, level: 4},
  {id: 4, name: 'Pikachu', img: poke4, level: 5},
]

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
  function getStar(n){
    var arr=[]
    for(var i =0;i<n;i++)
    {
      arr.push(starMini)
    }
    return arr
  }

  const [poke, setPoke] = React.useState(fakeData);
  
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
              <div className="flex justify-center items-center formBody">

              {fakeData.filter(e => e.id <= fakeData.length/2).map(item => (
                <div className="formCard"  onClick={() => setPoke(item)}>
                  <div className="formName">
                    <div className="formStar">
                      {getStar(item.level).map(item => (
                        <img src={starMini} alt=""  className="starItem"/>
                      ))}
                    </div>
                      <p className="nameItem">{item.name}</p>
                  </div>
                  <img className="scale item-style" src={item.img} alt="" />
                </div>
              ))}
              
                <div  className="wrapper-star">
                  {getStar(poke.level).map(item => (
                    <img src={star1} alt="" className="star" />
                  ))}
                </div>

              {fakeData.filter(e => (e.id > fakeData.length/2)).map(item => (
                <div className="formCard"  onClick={() => setPoke(item)}>
                  <div className="formName">
                    <div className="formStar">
                      {getStar(item.level).map(item => (
                        <img src={starMini} alt=""  className="starItem"/>
                      ))}
                    </div>
                      <p className="nameItem">{item.name}</p>
                    </div>
                  <img className="scale item-style" src={item.img} alt="" />
                </div>
              ))}
            </div>
          </div>

            <div className="Charmande1 relative">
              <div className="container">
                <img
                  className="fire__img"
                  src={Fire}
                  alt=""
                />
                <div>
                  <img src={fileLight} alt="" className="fireLight" />
                </div>
              </div>
              <div className="container">
                <img
                  className="mx-auto vector absolute  "
                  src={Vector}
                  alt=""
                />
                <img
                  className="mx-auto Charmande__img relative"
                  src={poke.id === 1 ? poke1 : (poke.id === 2 ? poke2 : ( poke.id === 3 ? poke3 : (poke.id  === 4 ? poke4 : Charmande1)))}
                  alt=""
                />
              </div>
              <div className="container">
                <div className="character-properties">
                  <li>SPIT FILE</li>
                  <li>THUNDER</li>
                  <li>DISCHARG</li>
                </div>
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
