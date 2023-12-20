import Card from "@/app/screens/analyticsPage/cards/card";
import styles from "../../screens/analyticsPage/analyticspage.module.css";
import Chart from "@/app/screens/analyticsPage/chart/chart";
import Chart2 from "@/app/screens/analyticsPage/chart2/chart2";
import News from "@/app/screens/analyticsPage/news/news";
import Traficandtask from "@/app/screens/analyticsPage/trafficandtasks/traficandtask";

const Analytics = () => {
  return (
    <div>
      <div className={styles.heading}>
        <h2>Hi, Welcome back 👋</h2>
      </div>
      <Card />
      <Chart />
      <Chart2 />
      <News />
      <Traficandtask />
    </div>
  );
};

export default Analytics;
