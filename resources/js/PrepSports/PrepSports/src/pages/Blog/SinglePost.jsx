import React, { useEffect, useState } from "react";
import { getSinglePost } from "../../api/blog.api";
import Loader from "../../components/Loader/Loader";

const SinglePost = ({ id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await getSinglePost(id);
        setPost(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main
      className="content"
      id="genesis-content"
      style={{ borderLeft: "1px solid rgb(227, 227, 227)" }}
    >
      <article
        className="post-70969 post type-post status-publish format-standard has-post-thumbnail category-fantasy-epl tag-epl-team-preview entry"
        aria-label="Draft Premier League 20/21: West Brom Team Preview"
      >
        <div className="start-entry-content first-post">
          <h1 className="entry-title">{post?.title}</h1>
          <span className="category">{post?.categories}</span>

          <div className="entry-content">
            <div className="single-featured">
              <img
                width={994}
                height={537}
                src={window.assetPath + "/" + post?.image_link}
                className="attachment-full size-full wp-post-image"
                alt={post.title}
                loading="lazy"
              />
            </div>
            <p style={{ textAlign: "left" }}>{post?.content}</p>

            <hr />
          </div>
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
