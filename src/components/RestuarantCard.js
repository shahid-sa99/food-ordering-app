const RestuarantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,rating,timeToDelivery,costForTwo} = resData.data;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img className="res-logo" alt="res-image" src={resData.data.image} />
        <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4> 
         <h4>{rating} stars</h4>
        <h4>{timeToDelivery} minutes</h4>
        <h4>{costForTwo / 100} for two</h4>
      </div>
    );
  };


export default RestuarantCard;  