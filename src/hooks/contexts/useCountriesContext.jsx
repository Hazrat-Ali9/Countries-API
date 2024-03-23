import { useContext } from "react";
import { CountriesContext } from "./CountriesContext";

export const useCountriesContext = () => {
  return useContext(CountriesContext);
};
