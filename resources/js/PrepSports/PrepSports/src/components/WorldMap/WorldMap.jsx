import React, { useState } from "react";

const WorldMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const comments = [
    {
      title: "PSR Rocks! Second to none",
      description:
        "PSR helped my son get into St. Norberts. Programs need players! They really helped us so much and we are really grateful for the help we received.",
      author: "",
      stars: 5
    },
    {
      title: "So happy we went with Prep Sports Recruiting.",
      description:
        "Prep Sports was so awesome. They really helped us along the way. Some people want everything right away, as did us but we found out that with alittle work we were able to find our daughter a FULL RIDE playing softball at University of Tampa. $30,000 a year, with redshirt my daughter received 5 years of $30,000.",
      author: "",
      stars: 5
    },
    {
      title: "Why are people paying 1000’s of $ for Services?",
      description:
        "Prep Sports Recruiting saved us SOOOOOOOOOOOOOOO much money. We will always be happy for what they did for us. They helped our son and now our daughter is starting the journey and Prep Sports Recruiting will be helping us with the journey. #FACTS",
      author: "",
      stars: 5
    }
  ];

  const maxIndex = comments.length - 1;

  const handleChangeComment = isNext => {
    if (isNext) {
      if (currentIndex === maxIndex) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    } else {
      if (currentIndex === 0) {
        setCurrentIndex(maxIndex);
      } else {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const displayStars = starsCount => {
    const result = [];
    for (let i = 0; i < starsCount; i++) {
      result.push(
        <i _ngcontent-sst-c276="" className="icons icons--success-light">
          star
        </i>
      );
    }
    return result;
  };
  return (
    <app-world-map _nghost-sst-c276="">
      <div _ngcontent-sst-c276="" className="world-map in-view">
        <div
          _ngcontent-sst-c276=""
          className="world-map__circles world-map__circles--us"
        >
          <i
            _ngcontent-sst-c276=""
            className="circles circles--1 "
            // style="transition-delay: 0s;"
          ></i>
        </div>
        <div _ngcontent-sst-c276="" className="world-map__comments">
          {/* eslint-disable-next-line */}
          <span
            onClick={() => handleChangeComment(false)}
            _ngcontent-sst-c276=""
            className="comments-box__arrow arrow-left"
          >
            <i _ngcontent-sst-c276="" className="icons">
              chevron_left
            </i>
          </span>
          {/* eslint-disable-next-line */}
          <span
            onClick={() => handleChangeComment(true)}
            _ngcontent-sst-c276=""
            className="comments-box__arrow arrow-right"
          >
            <i _ngcontent-sst-c276="" className="icons">
              chevron_right
            </i>
          </span>
          <div _ngcontent-sst-c276="" className="comments-box__container">
            <div _ngcontent-sst-c276="" className="comments-box active ">
              <h5 _ngcontent-sst-c276="">{comments[currentIndex].title}</h5>
              <div _ngcontent-sst-c276="" className="comments-box__stars">
                {displayStars(comments[currentIndex]?.stars).map(star => star)}
                {/* <i
                  _ngcontent-sst-c276=""
                  className="icons icons--success-light"
                >
                  star
                </i>
                <i
                  _ngcontent-sst-c276=""
                  className="icons icons--success-light"
                >
                  star
                </i>
                <i
                  _ngcontent-sst-c276=""
                  className="icons icons--success-light"
                >
                  star
                </i>
                <i
                  _ngcontent-sst-c276=""
                  className="icons icons--success-light"
                >
                  star
                </i>
                <i
                  _ngcontent-sst-c276=""
                  className="icons icons--success-light"
                >
                  star
                </i> */}
              </div>
              <p _ngcontent-sst-c276="">
                {comments[currentIndex].description}
                <span _ngcontent-sst-c276="">
                  {comments[currentIndex]?.author}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-world-map>
  );
};

export default WorldMap;
