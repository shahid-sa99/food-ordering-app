import { useEffect, useState } from "react";
import { resList } from "../common/mockData";
import RestuarantCard from "./RestuarantCard";
const Body = () => {
  const [restuarantList, setRestuarantList] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://cors-anywhere.herokuapp.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // console.log(data);
  };

  console.log("body rendered");
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <button
        className="filter-res-btn"
        onClick={() => {
          const filteredList = restuarantList.filter(
            (res) => res.data.rating > 4.5
          );
          setRestuarantList(filteredList);
        }}
      >
        Filter restuarants
      </button>
      <div className="res-container">
        {restuarantList.map((restuarant) => (
          <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
