import React from "react";

const FeaturedArticle = ({
  image,
  sportType,
  title,
  description,
  date,
  author,
}) => {
  return (
    <article className="post-66914 post type-post status-publish format-standard has-post-thumbnail category-fantasy-baseball entry">
      {/* eslint-disable-next-line */}
      <a
        // href="https://www.fantraxhq.com/top-fantasy-performances-these-players-have-won-leagues-for-me/"
        className="alignleft"
        aria-hidden="true"
      >
        <img
          width={150}
          height={150}
          src={image}
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
          <time className="entry-time">{date}</time> By{" "}
          <span className="entry-author">
            {/* eslint-disable-next-line */}
            <a
              // href="https://www.fantraxhq.com/author/aecu13/"
              className="entry-author-link"
              rel="author"
            >
              <span className="entry-author-name">{author}</span>
            </a>
          </span>{" "}
        </p>
      </header>
      <div className="entry-content">
        <p>{description}</p>
      </div>
    </article>
  );
};

export default FeaturedArticle;
