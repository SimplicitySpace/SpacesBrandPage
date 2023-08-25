import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.topRow}>
        <div className={classes.ImgBox}>
          <img
            src="
                            https://res.cloudinary.com/da3avivzn/image/upload/v1686300854/SpacesBrandPage/Space.._2_cvsi6j.png"
          />
        </div>
        <div className={classes.textBox}>
          <div className={classes.textBox1}>
            <span>Home</span>
            <span>Projects</span>
            <span>Services</span>
          </div>
          <div className={classes.textBox2}>
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Support</span>
          </div>
        </div>
      </div>
      <div className={classes.bottomRow}>
        <div className={classes.socialIcons}>
          <a
            href="https://twitter.com/Spaces_ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/da3avivzn/image/upload/v1686301034/SpacesBrandPage/Social_Icon_mbtedy.png"
              alt=""
            />
          </a>
          <a
            href="https://instagram.com/spaces_ui?igshid=MmJiY2I4NDBkZg=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/da3avivzn/image/upload/v1686300992/SpacesBrandPage/Social_Icon2-removebg-preview_quprah.png"
              alt=""
            />
          </a>
          <a href="https://wa.link/lwcwp7">
            <img
              src="https://res.cloudinary.com/da3avivzn/image/upload/v1686300993/SpacesBrandPage/Social_Icon3-removebg-preview_tqhau3.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <p>Email: Simplicityspaces@gmail.com</p>
        </div>
        <div>
          <span> 2023 Spaces. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
