
const NavStore = () => {
    return (
        <div
            className="p-3 gap-4 pb-5 drop-shadow-0x3x6 bg-white rounded-[10px] border-b-[2px] w-full flex flex-col items-center justify-start ">
            <div className="flex items-center justify-start gap-4 w-full">
                <p className="text-sm md:text-lg lg:text-xl  font-bold">Australian Luxuries Pty Ltd</p>
                <p className="text-sm md:text-lg lg:text-xl ">Australia - Sydney</p>
                <p className="text-sm md:text-lg lg:text-xl ">Verified Members</p>
            </div>
            <div className="flex items-center justify-start gap-4 w-full">
                <p className="text-sm md:text-lg lg:text-xl flex font-bold">Member Since :
                    <p className="text-sm md:text-lg lg:text-xl font-medium"> 2017</p>
                </p>
                <p className="text-sm md:text-lg lg:text-xl flex font-bold">Headquater :<p
                    className="text-sm md:text-lg lg:text-xl font-medium"> Australia</p></p>
            </div>
            <div className="flex items-center justify-between gap-5 w-full">
                <p className="text-sm md:text-lg text-center p-2 md:p-3 rounded-[10px] shadow-lg font-bold text-[#9B9B9B] bg-[#F8F8F8]">Response
                    rate - 14%</p>
                <p className="text-sm md:text-lg text-center p-2 md:p-3 rounded-[10px] shadow-lg font-bold text-[#9B9B9B] bg-[#F8F8F8]">Response
                    time - +3 days</p>
                <p className="text-sm md:text-lg text-center p-2 md:p-3 rounded-[10px] shadow-lg font-bold text-[#9B9B9B] bg-[#F8F8F8]">Number
                    of Products 40</p>
            </div>
        </div>
    )
}
export default NavStore