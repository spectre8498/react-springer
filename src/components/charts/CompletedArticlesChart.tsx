import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { date: "12 Mar", value: 30 },
    { date: "13 Mar", value: 10 },
    { date: "14 Mar", value: 40 },
    { date: "15 Mar", value: 35 },
    { date: "16 Mar", value: 38 },
    { date: "17 Mar", value: 25 },
    { date: "18 Mar", value: 50 },
];

const CompletedArticlesChart = () => {
    return (
        <div 
            style={{
                width: "100%",
                maxWidth: 500,
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #94A3B8",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)"
            }} 
            role="region" 
            aria-labelledby="chart-title"
        >
            <p 
                id="chart-title" 
                className="title-style" 
                style={{ marginLeft: "10px", textAlign: "left" }}
            >
                Completed Articles
            </p>
            
            <ResponsiveContainer width="100%" height={250} style={{ position: "relative", left: "-24px" }}>
                <LineChart
                    data={data}
                    margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
                    role="img"
                    aria-label="Line chart showing completed articles over time"
                >
                    <desc>
                        This chart displays the number of completed articles from March 12 to March 18.
                    </desc>

                    <XAxis
                        tickLine={false}
                        dataKey="date"
                        stroke="#002f6c"
                        interval={0}
                        tick={{ fontSize: 12 }}
                        tickMargin={8}
                        padding={{ left: 10, right: 10 }}
                        aria-hidden="true"
                    />

                    <YAxis
                        tickLine={false}
                        stroke="#002f6c"
                        tick={{ fontSize: 12 }}
                        domain={[10, 70]}
                        ticks={[10, 20, 30, 40, 50, 60, 70]}
                        padding={{ bottom: 10, top: 10 }}
                        tickMargin={8}
                        aria-hidden="true"
                    />

                    <Tooltip />
                    <Line type="linear" dataKey="value" stroke="#002f6c" strokeWidth={1} dot={false} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CompletedArticlesChart;
