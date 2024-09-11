import { useState } from "react";
import heart from "./images/heart-svgrepo-com.svg";
import './Card.css'; // Import the CSS file

function Card({ title, feature, image }) {
  const [liked, setLiked] = useState(false); // Track the liked status

  const handleClick = () => {
    setLiked(!liked); // Toggle liked status
  };

  return (
    <div className="card-container">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={title} />
        </figure>
        <img
          className="heart-icon"
          alt="heart"
          src={heart}
          onClick={handleClick}
          style={{
            width: liked ? "40px" : "20px", // Increase size when liked
            transition: "width 0.3s ease", // Smooth transition
          }}
        />
      </div>
      <div className="card-content">
        <div className="title-content">
          <p className="title is-4">{title}</p>
        </div>
        <p className="content">{feature}</p>
      </div>
    </div>
  );
}

export default Card;
