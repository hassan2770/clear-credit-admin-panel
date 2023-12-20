"use client";
import React from "react";
import styles from "./chart2.module.css";
import { barchartdata,graphchartdata } from "../../../utils/chartData";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
const Chart2 = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.barchart}>
        <div className={styles.heading}>
          <span>Conversion Rates</span>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={barchartdata}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <XAxis type="number" axisLine={false} tick={{ fontSize: 12 }}/>
            <YAxis
              dataKey="name"
              type="category"
              scale="bar"
              tick={{ fontSize: 12 }}
              axisLine={false}
            />
            <Tooltip />
            <Bar dataKey="users" barSize={10} fill="#17B169"  />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.graphchart}>
        <div className={styles.heading}>
          <span>Current Subject</span>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={graphchartdata}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{fontSize:'12px'}}/>
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
            <Radar
              name="Lily"
              dataKey="B"
              stroke="orange"
              fill="orange"
              fillOpacity={0.6}
            />
            <Legend iconType="circle"/>
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart2;
