import React from "react";
import { Link } from "react-router-dom";

export default function SideBarBlogDetails(props) {
  return (
    <>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div>
        <div className="search-filed">
          <input type="text" className="input-section" placeholder="Search" />
          <button type="submit" className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15.5 14.0898H14.71L14.43 13.8198C15.4439 12.6439 16.0011 11.1425 16 9.58985C16 8.30427 15.6188 7.04756 14.9046 5.97864C14.1903 4.90972 13.1752 4.0766 11.9874 3.58463C10.7997 3.09266 9.49279 2.96394 8.23192 3.21474C6.97104 3.46555 5.81285 4.08461 4.90381 4.99365C3.99477 5.90269 3.3757 7.06088 3.1249 8.32176C2.87409 9.58264 3.00282 10.8896 3.49479 12.0773C3.98676 13.265 4.81988 14.2802 5.8888 14.9944C6.95772 15.7086 8.21442 16.0898 9.5 16.0898C11.11 16.0898 12.59 15.4998 13.73 14.5198L14 14.7998V15.5898L19 20.5798L20.49 19.0898L15.5 14.0898ZM9.5 14.0898C7.01 14.0898 5 12.0798 5 9.58985C5 7.09985 7.01 5.08985 9.5 5.08985C11.99 5.08985 14 7.09985 14 9.58985C14 12.0798 11.99 14.0898 9.5 14.0898Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div>
        <h5>Popular Category</h5>
        <div className="category-list">
          {props?.props?.popularcategorylis.map((elem, i) => (
            <Link to="#" key={i}>
              {elem}
            </Link>
          ))}
        </div>
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div className="popular-tag">
        {props?.props?.populartag.map((elem, i) => (
          <Link to="#" key={i}>
            {elem}
          </Link>
        ))}
      </div>
      <div className="ak-height-50 ak-height-lg-30"></div>
      <div className="author-info">
        <img
          className="author-img"
          src="/assets/img/blog/author.png"
          alt="..."
        />
        <h6 className="author-title">Baskerville</h6>
        <p className="author-text">
          I'm are lorem ipsum pass <br /> ages of available,
        </p>
        <a href="https://www.facebook.com/" className="author-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="15"
            viewBox="0 0 8 15"
            fill="none"
          >
            <path
              d="M1.76547 14.043H4.71284V8.14086H7.36842L7.66021 5.20823H4.71284V3.72718C4.71284 3.53176 4.79047 3.34434 4.92866 3.20615C5.06684 3.06797 5.25426 2.99034 5.44968 2.99034H7.66021V0.0429688H5.44968C4.47257 0.0429688 3.53548 0.431126 2.84455 1.12205C2.15363 1.81297 1.76547 2.75007 1.76547 3.72718V5.20823H0.291789L0 8.14086H1.76547V14.043Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://twitter.com/?lang=en" className="author-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="15"
            viewBox="0 0 19 15"
            fill="none"
          >
            <path
              d="M6.2211 14.043C12.8947 14.043 16.5443 8.65653 16.5443 3.98513C16.5443 3.83222 16.5443 3.68002 16.5339 3.52854C17.2442 3.02792 17.8573 2.40802 18.3444 1.69789C17.6823 1.98409 16.9799 2.17187 16.2606 2.25498C17.0178 1.81297 17.5844 1.11802 17.8551 0.299413C17.1431 0.71109 16.3641 1.00123 15.5517 1.15731C15.0047 0.590554 14.2811 0.215262 13.4931 0.089505C12.7051 -0.0362519 11.8964 0.0945368 11.1924 0.461633C10.4883 0.828729 9.92806 1.41167 9.59829 2.12025C9.26853 2.82882 9.18764 3.62354 9.36815 4.38141C7.92572 4.31098 6.5146 3.9458 5.2264 3.3096C3.9382 2.6734 2.8017 1.78038 1.89068 0.688517C1.42683 1.46677 1.28484 2.388 1.4936 3.26467C1.70236 4.14134 2.24618 4.90754 3.01437 5.4073C2.4369 5.3905 1.87205 5.23858 1.36752 4.96435V5.00958C1.36775 5.8257 1.65769 6.61661 2.18817 7.24821C2.71865 7.87981 3.45701 8.31321 4.27805 8.4749C3.74395 8.61666 3.18361 8.63729 2.64005 8.53521C2.87186 9.23761 3.32319 9.85187 3.93091 10.2921C4.53864 10.7323 5.27237 10.9765 6.02952 10.9904C5.27721 11.5663 4.41577 11.9921 3.49445 12.2434C2.57313 12.4947 1.61001 12.5666 0.660156 12.455C2.31919 13.4926 4.24966 14.0431 6.2211 14.0408"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://bd.linkedin.com/" className="author-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M4.9694 3.37599C4.96922 3.72961 4.82858 4.06868 4.57841 4.31861C4.32823 4.56853 3.98902 4.70884 3.6354 4.70866C3.28178 4.70848 2.94271 4.56784 2.69279 4.31766C2.44286 4.06749 2.30256 3.72828 2.30273 3.37466C2.30291 3.02104 2.44356 2.68197 2.69373 2.43205C2.9439 2.18212 3.28311 2.04182 3.63673 2.04199C3.99036 2.04217 4.32942 2.18281 4.57935 2.43299C4.82927 2.68316 4.96958 3.02237 4.9694 3.37599ZM5.0094 5.69599H2.34273V14.0427H5.0094V5.69599ZM9.22273 5.69599H6.5694V14.0427H9.19607V9.66266C9.19607 7.22266 12.3761 6.99599 12.3761 9.66266V14.0427H15.0094V8.75599C15.0094 4.64266 10.3027 4.79599 9.19607 6.81599L9.22273 5.69599Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </>
  );
}