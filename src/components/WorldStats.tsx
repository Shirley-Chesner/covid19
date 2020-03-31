import React, { useEffect, useState } from "react";

import { useStats } from "../providers/useStats";
import useTopCountriesStats from "../providers/useTopCountriesStats";
import SummaryStatus from "./SummaryStats";
import { WorldSummary, WorldDailySummary } from "../utils/types";
import Chart from "../utils/Chart";
import LoadAnimation from "../utils/LoadAnimation";

const START_DATE = "3/1/2020";//"1/22/2020";

interface DailyWorldChart {
    date: string;
    confirmed: number;
    // recovered: number; api doesn't exist
    deaths: number;
}

export default function WorldStats() {
    const [topCountriesChartData, setTopCountriesChartData] = useState<any>([]);
    const [worldDailyChart, setWorldDailyChart] = useState<DailyWorldChart[]>();
    const { stats: worldStats } = useStats<WorldSummary>();
    const { stats: worldDailyStats } = useStats<WorldDailySummary[]>("daily");
    const { stats: topCountriesStats, names: countriesNames } = useTopCountriesStats(10, new Date(START_DATE));

    useEffect(() => {
        setTopCountriesChartData(Object.entries(topCountriesStats)
            .sort((first, second) => new Date(first[0]).getTime() - new Date(second[0]).getTime())
            .map(([date, countries]) => { return { date, ...countries } }));

    }, [topCountriesStats]);

    useEffect(() => {
        if (worldDailyStats) {
            setWorldDailyChart(worldDailyStats.map(stat => {
                return {
                    date: stat.reportDate,
                    confirmed: stat.totalConfirmed,
                    deaths: stat.deaths.total
                }
            }).sort((first, second) => new Date(first.date).getTime() - new Date(second.date).getTime()));
        }
    }, [worldDailyStats])

    return <>
        {!worldStats && <LoadAnimation />}
        {worldStats && <div>
            <SummaryStatus confirmed={worldStats.confirmed.value}
                recovered={worldStats.recovered.value}
                deaths={worldStats.deaths.value}
                title="World's Stats" />
        </div>}
        {worldDailyChart && <div className="charts-group">
            <Chart data={worldDailyChart} xAxisKey="date" title="Confirmed"
                yAxisKeys={[{ key: "confirmed" }]} width={450} />
            <Chart data={worldDailyChart} xAxisKey="date" title="Deaths"
                yAxisKeys={[{ key: "deaths", color: "red" }]} width={450}/>
        </div>}
        {topCountriesChartData && countriesNames &&
            <Chart data={topCountriesChartData} xAxisKey="date" title="Top countries"
                yAxisKeys={countriesNames.map(_ => { return { key: _ } })} width={1000} height={450} />}
    </>
}