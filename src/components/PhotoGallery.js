// components/PhotoGallery.js
import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../services/Unsplash";
import PhotoCard from "./PhotoCard";
import Spinner from "./Spinner";
import { useInView } from "react-intersection-observer";
import "./PhotoGallery.css";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      setError(false);
      try {
        const newPhotos = await fetchPhotos(page);
        setPhotos((prevPhotos) => [...prevPhotos, ...newPhotos]);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };

    loadPhotos();
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading]);

  return (
    <div className="photo-gallery">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
      {loading && <Spinner />}
      {error && <p className="error">Failed to load photos. Please try again.</p>}
      <div ref={ref} className="observer"></div>
    </div>
  );
};

export default PhotoGallery;
