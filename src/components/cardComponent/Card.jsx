import React from "react";

const Card = (props) => {
  const { mal_id, image_url, title } = props.item;
  return (
    <div className="card-item">
      <div className="img-section">
        <img src={image_url} alt={mal_id} />
      </div>
      <div className="title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
