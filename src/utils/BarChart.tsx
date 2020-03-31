import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';

interface Props {
    title?: string;
    width: number;
    height: number;
    data: any;
    xAxisKey: string;
    barKeys: BarKey[];
}

interface BarKey {
    key: string;
    color?: string;
}

export default function Chart(props: Props) {
    return <BarChart width={props.width} height={props.height} data={props.data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={props.xAxisKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {props.barKeys.map(key => <Bar dataKey={key.key} fill={key.color ? key.color : "#8884d8"} />)}
    </BarChart>
}
