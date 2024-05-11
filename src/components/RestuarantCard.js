import { CDN_URL } from "../common/constants";
import { useNavigate } from "react-router-dom";

const RestuarantCard = (props) => {
  const navigate = useNavigate();
  const { resData } = props;
  const { id, name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div
      onClick={() => {
        navigate(`/restuarant/${id}`);
      }}
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer "
    >
      <img
        className=" rounded-lg h-[134px] w-[200px]  "
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" font-bold py-2 text-lg ">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestuarantCard;
