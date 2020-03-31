import "./Chart.scss";

import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

const colors = [
    "#8884d8",
    "#82ca9d",
    "#84d892",
    "#d8ae84",
    "#d88484",
    "#b184d8",
    "#84d7d8",
    "#cd84d8",
    "#a384d8",
    "#d8849a"
];

const defaultWidth = 335;
const defaultHeight = 300;

interface Props {
    title?: string;
    width?: number;
    height?: number;
    data: any;
    xAxisKey: string;
    yAxisKeys: yAxisKey[];
}

interface yAxisKey {
    key: string;
    color?: string;
}

export default function Chart(props: Props) {
    return <div className="chart">
        {props.title && <div className="chart-label">{props.title}</div>}
        <LineChart data={props.data}
            width={props.width ? props.width : defaultWidth}
            height={props.height ? props.height : defaultHeight}
            margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={props.xAxisKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            {props.yAxisKeys.map((yAxis, i) =>
                <Line type="monotone"
                    dot={false}
                    dataKey={yAxis.key}
                    key={yAxis.key}
                    stroke={yAxis.color ? yAxis.color : colors[i]}
                    fill={yAxis.color ? yAxis.color : colors[i]}
                    strokeWidth={2} />)}
        </LineChart>
    </div>
}