import React from "react";
import styles from "./bannerandslider.module.css";
import ImageSlider from "./imageSlider/imageSlider";
const BannerAndSlider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <div className={styles.content}>
          <h3>Welcome back 👋 <br/>Jaydon Frankie</h3>
          <span>
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure there isn't anything.
          </span>
          <button>Go Now</button>
        </div>
        <div className={styles.image}>
            <img src="./banner.svg" width={300}/>
        </div>
      </div>
      <div>
        {/* <ImageSlider/> */}
      </div>
    </div>
  );
};

export default BannerAndSlider;
