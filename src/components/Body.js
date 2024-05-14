import { useContext, useEffect, useState } from "react";
import { resList } from "../common/mockData";
import RestuarantCard, { restuarantCardHOC } from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestuarantList from "../utils/hooks/useRestuarantList";
import UserContext from "../utils/hooks/userContext";

const Body = () => {
  const [restuarantList, setRestuarantList] = useState([]);
  const [filteredRestuarantList, setFilteredRestuarantList] = useState([]);
  const [searchText, setSearchext] = useState("");
  const restuarants = useRestuarantList();
  const RestuarantCardPromoted = restuarantCardHOC(RestuarantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    setFilteredRestuarantList(restuarants);
    setRestuarantList(restuarants);
  }, [restuarants]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like there is some connectivity issue, Please check your internet
      </h1>
    );
  }

  return restuarantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input
            className=" border border-black border-solid m-4 "
            value={searchText}
            onChange={(e) => {
              setSearchext(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-lg  m-2"
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
        <div>
          <button
            className="bg-gray-100 rounded-lg px-4 py-2 mt-2 "
            onClick={() => {
              const filteredList = filteredRestuarantList.filter(
                (res) => res.info.avgRating >= 4.5
              );
              setFilteredRestuarantList(filteredList);
            }}
          >
            Filter restuarants
          </button>
          <span className="pl-2">userName:</span>

          <input
            className=" border border-black border-solid m-4 "
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarantList.map((restuarant) => {
          return restuarant.info.avgRating >= 4.4 ? (
            <RestuarantCardPromoted
              key={restuarant.info.id}
              resData={restuarant}
            />
          ) : (
            <RestuarantCard key={restuarant.info.id} resData={restuarant} />
          );

          // <RestuarantCard key={restuarant.info.id} resData={restuarant} />
        })}
      </div>
    </div>
  );
};

export default Body;
