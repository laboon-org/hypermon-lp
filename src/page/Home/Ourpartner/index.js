import React from "react";
import "./index.scss";
import ourpartner from "./img/ourpartner.png";
import bg from "./img/Rectangle98.png";
import item1 from "./img/item1.png";
import item2 from "./img/item2.png";
import item3 from "./img/item3.png";
import item4 from "./img/item4.png";
import item5 from "./img/item5.png";
import "./tablet.scss"
import "./mobile.scss"
const index = () => {
  return (
    <div
      className="Ourpartner mx-auto"
      style={{
        backgroundColor: "#051435",
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto pt-20">
        <div>
          <img className="mx-auto mb-headername" src={ourpartner} alt="" />
        </div>
        <div className="Ourpartner__content mx-auto mt-10">
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>
        </div>
        <div className="pt-16 pb-16">
          <div className="flex justify-between items-center wrapper-img">
            <div>
              <img src={item1} alt="" />
            </div>
            <div>
              <img src={item2} alt="" />
            </div>
            <div>
              <img src={item3} alt="" />
            </div>
            <div>
              <img src={item4} alt="" />
            </div>
            <div>
              <img src={item5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
