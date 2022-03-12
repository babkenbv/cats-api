
import React, { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';

const STATUS_FETCHING = "fetching";
const STATUS_FETCHED = "fetched";
const STATUS_CHANGED = true;


const Content = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [loadingState, setLoadingState] = useState(STATUS_FETCHING);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if(currentPath !== location.pathname) {
      setLoadingState(STATUS_CHANGED);
      setCurrentPath(location.pathname);
      setPage(0);
      setImages([]);
      loadMore();
    }
  }, [useLocation()]);
  
  const loadMore = () => {
    if(currentPath === "/") {
        fetch(
          `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`,
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        ) 
          .then(data => data.json())
          .then(data => {
            // console.log(limit);
            setImages(images.concat(data));
            setLoadingState(STATUS_FETCHED);
          });
        } else if(currentPath === "/hats"){
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        } else if(currentPath === "/sinks"){
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=14`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        } else if(currentPath === "/boxes"){
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=5`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        } else if(currentPath === "/clothes"){
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=15`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        } else if(currentPath === "/space"){
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=2`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        } else if(currentPath === "/sunglasses"){
          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=4`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        } else if(currentPath === "/ties"){

          fetch(
            `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=7`,
            {
              headers: {
                "Content-Type": "application/json",
              }
            }
          )
            .then(data => data.json())
            .then(data => {
              setImages(images.concat(data));
              setLoadingState(STATUS_FETCHED);
            });
        }
  };
    return (
      <div className="gallery">
        {loadingState === STATUS_CHANGED && images.length > 0 && images === []}
        {loadingState !== STATUS_FETCHED && (
          <div className="loader">Loading...</div>
        )}
        {loadingState === STATUS_FETCHED &&
          images.length > 0 &&
          images.map(image => (
            <div className="imagePlaceholder" key={image.id}>
              <img src={image.url} alt="Cat" />
            </div>
          ))}
        {loadingState === STATUS_FETCHED && (
          <button className="load-more" onClick={loadMore}>Load More</button>
        )}
      </div>
    );
};

export default Content;