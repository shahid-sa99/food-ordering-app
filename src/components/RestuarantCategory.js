import React, { useState } from "react";
import RestuarantItemList from "./RestuarantItemList";

function RestuarantCategory({ data, activeIndex, index, setActiveIndex }) {
  
  return (
    <div>
      <div className="w-6/12 mx-auto flex flex-col  bg-gray-50 p-4 shadow-lg cursor-pointer m-4">
        <div onClick={setActiveIndex} className="flex flex-row justify-between">
          <span className="font-bold text-lg">
            {data?.title}({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {activeIndex === index && (
          <RestuarantItemList items={data?.itemCards} />
        )}
      </div>
    </div>
  );
}

export default RestuarantCategory;
