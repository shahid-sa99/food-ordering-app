import { useState } from "react";
import { resList } from "../common/mockData";
import RestuarantCard from "./RestuarantCard";
const Body = () => {
  const [restuarantList, setRestuarantList] = useState(resList);
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
        Filtered restuarants
      </button>
      <div className="res-container">
        {restuarantList.map((restuarant) => (
          <RestuarantCard resData={restuarant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
