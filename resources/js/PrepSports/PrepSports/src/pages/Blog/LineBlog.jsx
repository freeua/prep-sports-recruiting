import React, { useContext, useEffect } from 'react';
import './styles.scss';
import { IsBlogPageContext } from '../../state/isBlogPageContext';
import { CurrentSportContext } from '../../state/CurrentSportContext';
import FeaturedArticle from './FeaturedArticle';
import { featuredArticles } from '../../state/featuredArticles';

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
              {' '}
              Skip to main content
            </a>
          </li>
          <li>
            <a
              href="#genesis-sidebar-primary"
              className="screen-reader-shortcut"
            >
              {' '}
              Skip to primary sidebar
            </a>
          </li>
          <li>
            <a
              href="#genesis-footer-widgets"
              className="screen-reader-shortcut"
            >
              {' '}
              Skip to footer
            </a>
          </li>
        </ul>
        <div className="site-container-wrap">
          <div
            style={{ display: 'flex', justifyContent: 'center' }}
            className="site-inner"
          >
            {/* <div className="content-sidebar-wrap"> */}
            <main
              className="content"
              id="genesis-content"
              style={{ display: 'block', borderLeft: '1px solid #e3e3e3' }}
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
                          <time className="entry-time">April 28, 2020</time> By{' '}
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
              <h1 style={{ display: 'none' }}>FantraxHQ</h1>
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
                            <time className="entry-time">April 26, 2020</time>{' '}
                            By{' '}
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
                            </span>{' '}
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
                            <time className="entry-time">April 27, 2020</time>{' '}
                            By{' '}
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
                            </span>{' '}
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
                    {featuredArticles.map(article => (
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
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
