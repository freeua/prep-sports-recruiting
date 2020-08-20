import React, { useContext, useEffect } from "react";
import "./styles.scss";
import { IsBlogPageContext } from "../../state/isBlogPageContext";
import { CurrentSportContext } from "../../state/CurrentSportContext";
import FeaturedArticle from "./FeaturedArticle";
import { featuredArticles } from "../../state/featuredArticles";

const Blog = () => {
  const { setIsBlogPage } = useContext(IsBlogPageContext);
  const { setCurrentSport } = useContext(CurrentSportContext);

  useEffect(() => {
    setIsBlogPage(true);
    setCurrentSport({});
    return () => setIsBlogPage(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div id="blog_wrapper">
      <div className="site-container">
        <ul className="genesis-skip-link">
          <li>
            <a href="#genesis-content" className="screen-reader-shortcut">
              {" "}
              Skip to main content
            </a>
          </li>
          <li>
            <a
              href="#genesis-sidebar-primary"
              className="screen-reader-shortcut"
            >
              {" "}
              Skip to primary sidebar
            </a>
          </li>
          <li>
            <a
              href="#genesis-footer-widgets"
              className="screen-reader-shortcut"
            >
              {" "}
              Skip to footer
            </a>
          </li>
        </ul>
        <div className="site-container-wrap">
          <div className="site-inner">
            <div className="content-sidebar-wrap">
              <main
                className="content"
                id="genesis-content"
                style={{ display: "block" }}
              >
                <h2 className="screen-reader-text">Main Content</h2>
                <div className="home-top widget-area">
                  <section
                    id="fantrax-featured-conten-5"
                    className="widget fantrax-featured-post featured-content featuredpost"
                  >
                    <div className="widget-wrap">
                      <article className="post-66950 post type-post status-publish format-standard has-post-thumbnail category-fantasy-football entry">
                        <a
                          href="https://www.fantraxhq.com/post-draft-fantasy-previews-afc-north/"
                          className="aligncenter"
                          aria-hidden="true"
                        >
                          <img
                            width={740}
                            height={400}
                            src="https://www.fantraxhq.com/wp-content/uploads/2019/08/Ben-Roethlisberger-2019-QB-Sleepers-740x400.jpg"
                            className="entry-image attachment-post"
                            alt="Post-Draft Fantasy Previews: AFC North"
                            srcSet="https://www.fantraxhq.com/wp-content/uploads/2019/08/Ben-Roethlisberger-2019-QB-Sleepers-740x400.jpg 740w, https://www.fantraxhq.com/wp-content/uploads/2019/08/Ben-Roethlisberger-2019-QB-Sleepers-300x162.jpg 300w, https://www.fantraxhq.com/wp-content/uploads/2019/08/Ben-Roethlisberger-2019-QB-Sleepers-768x416.jpg 768w, https://www.fantraxhq.com/wp-content/uploads/2019/08/Ben-Roethlisberger-2019-QB-Sleepers.jpg 992w"
                            sizes="(max-width: 740px) 100vw, 740px"
                          />
                        </a>
                        <header className="entry-header">
                          <h4 className="entry-title">
                            <a href="https://www.fantraxhq.com/post-draft-fantasy-previews-afc-north/">
                              <span className="category">Fantasy Football</span>
                            </a>
                          </h4>
                          <h4
                            id="entry_title"
                            className="entry-title"
                            itemProp="headline"
                          >
                            {/* eslint-disable-next-line */}
                            <a href="https://www.fantraxhq.com/post-draft-fantasy-previews-afc-north/" />
                            <a href="https://www.fantraxhq.com/post-draft-fantasy-previews-afc-north/">
                              Post-Draft Fantasy Previews: AFC Nor th
                            </a>
                          </h4>
                          <p className="entry-meta">
                            <time className="entry-time">April 28, 2020</time>{" "}
                            By{" "}
                            <span className="entry-author">
                              <a
                                href="https://www.fantraxhq.com/author/tlambo80/"
                                className="entry-author-link"
                                rel="author"
                              >
                                <span className="entry-author-name">
                                  Taylor Lambert
                                </span>
                              </a>
                            </span>
                          </p>
                        </header>
                      </article>
                    </div>
                  </section>
                </div>
                <h1 style={{ display: "none" }}>FantraxHQ</h1>
                <div className="home-middle">
                  <div className="home-middle-left widget-area">
                    <section
                      id="fantrax-featured-conten-7"
                      className="widget fantrax-featured-post featured-content featuredpost"
                    >
                      <div className="widget-wrap">
                        <article className="post-57628 post type-post status-publish format-standard has-post-thumbnail category-dynasty-fantasy-baseball category-fantasy-baseball category-mlb-prospects entry">
                          <a
                            href="https://www.fantraxhq.com/top-25-tampa-bay-rays-prospects-2020/"
                            className="alignleft"
                            aria-hidden="true"
                          >
                            <img
                              width={348}
                              height={180}
                              src="https://www.fantraxhq.com/wp-content/uploads/2019/11/Tampa-Bay-Rays-Feature-Image-348x180.png"
                              className="entry-image attachment-post"
                              alt="Tampa Bay Rays 2020 Top-25 Prospects"
                            />
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title">
                              <a href="https://www.fantraxhq.com/top-25-tampa-bay-rays-prospects-2020/">
                                <span className="category">
                                  Dynasty Fantasy Baseball
                                </span>
                              </a>
                            </h4>
                            <h4 className="entry-title" itemProp="headline">
                              {/* eslint-disable-next-line */}
                              <a href="https://www.fantraxhq.com/top-25-tampa-bay-rays-prospects-2020/" />
                              <a href="https://www.fantraxhq.com/top-25-tampa-bay-rays-prospects-2020/">
                                Tampa Bay Rays 2020 Top-25 Prospects
                              </a>
                            </h4>
                            <p className="entry-meta">
                              <time className="entry-time">April 26, 2020</time>{" "}
                              By{" "}
                              <span className="entry-author">
                                <a
                                  href="https://www.fantraxhq.com/author/eric-cross/"
                                  className="entry-author-link"
                                  rel="author"
                                >
                                  <span className="entry-author-name">
                                    Eric Cross
                                  </span>
                                </a>
                              </span>{" "}
                              <span className="entry-comments-link">
                                <a href="https://www.fantraxhq.com/top-25-tampa-bay-rays-prospects-2020/#respond">
                                  Leave a Comment
                                </a>
                              </span>
                            </p>
                          </header>
                        </article>
                      </div>
                    </section>
                  </div>
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
                              src="https://www.fantraxhq.com/wp-content/uploads/2020/03/Travis-Etienne-2020-Devy-Rankings-348x180.jpg"
                              className="entry-image attachment-post"
                              alt="How Should Dynasty Football Leagues Handle the 2020 NFL Supplemental Draft?"
                            />
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title">
                              <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/">
                                <span className="category">
                                  dynasty fantasy football
                                </span>
                              </a>
                            </h4>
                            <h4 className="entry-title" itemProp="headline">
                              {/* eslint-disable-next-line */}
                              <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/" />
                              <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/">
                                How Should Dynasty Football Leagues Handle the
                                2020 NFL Supplemental Draft?
                              </a>
                            </h4>
                            <p className="entry-meta">
                              <time className="entry-time">April 27, 2020</time>{" "}
                              By{" "}
                              <span className="entry-author">
                                <a
                                  href="https://www.fantraxhq.com/author/meng/"
                                  className="entry-author-link"
                                  rel="author"
                                >
                                  <span className="entry-author-name">
                                    Meng Song
                                  </span>
                                </a>
                              </span>{" "}
                              <span className="entry-comments-link">
                                <a href="https://www.fantraxhq.com/how-should-dynasty-football-leagues-handle-the-2020-nfl-supplemental-draft/#respond">
                                  Leave a Comment
                                </a>
                              </span>
                            </p>
                          </header>
                        </article>
                      </div>
                    </section>
                  </div>
                </div>
                <div className="home-bottom widget-area">
                  <section
                    id="fantrax-featured-conten-3"
                    className="widget fantrax-featured-post featured-content featuredpost"
                  >
                    <div className="widget-wrap">
                      <h3 className="widgettitle widget-title">
                        FEATURED ARTICLES
                      </h3>
                      {featuredArticles.map((article) => (
                        <FeaturedArticle
                          image={article.image}
                          sportType={article.sportType}
                          title={article.title}
                          description={article.description}
                          date={article.date}
                          author={article.author}
                        />
                      ))}
                    </div>
                  </section>
                  <section
                    id="custom_html-5"
                    className="widget_text widget widget_custom_html"
                  >
                    <div className="widget_text widget-wrap">
                      <div className="textwidget custom-html-widget">
                        <a
                          href="https://www.fantraxhq.com/featured-articles/"
                          className="load-more"
                        >
                          VIEW MORE ARTICLES
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </main>
              <div
                className="sidebar sidebar-primary widget-area"
                role="complementary"
                aria-label="Primary Sidebar"
                id="genesis-sidebar-primary"
                // style={{ minHeight: "3796px" }}
              >
                <h2 className="genesis-sidebar-title screen-reader-text">
                  Primary Sidebar
                </h2>
                <section
                  id="custom_html-3"
                  className="widget_text widget widget_custom_html"
                >
                  <div className="widget_text widget-wrap">
                    <div className="textwidget custom-html-widget">
                      <a
                        href="https://www.fantrax.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.fantraxhq.com/wp-content/uploads/2019/06/trade-away.png"
                          alt="Trade Away Your League for Fantrax"
                        />
                      </a>
                    </div>
                  </div>
                </section>
                <section
                  id="custom_html-22"
                  className="widget_text widget widget_custom_html"
                >
                  <div className="widget_text widget-wrap">
                    <div className="textwidget custom-html-widget">
                      <a href="https://www.fantraxhq.com/2020-fantraxhq-fantasy-baseball-draft-kit/">
                        <img
                          className="alignnone wp-image-63415 size-medium"
                          src="https://www.fantraxhq.com/wp-content/uploads/2020/02/FantraxHQ-Fantasy-Baseball-Draft-Kit-Featured-1-300x162.png"
                          alt=""
                          width={300}
                          height={162}
                        />
                      </a>
                    </div>
                  </div>
                </section>
                <section
                  id="featured-post-19"
                  className="widget featured-content featuredpost"
                >
                  <div className="widget-wrap">
                    <article className="post-66231 post type-post status-publish format-standard has-post-thumbnail category-fantasy entry">
                      <a
                        href="https://www.fantraxhq.com/how-to-evaluate-hitters-for-fantasy-baseball/"
                        className="aligncenter"
                        aria-hidden="true"
                        tabIndex={-1}
                      >
                        <img
                          width={300}
                          height={161}
                          src="https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1-300x161.jpg"
                          className="entry-image attachment-post"
                          alt="2020 Fantasy Baseball Rankings evaluate hitters"
                          srcSet="https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1-300x161.jpg 300w, https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1-1024x550.jpg 1024w, https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1-768x413.jpg 768w, https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1-1536x825.jpg 1536w, https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1-740x400.jpg 740w, https://www.fantraxhq.com/wp-content/uploads/2019/12/Trout-Acuna-Yelich-1.jpg 1768w"
                          sizes="(max-width: 300px) 100vw, 300px"
                        />
                      </a>
                      <header className="entry-header">
                        <h4 className="entry-title">
                          <a href="https://www.fantraxhq.com/how-to-evaluate-hitters-for-fantasy-baseball/">
                            <span className="category">Fantasy</span>
                          </a>
                        </h4>
                        <h4 className="entry-title" itemProp="headline">
                          {/* eslint-disable-next-line */}
                          <a href="https://www.fantraxhq.com/how-to-evaluate-hitters-for-fantasy-baseball/" />
                          <a href="https://www.fantraxhq.com/how-to-evaluate-hitters-for-fantasy-baseball/">
                            How To Evaluate Hitters for Fantasy Baseball
                          </a>
                        </h4>
                      </header>
                    </article>
                  </div>
                </section>
                <section id="text-12" className="widget widget_text">
                  <div className="widget-wrap">
                    <h3 className="widgettitle widget-title">PODCASTS</h3>
                    <div className="textwidget">
                      <div
                        id="myList"
                        className="posts-lists featured-content"
                        data-exclude_cat
                      >
                        <article className="post-67003 podcasts type-podcasts status-publish podcast_shows-fantrax-dynasty-baseball podcast_categories-mlb entry ">
                          <a
                            href="https://www.fantraxhq.com/podcasts/fantrax-dynasty-baseball-ep-141-washington-nationals-and-philadelphia-phillies-top-prospects/"
                            className="aligncenter"
                          >
                            <img
                              width={150}
                              height={150}
                              src="https://www.fantraxhq.com/wp-content/uploads/2019/11/FDB-150x150.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              srcSet="https://www.fantraxhq.com/wp-content/uploads/2019/11/FDB-150x150.jpg 150w, https://www.fantraxhq.com/wp-content/uploads/2019/11/FDB.jpg 160w"
                              sizes="(max-width: 150px) 100vw, 150px"
                            />{" "}
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title" itemProp="headline">
                              <a href="https://www.fantraxhq.com/podcasts/fantrax-dynasty-baseball-ep-141-washington-nationals-and-philadelphia-phillies-top-prospects/">
                                Fantrax Dynasty Baseball | Ep 141 | Washington
                                Nationals and Philadelphia Phillies Top
                                Prospects
                              </a>
                            </h4>
                          </header>
                        </article>
                        <article className="post-66907 podcasts type-podcasts status-publish podcast_shows-five-tool-podcast podcast_categories-mlb entry ">
                          <a
                            href="https://www.fantraxhq.com/podcasts/five-tool-podcast-ep-6-nl-west-preview-and-padres-pitching/"
                            className="aligncenter"
                          >
                            <img
                              width={150}
                              height={150}
                              src="https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-150x150.png"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              srcSet="https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-150x150.png 150w, https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-300x300.png 300w, https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-1024x1024.png 1024w, https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-768x768.png 768w, https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-1536x1536.png 1536w, https://www.fantraxhq.com/wp-content/uploads/2020/03/5_tool_3-1-2048x2048.png 2048w"
                              sizes="(max-width: 150px) 100vw, 150px"
                            />{" "}
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title" itemProp="headline">
                              <a href="https://www.fantraxhq.com/podcasts/five-tool-podcast-ep-6-nl-west-preview-and-padres-pitching/">
                                Five-Tool Podcast | Ep 6 | NL West Preview and
                                Padres Pitching
                              </a>
                            </h4>
                          </header>
                        </article>
                        <article className="post-66904 podcasts type-podcasts status-publish podcast_shows-fantrax-dynasty-baseball entry ">
                          <a
                            href="https://www.fantraxhq.com/podcasts/fantrax-dynasty-baseball-ep-140-new-york-mets-top-prospects/"
                            className="aligncenter"
                          >
                            <img
                              width={150}
                              height={150}
                              src="https://www.fantraxhq.com/wp-content/uploads/2019/11/FDB-150x150.jpg"
                              className="attachment-thumbnail size-thumbnail"
                              alt=""
                              srcSet="https://www.fantraxhq.com/wp-content/uploads/2019/11/FDB-150x150.jpg 150w, https://www.fantraxhq.com/wp-content/uploads/2019/11/FDB.jpg 160w"
                              sizes="(max-width: 150px) 100vw, 150px"
                            />{" "}
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title" itemProp="headline">
                              <a href="https://www.fantraxhq.com/podcasts/fantrax-dynasty-baseball-ep-140-new-york-mets-top-prospects/">
                                Fantrax Dynasty Baseball | Ep 140 | New York
                                Mets Top Prospects
                              </a>
                            </h4>
                          </header>
                        </article>
                        <article className="post-66902 podcasts type-podcasts status-publish podcast_shows-launch-angle podcast_categories-mlb entry ">
                          <a
                            href="https://www.fantraxhq.com/podcasts/launch-angle-ep-99-gekko-day-and-nfbc-contest-questions/"
                            className="aligncenter"
                          >
                            <img
                              width={150}
                              height={150}
                              src="https://www.fantraxhq.com/wp-content/uploads/2019/01/1400x1400-LAUNCH-150x150.png"
                              className="attachment-thumbnail size-thumbnail"
                              alt="Launch Angle Podcast player evaluation, ownership trends, player call-ups, and everything in between!"
                              srcSet="https://www.fantraxhq.com/wp-content/uploads/2019/01/1400x1400-LAUNCH-150x150.png 150w, https://www.fantraxhq.com/wp-content/uploads/2019/01/1400x1400-LAUNCH-300x300.png 300w, https://www.fantraxhq.com/wp-content/uploads/2019/01/1400x1400-LAUNCH-768x768.png 768w, https://www.fantraxhq.com/wp-content/uploads/2019/01/1400x1400-LAUNCH-1024x1024.png 1024w, https://www.fantraxhq.com/wp-content/uploads/2019/01/1400x1400-LAUNCH.png 1400w"
                              sizes="(max-width: 150px) 100vw, 150px"
                            />{" "}
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title" itemProp="headline">
                              <a href="https://www.fantraxhq.com/podcasts/launch-angle-ep-99-gekko-day-and-nfbc-contest-questions/">
                                Launch Angle | Ep 99 | Gekko Day and NFBC
                                Contest Questions
                              </a>
                            </h4>
                          </header>
                        </article>
                        <article className="post-66884 podcasts type-podcasts status-publish podcast_shows-nastycast podcast_categories-mlb entry ">
                          <a
                            href="https://www.fantraxhq.com/podcasts/nasty-cast-ep-225-brett-tyler-and-anthony-from-the-upper-decker-podcast/"
                            className="aligncenter"
                          >
                            <img
                              width={150}
                              height={150}
                              src="https://www.fantraxhq.com/wp-content/uploads/2018/09/750x750-NastyCast-compressor-150x150.png"
                              className="attachment-thumbnail size-thumbnail"
                              alt="Fantrax analysts Nathan Dokken, Van Lee, and Ron Rigney dissect the wide world of Fantasy Baseball"
                              srcSet="https://www.fantraxhq.com/wp-content/uploads/2018/09/750x750-NastyCast-compressor-150x150.png 150w, https://www.fantraxhq.com/wp-content/uploads/2018/09/750x750-NastyCast-compressor-300x300.png 300w, https://www.fantraxhq.com/wp-content/uploads/2018/09/750x750-NastyCast-compressor.png 750w"
                              sizes="(max-width: 150px) 100vw, 150px"
                            />{" "}
                          </a>
                          <header className="entry-header">
                            <h4 className="entry-title" itemProp="headline">
                              <a href="https://www.fantraxhq.com/podcasts/nasty-cast-ep-225-brett-tyler-and-anthony-from-the-upper-decker-podcast/">
                                Nasty Cast | Ep 225 | Brett, Tyler, and Anthony
                                from the Upper Decker Podcast
                              </a>
                            </h4>
                          </header>
                        </article>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
