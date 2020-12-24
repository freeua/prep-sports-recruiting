import React from "react";
import { Link } from "react-router-dom";
import { textSlicer } from "../../helpers/textSlicer";

const FeaturedArticle = ({
  image,
  sportType,
  title,
  description,
  date,
  id
}) => {
  return (
    <Link to={`/blog/${id}`}>
      <article className="post-66914 post type-post status-publish format-standard has-post-thumbnail category-fantasy-baseball entry">
        {/* eslint-disable-next-line */}
        <a className="alignleft" aria-hidden="true">
          <img
            width={150}
            height={150}
            src={window.assetPath + "/" + image}
            className="entry-image attachment-post"
            alt={title}
          />
        </a>
        <header className="entry-header">
          <h4 className="entry-title">
            {/* eslint-disable-next-line */}
            <a
            // href="https://www.fantraxhq.com/top-fantasy-performances-these-players-have-won-leagues-for-me/"
            >
              <span className="category">{sportType}</span>
            </a>
          </h4>
          <h4 className="entry-title" itemProp="headline">
            {/* eslint-disable-next-line */}
            <a
            // href="https://www.fantraxhq.com/top-fantasy-performances-these-players-have-won-leagues-for-me/"
            />
            {/* eslint-disable-next-line */}
            <a
            // href="https://www.fantraxhq.com/top-fantasy-performances-these-players-have-won-leagues-for-me/"
            >
              {title}
            </a>
          </h4>
          <p className="entry-meta">
            <time className="entry-time">{date}</time>
          </p>
        </header>
        <div className="entry-content">
          <p>{textSlicer(description, 150)}</p>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedArticle;
