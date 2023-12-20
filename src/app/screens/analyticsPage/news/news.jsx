import React from "react";
import styles from "./news.module.css";
import newsItems from "../../../utils/newsItems";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
const News = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.news}>
        <div className={styles.heading}>
          <span>News</span>
        </div>
        {newsItems.map((news) => (
          <div className={styles.box}>
            <div className={styles.boxes}>
              <div className={styles.image}>
                <Image
                  src={news.img}
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className={styles.text}>
                <span>{news.title}</span>
                <p>{news.des}</p>
              </div>
              <div className={styles.time}>{news.time}</div>
            </div>
          </div>
        ))}
        <div className={styles.viewall}>
          <span>View All</span>
          <IoIosArrowForward />
        </div>
      </div>
      <div className={styles.ordertimeline}>
        <div className={styles.heading1}>
          <span>Order Timeline</span>
        </div>
        <div className={styles.otdivs}>
          <div>
            <div className={styles.otdiv1}>
              <div className={styles.greencircle} />
              <span>1983, orders, $4220</span>
            </div>
            <div className={styles.otdiv2}>
              <span>15 December 2023 6:14 PM</span>
            </div>
          </div>
          <div>
            <div className={styles.otdiv1}>
              <div className={styles.greencircle2} />
              <span>12 Invoices have been paid</span>
            </div>
            <div className={styles.otdiv2}>
              {" "}
              <span>14 December 2023 6:14 PM</span>
            </div>
          </div>
          <div>
            <div className={styles.otdiv1}>
              <div className={styles.bluecircle} />
              <span>Order #2557 from September</span>
            </div>
            <div className={styles.otdiv2}>
              {" "}
              <span>13 December 2023 6:14 PM</span>
            </div>
          </div>
          <div>
            <div className={styles.otdiv1}>
              <div className={styles.orangecircle} />
              <span>New Order Placed #XF-3221</span>
            </div>
            <div className={styles.otdiv2}>
              {" "}
              <span>12 December 2023 6:14 PM</span>
            </div>
          </div>
          <div>
            <div className={styles.otdiv1}>
              <div className={styles.redcircle} />
              <span>New Order Placed #XF-3221</span>
            </div>
            <div className={styles.otdiv3}>
              {" "}
              <span>11 December 2023 6:14 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
