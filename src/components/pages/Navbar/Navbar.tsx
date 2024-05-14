import { FC } from 'react';

import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { UserOutlined } from "@ant-design/icons";
import LinkItems from "./Links";

const Navbar: FC = (): JSX.Element => {
  return (
    <header className={style.Header}>
      <nav style={{ width: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className={style.Container}>
          <div className={style.FlexRow}>
            <div style={{ paddingLeft: "3px" }}>
              <NavLink to="/" className={style.logImage}>
                <LazyLoadImage
                  src="https://ucarecdn.com/ec51e424-cbec-480a-b79f-c558dc1ad238/"
                  effect="blur"
                  width="190px"
                  height="48px"
                  alt="Web Site Logo"
                />
              </NavLink>
            </div>
            {/*  lInks */}
            <div
              className={style.LinksRow}
              style={{ width: "60%", display: "flex" }}
            >
              <LinkItems />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <button className={style.LoginButton}>
                <span>
                  <UserOutlined />
                </span>
                <span style={{ marginLeft: "12px" }}>Вход</span>
              </button>
              <button className={style.FeedBack}>Связаться с нами</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
