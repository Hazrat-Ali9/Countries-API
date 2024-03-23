import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { useCountriesContext } from "../hooks/contexts/useCountriesContext";

const Country = ({ name, src, id }) => {
  const { data, setData } = useCountriesContext();
  const deleteCountry = () => {
    const filterdCountry = data.filter((country) => country.id !== id);
    setData(filterdCountry);
  };
  return (
    <div id="country">
      <img src={src} alt="img" />
      <div>
        <h2>Name : {name}</h2>
        <FaDeleteLeft
          id="del"
          onClick={() => {
            deleteCountry();
          }}
        />
      </div>
    </div>
  );
};

export default Country;
