export interface Dictionary<T> {
    [key: string]: T;
}

export interface CountryRegion {
    provinceState: string;
    countryRegion: string;
    lastUpdate: number;
    lat: number;
    long: number;
    confirmed: number;
    recovered: number;
    deaths: number;
    active: number;
    admin2: string;
    fips: string;
    combinedKey: string;
    iso2: string;
    iso3: string;
}

export interface WorldDailySummary {
    totalConfirmed: number;
    mainlandChina: number;
    otherLocations: number;
    deltaConfirmed: number;
    totalRecovered: number;
    confirmed: {
        total: number;
        china: number;
        outsideChina: number
    };
    deltaConfirmedDetail: {
        total: number;
        china: number;
        outsideChina: number
    };
    deaths: {
        total: number;
        china: number;
        outsideChina:number
    };
    recovered: {
        total: number;
        china: number;
        outsideChina: number
    };
    active: number;
    deltaRecovered: number;
    incidentRate: number;
    peopleTested: number;
    reportDate: string;
}

export interface DailySummary {
    reportDate: number;
    mainlandChina: number;
    otherLocations: number;
    totalConfirmed: number;
    totalRecovered: number; //////
    reportDateString: string;
    deltaConfirmed: number;
    deltaRecovered: number; ///
    objectid: number;
}

export interface DailySummaryCountryRegion {
    provinceState: string;
    countryRegion: string;
    lastUpdate: string;
    confirmed: string; //number??
    deaths: string;
    recovered: string;
}

export interface CountriesNames {
    countries: CountryName[];
}

interface CountryName {
    name: string;
    iso2: string;
    iso3: string;
}

export interface CountrySummary {
    confirmed: Value;
    recovered: Value;
    deaths: Value;
    lastUpdate: string;
}

export interface WorldSummary {
    confirmed: Value,
    recovered: Value,
    deaths: Value,
    dailySummary: string;
    dailyTimeSeries: Pattern;
    image: string;
    source: string;
    countries: string;
    countryDetail: Pattern,
    lastUpdate: string;
}

export interface ErrorMsg {
    error: {
        message: string;
    };
}

interface Pattern {
    pattern: string;
    example: string
}

interface Value {
    value: number;
    detail: string;
}