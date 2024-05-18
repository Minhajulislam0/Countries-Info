import { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisit = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h2>{name?.common}</h2>
      <img src={flags?.png} alt="flag" />
      <p>Total Population: {population}</p>
      <p>Total Land: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={handleVisit}>{visited ? "Visited" : "Going"}</button>
      {visited
        ? "I have visited this country."
        : "I want to visit this country."}
    </div>
  );
};

export default Country;
