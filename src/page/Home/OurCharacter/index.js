import React from "react";
import "./index.scss";
import starMini from "./img/starMini.png";
import Charmande1 from "./img/charmande.png";
import Fire from "./img/fire.png";
import fileLight from "./img/fireLight.png";
import "./mobile.scss";
import "./tablet.scss";
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query = gql`
{
  HpmlbgourcharacterItems{
    items{
      id,
      name,
      content{
        title,
        describe,
        image,
        pokedex,
        Star{
          filename,
        }
      }
    }
  }
}`;

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
  
  const { data } = useQuery(query);
  const story = data?.HpmlbgourcharacterItems;
  const [poke, setPoke] = React.useState();
  
  return (
    <div id="our_character" style={{ backgroundColor: "#051435" }}>
      <div className="Ourcharacter mx-auto">
        <div className="mx-auto pt-28 fadeUp">
          <img className="mx-auto mb-name-Ourcharacter" src={story?.items[0].content.image[1].img.filename} alt="" />
        </div>
        <div
          style={{
            backgroundImage: `url(${story?.items[0].content.image[0].img.filename})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="container-full mx-auto"
        >
          <div className=" mx-auto" style={{ position: "relative" }}>
          {poke !== undefined ? (story?.items[0].content.pokedex.filter(e => e === poke).map(item => (
            <p className="name-character">{item.name}</p>
          ))) : <p className="name-character">CHARMANDE</p> }
            <div className="Ourcharacter__item">
              <div className="flex justify-center items-center formBody">

              {story?.items[0].content.pokedex.filter(e => e.Id <= story?.items[0].content.pokedex.length/2).map(item => (
                <div className="formCard" style={{background:`${item.color}`}} onClick={() => setPoke(item)}>
                  <div className="formName">
                    <div className="formStar" style={{ width: '20%'}}>
                      {getStar(item.starNum).map(item => (
                        <img src={story?.items[0].content.Star[0].filename} alt=""  className="starItem" />
                      ))}
                    </div>
                      <p className="nameItem">{item.name}</p>
                    </div>
                  <img className="scale item-style" src={item.Img.filename} alt="" />
                </div>))}

              {poke !== undefined ? (story?.items[0].content.pokedex.filter(e => e === poke).map(item => (
                <div  className="wrapper-star">
                  {getStar(item.starNum).map(item => (
                    <img src={story?.items[0].content.Star[0].filename} alt="" className="star" />
                  ))}
                </div>
                ))
              ) : (
                <div  className="wrapper-star">
                  {getStar(5).map(item => (
                    <img src={story?.items[0].content.Star[0].filename} alt="" className="star" />
                  ))}
                </div>
              )}

              {story?.items[0].content.pokedex.filter(e => (e.Id > story?.items[0].content.pokedex.length/2)).map(item => (
                <div className="formCard" style={{background:`${item.color}`}} onClick={() => setPoke(item)}>
                  <div className="formName">
                    <div className="formStar" style={{ width: '20%'}}>
                      {getStar(item.starNum).map(item => (
                        <img src={story?.items[0].content.Star[0].filename} alt=""  className="starItem" />
                      ))}
                    </div>
                      <p className="nameItem">{item.name}</p>
                    </div>
                  <img className="scale item-style" src={item.Img.filename} alt="" />
                </div>))}
              </div>
            </div>

            <div className="Charmande1 relative">
              <div className="container">
                <img
                  className="fire__img"
                  src={poke === undefined ? Fire : story?.items[0].content.pokedex.filter(e => e === poke).map(item => (item.Attribute[0].img.filename))}
                  alt=""
                />
                <div>
                  <img src={fileLight} alt="" className="fireLight" />
                </div>
              </div>
              <div className="container">
                <img
                  className="mx-auto vector absolute  "
                  src={story?.items[0].content.image[2].img.filename}
                  alt=""
                />
                <img
                  className="mx-auto Charmande__img relative"
                  src={poke === undefined ? Charmande1 : story?.items[0].content.pokedex.filter(e => e === poke).map(item => (item.Img.filename))}
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
                {data?.HpmlbgourcharacterItems.items[0].content.describe}
              </span>
              <span>
                {poke === undefined ? '2.320 HPM' :story?.items[0].content.pokedex.filter(e => e === poke).map(item => (item.price))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCharacter;
