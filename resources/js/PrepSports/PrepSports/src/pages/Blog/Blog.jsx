import React, { useContext, useEffect, useState } from "react";
import "./styles.scss";
import { IsBlogPageContext } from "../../state/isBlogPageContext";
import { CurrentSportContext } from "../../state/CurrentSportContext";
import FeaturedArticle from "./FeaturedArticle";
// import { featuredArticles } from "../../state/featuredArticles";
import SinglePost from "./SinglePost";
import { getBlogs, getNextPosts, getSidebarArticles } from "../../api/blog.api";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Blog = ({ match }) => {
  const { setIsBlogPage } = useContext(IsBlogPageContext);
  const { setCurrentSport } = useContext(CurrentSportContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPostId, setCurrentPostId] = useState("");
  const [mainArticles, setMainArticles] = useState([]);
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [isEndOfPosts, setIsEndOfPosts] = useState(false);
  const [sidebarArticles, setSidebarArticles] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (mainArticles.length === 0) {
      (async () => {
        try {
          setIsLoading(true);
          const response = await getBlogs();
          const allPosts = response.data;
          setFeaturedArticles(allPosts.slice(3));
          setMainArticles(allPosts.slice(0, 3));

          const sidebarResponse = await getSidebarArticles();
          setSidebarArticles(sidebarResponse.data);

          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  useEffect(() => {
    setCurrentPostId(match.params.id);
    // eslint-disable-next-line
  }, [match.params.id]);

  useEffect(() => {
    setIsBlogPage(true);
    setCurrentSport({});
    return () => setIsBlogPage(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    featuredArticles.map(post => {
      if (post.id === 2) {
        setIsEndOfPosts(true);
      }
    });
  }, [featuredArticles]);

  const loadMore = async () => {
    setIsLoadingMore(true);
    const lastPostId = featuredArticles[featuredArticles.length - 1].id;
    const response = await getNextPosts(lastPostId, 0);
    const reversed = response.data.curent_page_articles.reverse();

    const addedPosts = featuredArticles.concat(reversed);
    setFeaturedArticles(addedPosts);
    setIsLoadingMore(false);
  };

  return (
    <div id="blog_wrapper">
      <div className="site-container">
        <div style={{ minHeight: "1200px" }} className="site-container-wrap">
          <div
            className="site-inner"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {isLoading ? (
              <Loader />
            ) : (
              <div className="content-sidebar-wrap">
                {currentPostId ? (
                  // TODO: Find by id and pass certain post in SinglePost
                  <SinglePost isLoading={isLoading} id={currentPostId} />
                ) : (
                  <PostsList
                    isLoading={isLoading}
                    mainArticles={mainArticles}
                    featuredArticles={featuredArticles}
                    loadMore={loadMore}
                    isEndOfPosts={isEndOfPosts}
                    isLoadingMore={isLoadingMore}
                  />
                )}

                <Sidebar sidebarArticles={sidebarArticles} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PostsList = ({
  isLoading = false,
  loadMore,
  mainArticles = [],
  featuredArticles = [],
  isEndOfPosts = false,
  isLoadingMore = false
}) => {
  return (
    <main className="content" id="genesis-content" style={{ display: "block" }}>
      {/* <Link to={`/blog/${mainArticles[0]?.id}`}> */}
      <div className="home-top widget-area">
        <section
          id="fantrax-featured-conten-5"
          className="widget fantrax-featured-post featured-content featuredpost"
        >
          <div className="widget-wrap">
            <article className="post-66950 post type-post status-publish format-standard has-post-thumbnail category-fantasy-football entry">
              {/* eslint-disable-next-line */}
              <a className="aligncenter" aria-hidden="true">
                <img
                  width={740}
                  height={400}
                  src={window.assetPath + "/" + mainArticles[0]?.image_link}
                  className="entry-image attachment-post"
                  alt="Post-Draft Fantasy Previews: AFC North"
                  sizes="(max-width: 740px) 100vw, 740px"
                />
              </a>
              <header className="entry-header">
                <h4 className="entry-title">
                  <span className="category">
                    {mainArticles[0]?.categories}
                  </span>
                </h4>
                <h4
                  id="entry_title"
                  className="entry-title"
                  itemProp="headline"
                >
                  {/* eslint-disable-next-line */}
                  <Link to={`/blog/${mainArticles[0]?.id}`}>
                    {mainArticles[0]?.title}
                  </Link>
                </h4>
                <p className="entry-meta">
                  <time className="entry-time">
                    {mainArticles[0]?.created_at}
                  </time>
                </p>
              </header>
            </article>
          </div>
        </section>
      </div>
      {/* </Link> */}

      <div className="home-middle">
        <Link to={`/blog/${mainArticles[1]?.id}`}>
          <div className="home-middle-left widget-area">
            <section
              id="fantrax-featured-conten-7"
              className="widget fantrax-featured-post featured-content featuredpost"
            >
              <div className="widget-wrap">
                <article className="post-57628 post type-post status-publish format-standard has-post-thumbnail category-dynasty-fantasy-baseball category-fantasy-baseball category-mlb-prospects entry">
                  <Link to={`/blog/${mainArticles[1]?.id}`}>
                    <img
                      width={348}
                      height={180}
                      src={window.assetPath + "/" + mainArticles[1]?.image_link}
                      className="entry-image attachment-post"
                      alt="Tampa Bay Rays 2020 Top-25 Prospects"
                    />
                  </Link>
                  <header className="entry-header">
                    <h4 className="entry-title">
                      <Link to={`/blog/${mainArticles[1]?.id}`}>
                        <span className="category">
                          {mainArticles[1]?.categories}
                        </span>
                      </Link>
                    </h4>
                    <h4 className="entry-title" itemProp="headline">
                      {/* eslint-disable-next-line */}
                      <Link to={`/blog/${mainArticles[1]?.id}`}>
                        {mainArticles[1]?.title}
                      </Link>
                    </h4>
                    <p className="entry-meta">
                      <time className="entry-time">
                        {mainArticles[1]?.created_at}
                      </time>
                    </p>
                  </header>
                </article>
              </div>
            </section>
          </div>
        </Link>
        <Link to={`/blog/${mainArticles[2]?.id}`}>
          <div className="home-middle-right widget-area">
            <section
              id="fantrax-featured-conten-8"
              className="widget fantrax-featured-post featured-content featuredpost"
            >
              <div className="widget-wrap">
                <article className="post-66966 post type-post status-publish format-standard has-post-thumbnail category-dynasty-fantasy-football category-fantasy-football entry">
                  <a
                    href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/"
                    className="alignleft"
                    aria-hidden="true"
                  >
                    <img
                      width={348}
                      height={180}
                      src={window.assetPath + "/" + mainArticles[2]?.image_link}
                      className="entry-image attachment-post"
                      alt="How Should Dynasty Football Leagues Handle the 2020 NFL Supplemental Draft?"
                    />
                  </a>
                  <header className="entry-header">
                    <h4 className="entry-title">
                      <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/">
                        <span className="category">
                          {mainArticles[2]?.categories}
                        </span>
                      </a>
                    </h4>
                    <h4 className="entry-title" itemProp="headline">
                      {/* eslint-disable-next-line */}
                      <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/" />
                      <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/">
                        {mainArticles[2]?.title}
                      </a>
                    </h4>
                    <p className="entry-meta">
                      <time className="entry-time">
                        {mainArticles[2]?.created_at}
                      </time>
                    </p>
                  </header>
                </article>
              </div>
            </section>
          </div>
        </Link>
      </div>
      <h2 className="screen-reader-text">Main Content</h2>

      <div className="home-bottom widget-area">
        <section
          id="fantrax-featured-conten-3"
          className="widget fantrax-featured-post featured-content featuredpost"
        >
          <div className="widget-wrap">
            <h3 className="widgettitle widget-title">FEATURED ARTICLES</h3>
            {isLoading ? (
              <Loader />
            ) : (
              featuredArticles.map(article => (
                <FeaturedArticle
                  key={article.id}
                  id={article.id}
                  image={article.image_link}
                  sportType={article.categories}
                  title={article.title}
                  description={article.content}
                  date={article.created_at}
                />
              ))
            )}
          </div>
        </section>
        {isLoadingMore ? (
          <Loader />
        ) : (
          <div>
            {featuredArticles.length >= 7 && !isEndOfPosts ? (
              <section
                id="custom_html-5"
                className="widget_text widget widget_custom_html"
              >
                <div className="widget_text widget-wrap">
                  <div className="textwidget custom-html-widget">
                    <span onClick={loadMore} className="load-more">
                      LOAD MORE
                    </span>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
