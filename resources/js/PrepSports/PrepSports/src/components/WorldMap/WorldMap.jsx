import React from "react";

const WorldMap = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const comments = [
    {
      title: "PSR Rocks! Second to none",
      description:
        "PSR helped my son get into St. Norberts. Programs need players! They really helped us so much and we are really grateful for the help we received."
    },
    {
      title: "So happy we went with Prep Sports Recruiting.",
      description:
        "Prep Sports was so awesome. They really helped us along the way. Some people want everything right away, as did us but we found out that with alittle work we were able to find our daughter a FULL RIDE playing softball at University of Tampa. $30,000 a year, with redshirt my daughter received 5 years of $30,000."
    },
    {
      title: "Why are people paying 1000’s of $ for Services?",
      description:
        "Prep Sports Recruiting saved us SOOOOOOOOOOOOOOO much money. We will always be happy for what they did for us. They helped our son and now our daughter is starting the journey and Prep Sports Recruiting will be helping us with the journey. #FACTS"
    }
  ];

  const maxIndex = comments.length() - 1;

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
          <a _ngcontent-sst-c276="" className="comments-box__arrow arrow-left">
            <i _ngcontent-sst-c276="" className="icons">
              chevron_left
            </i>
          </a>
          {/* eslint-disable-next-line */}
          <a _ngcontent-sst-c276="" className="comments-box__arrow arrow-right">
            <i _ngcontent-sst-c276="" className="icons">
              chevron_right
            </i>
          </a>
          <div _ngcontent-sst-c276="" className="comments-box__container">
            <div _ngcontent-sst-c276="" className="comments-box active ">
              <h5 _ngcontent-sst-c276="">
                The best fantasy sports site – bar none!
              </h5>
              <div _ngcontent-sst-c276="" className="comments-box__stars">
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
                </i>
                <i
                  _ngcontent-sst-c276=""
                  className="icons icons--success-light"
                >
                  star
                </i>
              </div>
              <p _ngcontent-sst-c276="">
                Features far exceed the expectations I envisioned and the
                customer service is second to none. If you choose any other
                fantasy league site, you're missing out!
                <span _ngcontent-sst-c276="">Keith I.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </app-world-map>
  );
};

export default WorldMap;
