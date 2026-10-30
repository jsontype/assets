import Layout from "@/src/layouts/Layout";
import Link from "next/link";
import { useEffect } from "react";
const SinglePost = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("blog");
  }, []);
  return (
    <Layout>
      <div className="background-bg background-bg-inner">
        <div className="background-filter">
          <div className="background-img" />
        </div>
      </div>
      {/* Section Started */}
      <div className="section started">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="started-content">
              <h1 className="h-title">By spite about do of do allow blush</h1>
              <div className="h-subtitles">
                <div className="h-subtitle">05 August 2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section blog">
        <div className="content">
          <div className="post">
            <div className="content-box">
              <div className="single-post-text">
                <p>
                  <img src="images/blog/blog_1.jpg" alt="Welcome to Jekyll!" />
                </p>
                <p>
                  So striking at of to welcomed resolved. Northward by described
                  up household therefore attention. Excellence decisively nay
                  man yet impression for contrasted remarkably.
                </p>
                <p>
                  Forfeited you engrossed but gay sometimes explained. Another
                  as studied it to evident. Merry sense given he be arise.
                  Conduct at an replied removal an amongst. Remaining determine
                  few her two cordially admitting old.
                </p>
                <blockquote>
                  <p>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Pellentesque suscipit.
                  </p>
                </blockquote>
                <p>
                  Tiled say decay spoil now walls meant house. My mr interest
                  thoughts screened of outweigh removing. Evening society
                  musical besides inhabit ye my. Lose hill well up will he over
                  on. Increasing <a href="#">link</a> sufficient everything men
                  him admiration unpleasing .
                </p>
                <ul>
                  <li>Greatest properly off ham exercise all.</li>
                  <li>Unsatiable invitation its possession nor off.</li>
                  <li>
                    All difficulty estimating unreserved increasing the
                    solicitude.
                  </li>
                </ul>
                <p>
                  Unpleasant astonished an diminution up partiality. Noisy an
                  their of meant. Death means up civil do an offer wound of.
                </p>
              </div>
              <div className="post-text-bottom">
                <div
                  className="social-share"
                  data-title="By spite about do of do allow blush"
                >
                  <span>Share:</span>
                  <a
                    className="share-btn share-btn-facebook share-btn-1"
                    title="Share on Facebook"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    className="share-btn share-btn-twitter share-btn-2"
                    title="Share on Twitter"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="share-btn share-btn-linkedin share-btn-3"
                    title="Share on Linkedin"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    className="share-btn share-btn-reddit share-btn-4"
                    title="Share on Reddit"
                  >
                    <i className="fab fa-reddit" />
                  </a>
                  <a
                    className="share-btn share-btn-pinterest share-btn-5"
                    title="Share on Pinterest"
                  >
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
                <div className="cat-links">
                  <span>Posted in</span>
                  <Link legacyBehavior href="/single-post">
                    <a>Music</a>
                  </Link>
                </div>
                <div className="byline">
                  by <span className="author">Ryan Adlard</span>
                </div>
                <div className="tags-links">
                  <span>Tags:</span>
                  <Link legacyBehavior href="/single-post">
                    <a rel="tag">rock</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <nav className="navigation post-navigation">
            <div className="nav-links">
              <div className="nav-previous">
                <Link legacyBehavior href="/single-post">
                  <a title="Two Before Arrow Not Relied">
                    <span className="post-nav-next post-nav-text">Prev</span>
                  </a>
                </Link>
              </div>
              <div className="nav-next">
                <Link legacyBehavior href="/single-post">
                  <a title="Welcome to Jekyll!">
                    <span className="post-nav-prev post-nav-text">Next</span>
                  </a>
                </Link>
              </div>
            </div>
          </nav>
          <div className="post-comments">
            <div className="title">
              <div className="title_inner">Comments</div>
            </div>
            <div className="comments">
              <div className="content-box">
                <ul className="comments">
                  <li className="comment post-comment">
                    <div className="comment">
                      <div className="comment-image image">
                        <img
                          alt=""
                          height={80}
                          width={80}
                          className="avatar avatar-80 photo"
                          src="images/rev1.png"
                        />
                      </div>
                      <div className="comment-desc desc">
                        <div className="comment-name name">James</div>
                        <div className="comment-text">
                          <div className="single-post-text">
                            <p>
                              Fast, cheap and good — from these three things you
                              should always choose two. If it’s fast and cheap,
                              it will never be good. If it’s cheap and good, it
                              will never work out quickly. And if it is good and
                              fast, it will never come cheap. But remember: of
                              the three you still have to always choose two.
                            </p>
                          </div>
                        </div>
                        <div className="comment-info">
                          <span className="comment-time">9:30 pm</span>
                          <span className="comment-date">June 17, 2020</span>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="comment post-comment">
                    <div className="comment">
                      <div className="comment-image image">
                        <img
                          alt=""
                          height={80}
                          width={80}
                          className="avatar avatar-80 photo"
                          src="images/rev1.png"
                        />
                      </div>
                      <div className="comment-desc desc">
                        <div className="comment-name name">Steven</div>
                        <div className="comment-text">
                          <div className="single-post-text">
                            <p>
                              Fast, cheap and good — from these three things you
                              should always choose two. If it’s fast and cheap,
                              it will never be good. If it’s cheap and good, it
                              will never work out quickly. And if it is good and
                              fast, it will never come cheap. But remember: of
                              the three you still have to always choose two.
                            </p>
                          </div>
                        </div>
                        <div className="comment-info">
                          <span className="comment-time">9:30 pm</span>
                          <span className="comment-date">June 17, 2020</span>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="comment post-comment">
                    <div className="comment">
                      <div className="comment-image image">
                        <img
                          alt=""
                          height={80}
                          width={80}
                          className="avatar avatar-80 photo"
                          src="images/rev1.png"
                        />
                      </div>
                      <div className="comment-desc desc">
                        <div className="comment-name name">William</div>
                        <div className="comment-text">
                          <div className="single-post-text">
                            <p>
                              Fast, cheap and good — from these three things you
                              should always choose two. If it’s fast and cheap,
                              it will never be good. If it’s cheap and good, it
                              will never work out quickly. And if it is good and
                              fast, it will never come cheap. But remember: of
                              the three you still have to always choose two.
                            </p>
                          </div>
                        </div>
                        <div className="comment-info">
                          <span className="comment-time">9:30 pm</span>
                          <span className="comment-date">June 17, 2020</span>
                          <span className="comment-reply">
                            <a className="comment-reply-link" href="#">
                              Reply
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="form-comment content-box">
                <div className="comment-respond">
                  <div className="title comment-reply-title">
                    <div className="title_inner">Write a comment</div>
                  </div>
                  <form method="post" className="comment-form">
                    <div className="group-val ct-gr">
                      <textarea
                        placeholder="Comment"
                        id="comment"
                        name="comment"
                        defaultValue={""}
                      />
                    </div>
                    <div className="group-val">
                      <input
                        id="author"
                        name="author"
                        type="text"
                        placeholder="Name"
                        defaultValue=""
                      />
                    </div>
                    <div className="group-val">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Email"
                        defaultValue=""
                      />
                    </div>
                    <p className="comment-form-cookies-consent">
                      <label>
                        <input
                          name="wp-comment-cookies-consent"
                          type="checkbox"
                          defaultValue="yes"
                        />
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>
                    <div className="form-submit">
                      <button
                        type="submit"
                        name="submit"
                        id="submit"
                        className="btn fill"
                        data-text="Submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default SinglePost;
