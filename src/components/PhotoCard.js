// components/PhotoCard.js
import React from "react";
import "./PhotoCard.css";

const PhotoCard = ({ photo }) => (
  <div className="photo-card">
    <img src={photo.urls.small} alt={photo.alt_description} loading="lazy" />
    <p className="caption">📷 {photo.user.name}</p>
  </div>
);

export default PhotoCard;
