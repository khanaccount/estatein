import React from "react";
import s from "./index.module.scss";

import navCross from "assets/vectors/nav/navCross.svg";
import logo from "assets/vectors/logo.svg";

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.bannerBg}>
        <div className={"container"}>
          <div className={s.text}>
            <p>✨Discover Your Dream Property with Estatein</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <button className={s.closeBannerBtn}>
          <img src={navCross} alt="navCrossSvg" />
        </button>
      </div>
      <nav className={s.navBorder}>
        <div className={`${s.nav} container`}>
          <div className={s.logo}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={s.pageLists}>
            <button className={s.navBtnActive}>
              <a href="">Home</a>
            </button>
            <button className={s.navBtn}>
              <a href="">About Us</a>
            </button>
            <button className={s.navBtn}>
              <a href="">Properties</a>
            </button>
            <button className={s.navBtn}>
              <a href="">Services</a>
            </button>
          </div>
          <div className={s.contactUs}>
            <button>Contact Us</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
