import React from "react";
import "./index.scss";
import ourpartner from "./img/ourpartner.png";
import bg from "./img/Rectangle98.png";
import item1 from "./img/item1.png";
import item2 from "./img/item2.png";
import item3 from "./img/item3.png";
import item4 from "./img/item4.png";
import item5 from "./img/item5.png";
import "./tablet.scss";
import "./mobile.scss";
import "../../../components/reveal.scss";
import { gql, useQuery } from "@apollo/client";

const query = gql`
{
  HpmlbgourpartnerItems{
    items{
      id,
      content{
        describe,
        img,
        partner,
      }
    }
  }
}`;

const index = () => {
  const { data } =useQuery(query);
  let story = data?.HpmlbgourpartnerItems;

  return (
    <div
      id="out_partner"
      className="Ourpartner mx-auto"
      style={{
        backgroundColor: "#051435",
        backgroundImage: `url(${story?.items[0].content.img[1].img.filename})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto pt-20 fadeUp">
        <div>
          <img className="mx-auto mb-headername" src={story?.items[0].content.img[0].img.filename} alt="" />
        </div>
        <div className="Ourpartner__content mx-auto mt-10">
          <p>{story?.items[0].content.describe}</p>
        </div>
        <div className="pt-16 pb-16">
          <div className="flex justify-between items-center wrapper-img">
            {story?.items[0].content.partner.map(item => (
              <div>
                <img src={item.img.filename} alt="" />
            </div>))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
