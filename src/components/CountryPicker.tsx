import "./CountryPicker.scss";

import React from "react";

import { useStats } from "../providers/useStats";
import { CountriesNames } from "../utils/types";

interface Props {
    setCountry: (country: string) => void;
    setCountryName: (name: string) => void;
    country: string;
}

export default function CountryPicker(props: Props) {
    const { stats: countriesNames } = useStats<CountriesNames>("countries");

    function onCountryChange(e: React.FormEvent<HTMLSelectElement>) {
        const country = e.currentTarget.value;

        props.setCountry(country);
        props.setCountryName(findFullCountryName(country));
    }

    function findFullCountryName(countryIso2: string) {
        if (countriesNames) {
            const result = countriesNames.countries.find(country => countryIso2 === country.iso2);
            console.log("result", result);
            if (result) return result.name;
        }

        return "cannot be found";
    }

    return <div className="input-group">
        <div className="input-label">Pick a country</div>
        <select className="input" onChange={onCountryChange} value={props.country}>
            {countriesNames && countriesNames.countries.map(country =>
                <option key={country.name} value={country.iso2}>
                    {country.name}
                </option>)}
        </select>
    </div>
}