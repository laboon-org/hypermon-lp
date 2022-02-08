import React from "react";
import "./index.scss";
import roadmap from "./img/roadmap.png";
import bg from "./img/bg.png";
import Road from "./img/Road.png";

const index = () => {
  return (
    <div
      className="Roadmap mx-auto"
      style={{
        backgroundColor: "#051435",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto " style={{ paddingTop: 200 }}>
        <div>
          <img className="mx-auto" src={roadmap} alt="" />
        </div>
        <div className="Roadmap__content mx-auto mt-10">
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
        <div style={{ paddingTop: 400, marginBottom: -205 }}>
          <div>
            <img src={Road} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
