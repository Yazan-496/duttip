'use client'
import {useEffect, useState} from "react";
import Slider from 'rc-slider';
import Tree from "./Tree"
import {ArrowSvgUp} from "../../core/svgs"

const FilterDashboard = ({categoryProps}) => {
    const [collapse, setCollapse] = useState({all: false, category: false, price: false})
    const [isDropdownVisible, setIsDropdownVisible] = useState(true)
    const [priceRange, setPriceRange] = useState({min: 0, max: 0})
    const [categories, setCategories] = useState(categoryProps)
    const handleReset = () => {
        setPriceRange({min: 0, max: 0})
        setCategories([])
        setTimeout(() => {
            setCategories(categoryProps)
        }, 100)
    }
    const handleSetRange = (data) => {
        setPriceRange({min: data[0], max: data[1]})
    }
    const handleIncreaseRange1 = (step) => {
        // if (priceRange?.min >= step) {
            setPriceRange((prev) => ({
                ...prev, min: prev?.min + step
            }));
        // }
    }
    const handleDecreaseRange1 = (step) => {
        if (priceRange?.min >= step) {
            setPriceRange((prev) => ({
                ...prev, min: prev?.min - step
            }));
        }
    }
    const handleIncreaseRange2 = (step) => {
        if (priceRange?.max >= step) {
            setPriceRange((prev) => ({
                ...prev, max: prev?.max + step
            }));
        }
    }
    const handleDecreaseRange2 = (step) => {
        if (priceRange?.max >= step) {
            setPriceRange((prev) => ({
                ...prev, max: prev?.max - step
            }));
        }
    }
    useEffect(() => {
        console.log(collapse, "collapse")
    }, [collapse]);
    return (<div
        className="rounded-[10px] max-h-[300px] lg:max-h-[1000px] drop-shadow-0x3x6 w-auto h-full relative bg-white">
        <div
            className="p-2 flex w-full relative  font-bold md:p-5 border-b-[1px] border-gray-200 text-lg md:text-3xl justify-between items-center">
            Filters
            <button
                className="p-5 flex gap-x-2 absolute right-3 justify-center items-center"
                onClick={() => {
                    setIsDropdownVisible(!isDropdownVisible)
                    setCollapse((prev) => ({
                        ...prev, all: !prev?.all
                    }));
                }}
            >
                <ArrowSvgUp rotate={collapse?.all}/>
            </button>
        </div>
        <div
            className={`w-full overflow-auto border-gray-200 
                transition-[height,padding] duration-[0.7s,1s] opacity-1
                 ${isDropdownVisible ? " h-[200px] lg:h-full pt-5 md:p-10" : " p-0 h-0"}`}>
            <div className="w-full border-b-[2px] pb-2 bg-white">
                <div className="flex px-2 md:px-0 w-full flex-col gap-3">
                    <div className="w-full border-b-[1px]">
                        <div className="flex items-center justify-between">
                            <p className="font-bold">Categories</p>
                            <button
                                className="p-5 flex gap-x-2 justify-center items-center"
                                onClick={() => {
                                    setCollapse((prev) => ({
                                        ...prev, category: !prev?.category
                                    }));
                                }}
                            >
                                <ArrowSvgUp rotate={collapse?.category}/>
                            </button>
                        </div>
                        <div
                            className={`transition-height duration-300 overflow-auto ${collapse?.category ? "h-0" : "h-[100px]"}`}>
                            {categories.map((category, index) => (
                                <Tree parentRefId={0} key={category.id} data={category}/>))}
                        </div>
                    </div>
                    <div className="w-full border-b-[1px] mb-2">
                        <div className="flex items-center justify-between ">
                            <p className="font-bold">Price</p>
                            <button
                                className="p-5 flex gap-x-2 justify-center items-center"
                                onClick={() => {
                                    setCollapse((prev) => ({
                                        ...prev, price: !prev?.price
                                    }));
                                }}
                            >
                                <ArrowSvgUp rotate={collapse?.price}/>
                            </button>
                        </div>
                        <div
                            className={`pl-2 transition-height overflow-x-hidden duration-300 overflow-y-auto 
                                ${collapse?.price ? "h-0" : "h-[100px]"}`}>
                            <Slider
                                value={[priceRange.min, priceRange.max]}
                                step={10}
                                trackStyle={{backgroundColor: "#d52a2c"}}
                                handleStyle={{
                                    borderColor: "#d52a2c", backgroundColor: "white"
                                }}
                                min={0} max={2000} onChange={handleSetRange} range/>
                            <div className="flex justify-between px-4">
                                <p> min: 0$</p>
                                <p> max: 2000$</p>
                            </div>
                            <div className="flex items-center gap-2 justify-center p-2">
                                <button
                                    onClick={() => handleDecreaseRange1(10)}
                                    className="flex justify-center rounded-[10px] focus:scale-95 text-[#d52a2c] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px]"
                                >
                                    <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                        -
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleIncreaseRange1(10)}
                                    className="flex justify-center rounded-[10px] focus:scale-95 text-[#d52a2c] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px]"
                                >
                                    <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                        +
                                    </div>
                                </button>
                                <div className="flex w-full items-center justify-center gap-4 px-4">
                                    <p> {priceRange.min}$</p>
                                    <p> to</p>
                                    <p> {priceRange.max}$</p>
                                </div>
                                <button
                                    onClick={() => handleDecreaseRange2(10)}
                                    className="flex justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
                                >
                                    <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                        -
                                    </div>
                                </button>
                                <button
                                    onClick={() => handleIncreaseRange2(10)}
                                    className="flex justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
                                >
                                    <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                                        +
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 justify-center p-2">
                    <button
                        onClick={handleReset}
                        className="flex justify-center rounded-[10px] focus:scale-95 text-[#686868] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px] "
                    >
                        <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                            Search
                        </div>
                    </button>
                    <button
                        onClick={handleReset}
                        className="flex justify-center rounded-[10px] focus:scale-95 text-[#d52a2c] items-center overflow-hidden
                        group w-full h-10 self-center duration-300 shadow-[1px_1px_10px_rgba(0,0,0,0.25)]
                        hover:shadow-none hover:border-[1px]"
                    >
                        <div className="group-hover:font-bold font-sf_pro_rounded_medium duration-300">
                            Reset
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}
export default FilterDashboard