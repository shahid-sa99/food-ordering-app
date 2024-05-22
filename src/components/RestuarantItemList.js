import { useState } from "react";
import { CDN_URL } from "../common/constants";
import { useDispatch } from "react-redux";
import { adddItem } from "../utils/store/cartSlice";

function RestuarantItemList({ items }) {
  const dispatch = useDispatch();

  const addItemClickHandler = (item) => {
    dispatch(adddItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="flex  justify-between border-b-[1px] border-gray-400 p-6  "
          >
            <div className="flex flex-col text-left w-8/12 ">
              <div className="   font-bold  ">{item?.card?.info?.name}</div>
              <div className="   font-semibold  ">
                Rs.{item?.card?.info?.price / 100}
              </div>
              <div className="pt-2 text-sm ">
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="w-4/12 flex  justify-end ">
              <div className="relative">
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-[160px] h-[150px] rounded-lg "
                ></img>
                <span
                  onClick={() => {
                    addItemClickHandler(item);
                  }}
                  className="w-[120px] h-[40px] flex items-center m-auto px-10 border-[1px] -bottom-3 left-[22px] font-bold text-xl absolute bg-white border-gray-500 text-green-300 rounded-lg "
                >
                  Add
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RestuarantItemList;
