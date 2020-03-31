import { useState, useEffect } from "react";

import { ErrorMsg } from "../utils/types";
import { get } from "./data";

interface Stats<T> {
    stats: T | undefined;
    error: Error | string | null;
}

export function useStats<T>(url: string = ""): Stats<T> {
    const [stats, setStats] = useState<T>();
    const [error, setError] = useState<Error | string | null>(null);

    useEffect(() => {
        async function fetchStats() {
            try {
                const data = await get<T>(url);

                if (isError(data)) setError(data.error.message);
                else setStats(data);
            } catch (e) {
                setError(e);
            }
        }
        setError(null);
        fetchStats();
    }, [url]);

    return {
        stats,
        error,
    };
}

function isError(object: any): object is ErrorMsg {
    return object.error !== undefined;
}

// function changeDateFormat()