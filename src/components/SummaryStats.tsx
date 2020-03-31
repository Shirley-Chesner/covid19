import "./SummaryStats.scss";

import React from "react";

interface Props {
    title?: string;
    confirmed: number;
    recovered: number;
    deaths: number;
}

export default function SummaryStatus(props: Props) {
    return <div className="stats-summary">
        {props.title && <div className="stats-title">{props.title}</div>}
        <div className="stats-group">
            <div className="stat">
                <div className="stat-label">confirmed</div>
                <div className="stat-number">{props.confirmed}</div>
            </div>
            <div className="stat recoverd">
                <div className="stat-label">recovered</div>
                <div className="stat-number">{props.recovered}</div>
            </div>
            <div className="stat deaths">
                <div className="stat-label">deaths</div>
                <div className="stat-number">{props.deaths}</div>
            </div>
        </div>
    </div>
}