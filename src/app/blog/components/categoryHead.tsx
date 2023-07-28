import { Spacer } from "@nextui-org/react";
import React, { useState } from "react";

const CategoryHead = () => {
  const [selectCategory, setSelectCategory] = useState<number>(0);
  const cat = [
    "All",
    "News",
    "Entertaiment",
    "Technology",
    "Bussiness",
    "Travel",
  ];
  return (
    <div className="listCategory">
      {cat.map((item: string, index: number) => {
        return (
          <div
            key={index}
            onClick={()=>{
                setSelectCategory(index)
            }}
            className={`${index == selectCategory ? "activeCategory" : "category"}`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryHead;
