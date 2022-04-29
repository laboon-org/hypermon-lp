import React from "react";
import "./index.scss";
import "./mobile.scss";
import "./tablet.scss";
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query = gql`
{
  HpmlbggamegemItems{
    items{
      id,
      content{
        describe,
        feature,
        img,
      }
    }
  }
}`;

const index = () => {
  window.addEventListener('scroll', light);
  function light() {
    const light = document.querySelectorAll('.light');
    for (let i = 0; i < light.length; i++) {
      const windowHeight = window.innerHeight;
      const lightTop = light[i].getBoundingClientRect().top;
      if (lightTop < windowHeight) {
        light[i].classList.add('blink');
      } else {
        light[i].classList.remove('blink');
      }
    }
  }

  const { data } = useQuery(query);
  const story = data?.HpmlbggamegemItems;

  return (
    <div id="gem" className="Gamegem mx-auto" style={{ backgroundColor: "#051435" }}>
      <div className="container mx-auto pt-20 fadeUp">
        <div>
          <img className="mx-auto mb-nameheader" src={story?.items[0].content.img[0].img.filename} alt="" />
        </div>
        <div className="Gamegem__content mx-auto mt-10 fadeUp">
          <p>{story?.items[0].content.describe}</p>
        </div>
        <div className="mt-28">
          <div className="flex justify-around relative">
            <div className="mb-padding-left">

              <div className="Gamegem_exchange relative reveal item1">
                <img className="pl-8" src={story?.items[0].content.feature[0].img.filename} alt="" />
                <div className="relative">
                  <img
                    style={{ top: -9, left: -17 }}
                    className="absolute"
                    src={story?.items[0].content.img[4].img.filename}
                    alt=""
                  />
                  <img className="relative" src={story?.items[0].content.img[5].img.filename} alt="" />
                </div>
                <img className="pt-10" src={story?.items[0].content.feature[0].name.filename} alt="" />
              </div>

              <div className="Gamegem_exchange relative pt-28 reveal item2">
                <img className="pl-8" src={story?.items[0].content.feature[1].img.filename} alt="" />
                <div className="relative">
                  <img
                    style={{ top: -9, left: -17 }}
                    className="absolute"
                    src={story?.items[0].content.img[4].img.filename}
                    alt=""
                  />
                  <img className="relative" src={story?.items[0].content.img[5].img.filename} alt="" />
                </div>
                <img className="pt-10" src={story?.items[0].content.feature[1].name.filename} alt="" />
              </div>
            </div>

            <div
              className="flex-1"
              style={{ zIndex: 11 }}
            >
              <div className="wrapper-imgcenter">
                <img
                  className="absolute z-10 reveal item"
                  src={story?.items[0].content.img[1].img.filename}
                  alt=""
                />
                <img
                  className="absolute light"
                  src={story?.items[0].content.img[2].img.filename}
                  alt=""
                />
                <img
                  className="absolute light"
                  src={story?.items[0].content.img[3].img.filename}
                  alt=""
                />
              </div>
            </div>
            <div className="mb-padding-right">
              <div className="Gamegem__free relative reveal item3">
                <div className="flex justify-end pr-8">
                  <img src={story?.items[0].content.feature[2].img.filename} alt="" />
                </div>
                <div>
                  <div className="relative">
                    <img
                      style={{ top: -9, right: -8 }}
                      className="absolute"
                      src={story?.items[0].content.img[4].img.filename}
                      alt=""
                    />
                    <img className="relative" src={story?.items[0].content.img[6].img.filename} alt="" />
                  </div>
                </div>
                <div className="flex justify-end pt-10 mb-firstname-right">
                  <img src={story?.items[0].content.feature[2].name.filename} alt="" />
                </div>
              </div>

              <div className="Gamegem__free relative pt-20 reveal item4">
                <div className="flex justify-end pr-8">
                  <img src={story?.items[0].content.feature[3].img.filename} alt="" />
                </div>
                <div>
                  <div className="relative">
                    <img
                      style={{ top: -9, right: -8 }}
                      className="absolute"
                      src={story?.items[0].content.img[4].img.filename}
                      alt=""
                    />
                    <img className="relative" src={story?.items[0].content.img[6].img.filename} alt="" />
                  </div>
                </div>
                <div className="flex justify-end pt-10 mb-secondname-right">
                  <img src={story?.items[0].content.feature[3].name.filename} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
