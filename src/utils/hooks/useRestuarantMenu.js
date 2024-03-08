import { useEffect, useState } from "react";

const useRestuarantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26lat%3D12.96340%26lng%3D77.58550%26restaurantId%3D" +
        resId
    );
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};

export default useRestuarantMenu;