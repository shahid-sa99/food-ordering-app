import { useEffect, useState } from "react";
import { resList } from "../common/mockData";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredRestuarantList, setFilteredRestuarantList] = useState([]);
  const [searchText, setSearchext] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.96340%26lng%3D77.58550%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );
    const restuarants = await data.json();
    setRestuarantList(
      restuarants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestuarantList(
      restuarants?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restuarantList.length === 0 ? (
    <Shimmer />
  ) : (
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
              setFilteredRestuarantList(filteredList);
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
