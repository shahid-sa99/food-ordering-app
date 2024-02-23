import { useEffect, useState } from "react";
import { resList } from "../common/mockData";
import RestuarantCard from "./RestuarantCard";
const Body = () => {
  const [restuarantList, setRestuarantList] = useState(resList);
  const [filteredRestuarantList,setFilteredRestuarantList] = useState(resList);
  const [searchText, setSearchext] = useState("");

  useEffect(() => {}, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://cors-anywhere.herokuapp.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    
  };

  return (
    <div className="body">
      <div className="filter-ctnr">
        <div className="search">
          <input
            value={searchText}
            onChange={(e) => {
              setSearchext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = restuarantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarantList(filteredList)
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-res-btn"
          onClick={() => {
            const filteredList = filteredRestuarantList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestuarantList(filteredList);
          }}
        >
          Filter restuarants
        </button>
      </div>
      <div className="res-container">
        {filteredRestuarantList.map((restuarant) => (
          <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
