import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarArticles = {} }) => {
  return (
    <div
      className="sidebar sidebar-primary widget-area"
      role="complementary"
      aria-label="Primary Sidebar"
      id="genesis-sidebar-primary"
      // style={{ minHeight: "3796px" }}
    >
      <section
        id="featured-post-12"
        className="widget featured-content featuredpost"
      >
        <SidebarPostsList
          categoryTitle={sidebarArticles?.first_sport[0]?.categories}
          posts={sidebarArticles?.first_sport}
        />
        <SidebarPostsList
          categoryTitle={sidebarArticles?.second_sport[0]?.categories}
          posts={sidebarArticles?.second_sport}
        />
        <SidebarPostsList
          categoryTitle={sidebarArticles?.third_sport[0]?.categories}
          posts={sidebarArticles?.third_sport}
        />
      </section>
    </div>
  );
};

const SidebarPostsList = ({ categoryTitle = "", posts = [] }) => {
  return (
    <div className="widget-wrap">
      <h3 className="widgettitle widget-title">{categoryTitle}</h3>
      {posts.map(post => (
        <Link to={`/blog/${post?.id}`}>
          <article
            key={post?.id}
            className="post-81681 post type-post status-publish format-standard has-post-thumbnail category-fantasy-baseball category-analysis tag-2020-21-mlb-offseason entry"
            aria-label="Expected Home Runs: 5 Hitters Who Underperformed in 2020"
          >
            <header className="entry-header">
              <h4 className="entry-title">
                <a href="https://www.fantraxhq.com/expected-home-run-underperformers-2020/">
                  <span className="category">{post?.categories}</span>
                </a>
              </h4>
              <h4 className="entry-title" itemProp="headline">
                <a href="https://www.fantraxhq.com/expected-home-run-underperformers-2020/" />
                <a href="https://www.fantraxhq.com/expected-home-run-underperformers-2020/">
                  {post?.title}
                </a>
              </h4>
              <p className="entry-meta">
                <time className="entry-time">{post?.created_at}</time>
              </p>
            </header>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
