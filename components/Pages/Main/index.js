import React from "react";
import PhotoArea from "./PhotoArea";
import CategoriesSlider from "./CategoriesSlider";
import Products from "./Products";
import SliderComponent from "./Slider";

const Main = () => {
  return (
    <div className="flex w-full justify-center items-center flex-col gap-y-0">
      <div className="w-full">
        <PhotoArea />
        {/* <div className=""> */}
        <CategoriesSlider />
        {/* </div> */}
        <Products />
        <SliderComponent />
      </div>
    </div>
  );
};
export default Main;
