import { useEffect, useState } from "react";

const useRestuarantList = () => {
  const [restaurants, setRestuarants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/api/restaurants");

    const restuarants = await data.json();
    setRestuarants(
      restuarants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restaurants;
};

export default useRestuarantList;
