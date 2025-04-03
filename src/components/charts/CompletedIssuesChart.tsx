import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@mui/material";

const data = [
    { name: "Jan", Nature: 3, BHP: 1 },
    { name: "Feb", Nature: 2, BHP: 2 },
    { name: "Mar", Nature: 2, BHP: 3 },
];

const COLORS = {
    Nature: "#0070B0",
    BHP: "#94A3B8", // Grey for BHP
};

const CustomLegend = () => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "10px"
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                    style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: COLORS.Nature,
                        marginRight: 5
                    }}
                    aria-hidden="true"
                ></span>
                <span style={{ fontSize: 14, color: "#002F6C" }}>Nature</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                    style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: COLORS.BHP,
                        marginRight: 5
                    }}
                    aria-hidden="true"
                ></span>
                <span style={{ fontSize: 14, color: "#002F6C", fontWeight: 400 }}>BHP</span>
            </div>
        </div>
    );
};

const CompletedIssuesChart = () => {
    return (
        <Card
            style={{
                width: 280,
                padding: "10px",
                borderRadius: "8px",
                textAlign: "center",
                flexGrow: "1",
                border: "1px solid #94A3B8",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)"
            }}
            role="region"
            aria-labelledby="chart-title"
        >
            <p
                id="chart-title"
                className="title-style"
                style={{ marginLeft: "10px", textAlign: "left", marginBottom: "20px" }}
            >
                Completed Issues
            </p>

            <ResponsiveContainer width="100%" height={200} style={{ position: "relative", left: "-60px" }}>
                <BarChart
                    data={data}
                    barCategoryGap={25}
                    barSize={24}
                    margin={{ top: 10, right: 10, left: 30, bottom: 5 }}
                    role="img"
                    aria-label="Bar chart showing completed issues by month"
                >
                    <desc>
                        This bar chart shows the number of completed issues for Nature and BHP from January to March.
                    </desc>

                    <XAxis
                        tickLine={false}
                        dataKey="name"
                        tick={{ fontSize: 14, fill: "#002F6C" }}
                        aria-hidden="true"
                    />
                    <YAxis
                        tickLine={false}
                        tick={{ fontSize: 14, fill: "#002F6C" }}
                        domain={[0, 5]}
                        ticks={[1, 2, 3, 4, 5]}
                        aria-hidden="true"
                    />
                    <Tooltip />
                    <Bar dataKey="Nature" stackId="a" fill={COLORS.Nature} />
                    <Bar dataKey="BHP" stackId="a" fill={COLORS.BHP} />
                </BarChart>
            </ResponsiveContainer>

            <CustomLegend />
        </Card>
    );
};

export default CompletedIssuesChart;
