import React from 'react';
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from 'recharts';
import './DashBord.css'

const Dashbord = () => {
   const lineChart = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
   const barChart = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className="chart">
           <div>
                <h3 className="cart-head">Month Wise sell</h3>
                <LineChart width={400} height={400} data={lineChart}>
                <Line dataKey={'sell'}></Line>
                <XAxis dataKey={'month'}></XAxis>
                <YAxis></YAxis>
                </LineChart>
           </div>
           <div className="bar-chart">
               <h3 className="cart-head">Investment vs Revenue</h3>
               <BarChart width={400} height={400} data={barChart}>
                  <Bar dataKey={'investment'}  fill="#8884d8" ></Bar>
                  <XAxis dataKey={"month"}></XAxis>
                  <YAxis></YAxis>
               </BarChart>
           </div>
        </div>
        
        
    );
};

export default Dashbord;