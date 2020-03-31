import { useEffect, useState } from "react";

import { Dictionary, CountryRegion } from "../utils/types";
import { useDailyStats } from "./useDailyStats";
import { get } from "./data";

export default function useTopCountriesStats(maxCountries: number, startDate: Date) {
    const [topCountriesNames, setTopCountriesNames] = useState<string[]>([]);
    const [topCountriesStats, setTopCountriesStats] = useState<Dictionary<Dictionary<number>>>({});
    const allDailyStats = useDailyStats(startDate);

    useEffect(() => {
        async function fetchTopCountries() {
            const allCountries = await get<CountryRegion[]>("confirmed");

            const countries = allCountries
                .reduce((allCountries, region) => {
                    if (allCountries[region.countryRegion]) allCountries[region.countryRegion] += region.confirmed;
                    else allCountries[region.countryRegion] = region.confirmed;

                    return allCountries;
                }, {} as Dictionary<number>);

            setTopCountriesNames(Object.entries(countries)
                .sort((a, b) => b[1] - a[1])
                .slice(0, maxCountries)
                .map(([country, confirmed]) => country));
        }

        fetchTopCountries();
    }, [maxCountries]);

    useEffect(() => {
        const dailyStats: Dictionary<Dictionary<number>> = {};

        if (topCountriesNames && Object.keys(allDailyStats).length > 0) {
            topCountriesNames.map(country => { return { stats: allDailyStats[country], country } })
                .forEach(({ stats, country }) => {
                    // console.log("stats", stats, country, allDailyStats);
                    Object.entries(stats).forEach(([date, stat]) => {
                        if (dailyStats[date]) dailyStats[date][country] = stat.confirmed;
                        else dailyStats[date] = { [country]: stat.confirmed };
                    })

                })

            console.log("dailyStats", dailyStats);
            setTopCountriesStats(dailyStats);
        }

    }, [allDailyStats]);

    return {stats: topCountriesStats, names: topCountriesNames};
}