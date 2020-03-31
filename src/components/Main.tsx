import "./Main.scss";

import React from "react";

import WorldStats from "./WorldStats";
import CountryStats from "./CountryStats";

export default function Main() {
    return <div className="main">
        <div className="title">Covid19 Statistics</div>
        <div className="container">
            <WorldStats />
        </div>
        <div className="container">
            <CountryStats />
        </div>
    </div>
}