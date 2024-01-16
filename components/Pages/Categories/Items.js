import {SvgCheckbox} from "core/svgs";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";
import Product from "../../Common/Product";

const SortBy = [
    {name: "Latest", value: "latest"},
    {name: "Oldest", value: "oldest"},
    {name: "Low To High", value: "low-high"},
    {name: "High To Low", value: "high-low"},
    {name: "A To Z", value: "a-z"},
    {name: "Z To A", value: "z-a"},
];
const products = [1, 1, 11, 1, 1, 11, 1, 1, 1, 11, 1, 1, 1, 1, 1, 11, 1, 1,]
const Items = () => {
    const [sortByValue, setSortByValue] = useState("");
    const [checkFilters, setCheckFilters] = useState({
        instant: false,
        withImage: false,
        premium: false,
        verified: false,
    });

    function handleSortByChange(event) {
        const selectedValue = event.target.value;
        setSortByValue(selectedValue);
        // dispatch({ type: "Set_SortBy", payload: { sortBy: selectedValue } });
    }

    return (
        <div className="px-0 md:px-0 flex flex-col rounded-large bg-[#F5F5F5] w-full justify-start h-full">
            <div
                className="p-3 pb-5 drop-shadow-0x3x6 bg-white rounded-[10px] border-b-[2px] w-full flex flex-col items-center justify-start ">
                <p className="text-lg font-bold pb-2">Category Name</p>
                <p className="text-lg font-bold pb-2">Products count</p>
                <div className="flex flex-row gap-2 justify-between w-full items-center">
                    <div
                        onClick={() => {
                            setCheckFilters((prev) => ({
                                ...prev,
                                instant: !prev.instant
                            }))
                        }}
                        className="cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.25)] hover:scale-95 duration-300
                         flex items-center bg-white rounded-full text-sm px-2 py-1
                        md:text-md md:px-4 md:py-2 shadow-lg justify-start gap-x-1">
                        <SvgCheckbox click={checkFilters.instant}/>
                        <p>Instant Order</p>
                    </div>
                    <div
                        onClick={() => {
                            setCheckFilters((prev) => ({
                                ...prev,
                                premium: !prev.premium
                            }))
                        }}
                        className="cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.25)] hover:scale-95 duration-300
                         flex items-center bg-white rounded-full text-sm px-2 py-1 md:text-md md:px-4 md:py-2 shadow-lg justify-start gap-x-1">
                        <SvgCheckbox click={checkFilters.premium}/>
                        <p>Premium Member Only</p>
                    </div>
                    <div
                        onClick={() => {
                            setCheckFilters((prev) => ({
                                ...prev,
                                withImage: !prev.withImage
                            }))
                        }}
                        className="cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.25)] hover:scale-95 duration-300
                         flex items-center bg-white rounded-full text-sm px-2 py-1 md:text-md md:px-4 md:py-2 shadow-lg justify-start gap-x-1">
                        <SvgCheckbox click={checkFilters.withImage}/>
                        <p>With images only</p>
                    </div>
                    <div
                        onClick={() => {
                            setCheckFilters((prev) => ({
                                ...prev,
                                verified: !prev.verified
                            }))
                        }}
                        className="cursor-pointer hover:shadow-[1px_1px_10px_rgba(0,0,0,0.25)] hover:scale-95 duration-300
                         flex text-sm px-2 py-1 md:text-md md:px-4 md:py-2 items-center bg-white rounded-full shadow-lg justify-start gap-x-1">
                        <SvgCheckbox click={checkFilters.verified}/>
                        <p>Verified members</p>
                    </div>
                </div>
                <div className="flex justify-center w-full m-4 items-center">
                    <FormControl
                        className="bg-white"
                        slotProps={{thumb: {className: 'bg-white shadow-lg'}}}
                        size="small" sx={{m: 1}}>
                        <InputLabel color="error" id="SortBy-select-label">Sort By</InputLabel>
                        <Select sx={{minWidth: 180}} color="error"
                                className="w-[100%]"
                                labelId="SortBy-select-label"
                                id="SortBy-select-label"
                                value={sortByValue}
                                label={"Sort By"}
                                onChange={handleSortByChange}
                        >
                            {SortBy.map((option, i) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="py-5 drop-shadow-0x3x6">
                <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
                    {
                        products.map((one, index) => {
                            return <Product isDetail={true} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Items