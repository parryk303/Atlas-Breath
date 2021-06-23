/* eslint-disable react/prop-types */

import React from 'react';

const PhoneListing = ({ handleSelect, searchResults, handleLocation }) => (
  <div className="Listings">
    {searchResults.map((home) => (
      <div onClick={() => handleSelect(home)} className="home" role="button" key={home.home} aria-hidden="true">

        <b id="title">{home.title}</b>

        <div id="photoContainer">
          <div id="photoCarousel" className="carousel slide" data-ride="carousel" key={home.home}>
            <div className="carousel-inner" key={home.home}>
              <div className="carousel-item active" key={home.home}>
                <img src={home.photoUrls[0]} className="d-block w-100" alt="0" key={home.home} />
              </div>
              {home.photoUrls.map((photo, i) => (
                <div className="carousel-item" key={photo}>
                  <img src={photo} className="d-block w-100" alt={0 + i} key={photo} />
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#photoCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#photoCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>

        <div className="infoBar">
          <b id="ratingLocation" onClick={() => handleLocation()} role="button" key={home.home} aria-hidden="true">
            <b className="star">★</b>
            {home.rating}
            ・
            {home.location}
          </b>
        </div>
      </div>
    ))}
  </div>
);

export default PhoneListing;
