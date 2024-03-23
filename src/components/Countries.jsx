import React from "react";
import { v4 as uuidv4 } from "uuid";

import Country from "./Country";
import { useCountriesContext } from "../hooks/contexts/useCountriesContext";

const Countries = () => {
  const { data } = useCountriesContext();

  return (
    <div id="countries">
      {data.map((country) => {
        return (
          <Country
            key={country.id}
            name={country.name.common}
            src={country.flags.png}
            id={country.id}
          />
        );
      })}
    </div>
  );
};

export default Countries;
