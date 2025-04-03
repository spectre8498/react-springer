import React from "react";
import { Card } from "@mui/material";
import { PieChart, Pie, Cell, Legend } from "recharts";

const manuscriptStatusData = [
    { name: "To-do", value: 25, color: "#00324E" },
    { name: "In progress", value: 35, color: "#0070B0" },
    { name: "On hold", value: 20, color: "#F8FAFC", border: "#000000" },
    { name: "Completed", value: 20, color: "#94A3B8" },
];

// Custom Legend Renderer
const renderLegend = (props) => {
    const { payload } = props;
    return (
        <ul style={{
            listStyle: "none",
            padding: 0,
            marginTop: 10,
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "repeat(2, auto)",
            gap: "5px 20px",
            justifyContent: "center",
        }}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span
                        style={{
                            display: "inline-block",
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            backgroundColor: entry.color === "#F8FAFC" ? "transparent" : entry.color,
                            border: entry.color === "#F8FAFC" ? `2px solid ${entry.payload.border}` : "none",
                            marginRight: 5,
                        }}
                        aria-hidden="true"
                    ></span>
                    <span style={{ fontSize: 14, color: "#002F6C" }}>{entry.value}</span>
                </li>
            ))}
        </ul>
    );
};

const ManuscriptStatusChart = () => {
    return (
        <Card 
            style={{ 
                width: 280, 
                padding: "15px", 
                borderRadius: "8px",
                display: "flex", 
                flexDirection: "column",
                border: "1px solid #94A3B8",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)"
            }}
            role="region"
            aria-labelledby="chart-title"
        >  
            <p 
                id="chart-title" 
                className="title-style" 
                style={{ color: "#002f6c", marginBottom: "10px" }}
            >
                Manuscript Status
            </p>
            
            {/* Centered PieChart */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> 
                <PieChart width={210} height={210} role="img" aria-label="Pie chart representing manuscript status">
                    <desc>
                        This pie chart shows the manuscript status with sections for To-do, In Progress, On Hold, and Completed.
                    </desc>
                    <Pie data={manuscriptStatusData} dataKey="value" outerRadius={70} cx="50%" cy="50%">
                        {manuscriptStatusData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} aria-hidden="true" />
                        ))}
                    </Pie>
                    <Legend content={renderLegend} />
                </PieChart>
            </div>
        </Card>
    );
};

export default ManuscriptStatusChart;
