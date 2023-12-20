"use client";
import React from "react";
import styles from "./chart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {linechartdata} from "../../../utils/chartData"
const Chart = () => {

  const data2 = [
    { name: "America", value: 400 },
    { name: "Asia", value: 300 },
    { name: "Europe", value: 200 },
    { name: "Africa", value: 100 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{fontSize:'13px'}}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.linechart}>
        <div className={styles.heading}>
          <span>Website Visits</span>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            width={730}
            height={250}
            data={linechartdata}
            margin={{ top: 10, right: 30, left: 0, bottom: 30 }}
          >
            <defs>
              <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="95%" stopColor="#ffe6a2" stopOpacity={0.8} />
                <stop offset="5%" stopColor="ffe6a2" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ddf1ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ddf1ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend iconType="circle" wrapperStyle={{fontSize:'13px'}}/>
            <Area
              type="monotone"
              dataKey="TeamA"
              stroke="orange"
              fillOpacity={1}
              fill="url(#colorA)"
            />
            <Area
              type="monotone"
              dataKey="TeamB"
              stroke="steelblue"
              fillOpacity={1}
              fill="url(#colorB)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.piechart}>
        <div className={styles.heading}>
          <span>Current Visits</span>
        </div>
        <ResponsiveContainer width="100%" height="90%">
          <PieChart width={600} height={400}>
            <Legend width={300} wrapperStyle={{fontSize:"12px"}} iconType="circle"/>
            <Pie
              data={data2}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data2.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
