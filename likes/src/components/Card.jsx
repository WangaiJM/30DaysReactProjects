import { CiFaceSmile } from "react-icons/ci";
import { TbBrandWechat } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

import Image from "./../static/images/dog.jpg";

import "./card.css";

const Card = () => {
  return (
    <div className="main">
      <h1 className="title">Double Click to like</h1>
      <h2 className="subtitle">Likes: 0</h2>
      <div className="card">
        <div className="card-header">
          <span>
            <CiFaceSmile />
          </span>
          <h1>Doggy</h1>
        </div>
        <div className="card-body">
          <img src={Image} alt="dog" />
        </div>
        <div className="card-footer">
          <TbBrandWechat />
          <CiHeart className="active" />
        </div>
      </div>
    </div>
  );
};

export default Card;
