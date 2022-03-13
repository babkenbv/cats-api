// Sorry for mess here. I'm trying to get the code to work!!!
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const STATUS_FETCHING = "fetching";
const STATUS_FETCHED = "fetched";

const Content = () => {
  const { id } = useParams();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [loadingState, setLoadingState] = useState(STATUS_FETCHING);
  const [images, setImages] = useState([]);

  const loadNew = async () => {
    setLoadingState(STATUS_FETCHING);
    setPage(page + 1);
    if (id) {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setImages([...images, ...data]);
    } else {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setImages([...images, ...data]);
    }
    setLoadingState(STATUS_FETCHED);
  };

  const loadMore = async () => {
    setLoadingState(STATUS_FETCHING);
    setPage(page + 1);
    if (id) {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setImages([...images, ...data]);
    } else {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      setImages([...images, ...data]);
    }
    setLoadingState(STATUS_FETCHED);
  };

  useEffect(() => {
    setPage(0);
    setImages([]);
  }, [id]);

  useEffect(() => {
    if (images.length > 0) return;
    loadNew();
  }, [images]);

  return (
    <div className="gallery">
      {loadingState === STATUS_FETCHING ? (
        <div className="loader">Loading...</div>
      ) : (
        images.length > 0 &&
        images.map((image, i) => (
          <div className="imagePlaceholder" key={image.id + i}>
            <img src={image.url} alt="Cat" />
          </div>
        ))
      )}
      {loadingState === STATUS_FETCHED && (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Content;
