import React from "react";
import "./index.scss";
import roadmap from "./img/roadmap.png";
import bg from "./img/bg.png";
import road_responsive from "./img/road_develop.png";
import Road from "./img/Road.png";
import "./tablet.scss";
import "./mobile.scss";
import "../../../components/reveal.scss";

const index = () => {

  return (
    <div
      id="road_map"
      className="Roadmap mx-auto"
      style={{
        backgroundColor: "#051435",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto main-wrapper">
        <div>
          <img className="mx-auto header-name fadeUp" src={roadmap} alt="" />
        </div>
        <div className="Roadmap__content mx-auto mt-10 contentFadeUp">
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
        <div className="maincontainer" >
          <div>
            <div className="wrapper-text">
              <div>
                <span>1/2022</span>
                <span> <span className="symbol-text">I&nbsp;</span> Step one</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div>
                <span>2/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step second</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div>
                <span>3/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step third</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div>
                <span>4/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step four</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
              <div>
                <span>5/2022</span>
                <span><span className="symbol-text">I&nbsp;</span>Step five</span>
                <span>
                  Nam libero tempore, cum soluta nobis est eligendi
                  optio cumque nihil impedit
                  quo minus id quod maxime placeat facere.
                </span>
              </div>
            </div>

            <img className="imgroad mx-auto" src={Road} alt="" />
            <img className="imgroad-responsive" src={road_responsive} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
