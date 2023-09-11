import axios from "axios";

import React, { useEffect, useState } from "react";

const MonsterServices = () => {
  const [country, setCountry] = useState("");
  const getGeoLocation = async () => {
    try {
      const response = await axios.get("https://ipinfo.io/json", {});
      const { country } = response.data;
      setCountry(country);
    } catch (error) {
      console.error("Failed to make request: ", error.message);
    }

    return country;
  };
  return {
    getGeoLocation,
  };
};

export default MonsterServices;
