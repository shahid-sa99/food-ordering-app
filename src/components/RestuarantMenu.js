import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/hooks/useRestuarantMenu";
import RestuarantCategory from "./RestuarantCategory";
import { useState } from "react";

const RestuarantMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCategoryClickHandler = () => {
    setActiveIndex(!activeIndex);
  };
  const { resId } = useParams();

  const resInfo = useRestuarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemCategories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) => {
        return (
          item.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  

  return (
    <div className=" text-center ">
      <h1 className="font-bold my-6  text-2xp">{name}</h1>
      <h4 className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </h4>

      {itemCategories.map((category, index) => {
        return (
          <RestuarantCategory
            key={index}
            data={category?.card?.card}
            activeIndex={activeIndex}
            index={index}
            setActiveIndex={() => {
              if (activeIndex !== index) {
                setActiveIndex(index);
              } else {
                setActiveIndex(-1);
              }
            }}
          />
        );
      })}
    </div>
  );
};

export default RestuarantMenu;
