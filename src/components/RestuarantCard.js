import { CDN_URL } from "../common/constants";
import { useNavigate } from "react-router-dom";

const RestuarantCard = (props) => {
  const navigate = useNavigate();
  const { resData } = props;
  const {id, name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData.info;
  return (
    <div
      onClick={() => {
        navigate(`/restuarant/${id}`)
      }}
      className="res-card"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="res-logo"
        alt="res-image"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestuarantCard;
