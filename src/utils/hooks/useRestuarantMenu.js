import { useEffect, useState } from "react";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `http://localhost:4000/api/menu?restuatantId=${resId}`
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestuarantMenu;
