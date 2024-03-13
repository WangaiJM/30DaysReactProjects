import { useState } from "react";

import { CiFaceSmile } from "react-icons/ci";
import { TbBrandWechat } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

import Image from "./../static/images/dog.jpg";

import "./card.css";

const Card = () => {
  const [like, setLike] = useState(false);
  const [count, SetCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      SetCount(count + 1);
    } else {
      setLike(false);
      SetCount(count - 1);
    }
  };

  return (
    <div className="main">
      <h1 className="title">Double Click to like</h1>
      <h2 className="subtitle">{`Likes: ${count}`}</h2>
      <div className="card">
        <div className="card-header">
          <span>
            <CiFaceSmile />
          </span>
          <h1>Doggy</h1>
        </div>
        <div className="card-body">
          <img src={Image} alt="dog" onDoubleClick={toggleLike} />
        </div>
        <div className="card-footer">
          <TbBrandWechat />
          {like ? (
            <CiHeart className="active" onClick={toggleLike} />
          ) : (
            <CiHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
