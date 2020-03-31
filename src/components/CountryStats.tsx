import "./CountryStats.scss";

import React, { useState, useEffect } from "react";

import { useStats } from "../providers/useStats";
import { useDailyStats } from "../providers/useDailyStats";
import { CountrySummary } from "../utils/types";
import CountryPicker from "./CountryPicker";
import SummaryStatus from "./SummaryStats";
import LoadAnimation from "../utils/LoadAnimation";
import Chart from "../utils/Chart";
import BarChart from "../utils/BarChart";

const START_DATE = "1/22/2020";

interface Chart {
    date: string;
    confirmed: number;
    deaths: number;
    recovered: number;
}

interface DailyDelta {
    date: string;
    confirmedDelta: number;
    deathsDelta: number;
    recoveredDelta: number;
}

export default function CountryStats() {
    const [country, setCountry] = useState<string>("IL");
    const [countryName, setCountryName] = useState<string>("Israel");
    const [dailyChartData, setDailyChartData] = useState<Chart[] | undefined>();
    const [deltaChart, setDeltaChart] = useState<DailyDelta[]>();
    const { stats: countryStats, error: countryError } = useStats<CountrySummary>(`countries/${country}`);
    const dailyStats = useDailyStats(new Date(START_DATE));

    const yAxisKeys = [
        { key: "confirmed" },
        { key: "recovered", color: "green" },
        { key: "deaths", color: "red" }
    ];

    const barKeys = [
        { key: "confirmedDelta" },
        { key: "recoveredDelta", color: "green" },
        { key: "deathsDelta", color: "red" }
    ];

    useEffect(() => {
        if (dailyStats && dailyStats[countryName] && Object.entries(dailyStats[countryName]).length > 0)
            setDailyChartData(Object.entries(dailyStats[countryName])
                .map(([date, stat]) => {
                    return { date, ...stat };
                }).sort((first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()));
    }, [countryName, dailyStats]);

    useEffect(() => {
        if (dailyChartData) {
            const delta: DailyDelta[] = [];
            const firstDayDelta: Chart = {
                date: "",
                confirmed: 0,
                deaths: 0,
                recovered: 0,
            }

            dailyChartData.reduce((prevDay, currDay) => {
                delta.push({
                    date: currDay.date,
                    confirmedDelta: Math.abs(currDay.confirmed - prevDay.confirmed),
                    deathsDelta: Math.abs(currDay.deaths - prevDay.deaths),
                    recoveredDelta: Math.abs(currDay.recovered - prevDay.recovered),
                })
                return currDay;
            }, firstDayDelta);

            setDeltaChart(delta);
        }
    }, [dailyChartData])

    return <>
        {!countryStats && <LoadAnimation />}
        {countryStats && <div>
            {!countryError && <SummaryStatus confirmed={countryStats.confirmed.value}
                deaths={countryStats.deaths.value}
                recovered={countryStats.recovered.value}
                title={countryName + "'s Stats"} />}
            {countryError && <div>Could not find data for {countryName} at the moment...</div>}
        </div>}
        <CountryPicker setCountry={setCountry} setCountryName={setCountryName} country={country} />

        {dailyStats && dailyChartData && <>
            <Chart data={dailyChartData} xAxisKey="date" yAxisKeys={yAxisKeys} width={1000} />
            <div className="charts-group">
                {yAxisKeys.map(key =>
                    <div key={key.key}><Chart data={dailyChartData} xAxisKey="date" yAxisKeys={[key]} title={key.key} /></div>)}
            </div>
            <div className="charts-group">
                {barKeys.map(key =>
                    <div key={key.key}><BarChart data={deltaChart} xAxisKey="date" barKeys={[key]} width={335} height={300} /></div>)}
            </div>
        </>}
    </>
}