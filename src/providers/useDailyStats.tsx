import { useEffect, useState } from "react";

import { Dictionary, DailySummaryCountryRegion } from "../utils/types";
import { get } from "./data";

interface Stat {
    confirmed: number;
    recovered: number;
    deaths: number;
}

export function useDailyStats(startDate: Date) {
    const [allDailyStats, setAllDailyStats] = useState<Dictionary<Dictionary<Stat>>>({});

    useEffect(() => {
        async function fetchDailyStats() {
            const dates = getDates(startDate, getYesterday());

            const stats: Dictionary<Dictionary<Stat>> = {};

            const results = dates.map(date => date.toLocaleDateString().replace(/\//g, '-')).map(async (date) => {
                const data = await get<DailySummaryCountryRegion[]>(`daily/${date}`);

                data.forEach(countryRegion => {
                    const confirmedNumber = countryRegion.confirmed !== "" ? parseInt(countryRegion.confirmed) : 0;
                    const recoverdNumber = countryRegion.recovered !== "" ? parseInt(countryRegion.recovered) : 0;
                    const deathsNumber = countryRegion.deaths !== "" ? parseInt(countryRegion.deaths) : 0;
                    if (countryRegion.countryRegion === "Mainland China")
                        countryRegion.countryRegion = "China";

                    if (!stats[countryRegion.countryRegion])
                        stats[countryRegion.countryRegion] = {
                            [date]: {
                                confirmed: confirmedNumber,
                                recovered: recoverdNumber,
                                deaths: deathsNumber,
                            }
                        };
                    else if (stats[countryRegion.countryRegion][date]) { //change it
                        stats[countryRegion.countryRegion][date].confirmed += confirmedNumber;
                        stats[countryRegion.countryRegion][date].recovered += recoverdNumber;
                        stats[countryRegion.countryRegion][date].deaths += deathsNumber;
                    }
                    else {
                        stats[countryRegion.countryRegion][date] = {
                            confirmed: confirmedNumber,
                            recovered: recoverdNumber,
                            deaths: deathsNumber,
                        }
                    }
                });
            });

            await Promise.all(results);

            setAllDailyStats(stats);
        }

        fetchDailyStats();
    }, []);

    return allDailyStats;
}


function getDates(start: Date, end: Date) {
    const dates = [];
    let current = new Date(start);

    while (current < end) {
        dates.push(new Date(current));
        current.setDate(current.getDate() + 1);
    }

    return dates;
};

function getYesterday(): Date {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date;
}