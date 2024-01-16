import Image from "../../helpers/image";

const Product = ({key}) => {
    return (
        <div key={key} className="group bg-white w-[300px] h-[500px] relative overflow-hidden
         transition shadow-[2px_10px_15px_rgba(0,0,0,0.1)]
        duration-[0.5s] m-auto
         rounded-[10px_10px_10px_10px] scale-95
          hover:shadow-[5px_20px_30px_rgba(0,0,0,0.2)] hover:scale-100">
            <div className=" w-full h-4/5">
                <Image alt="product"
                       className="group-hover:scale-110 transition duration-1000 group group-hover:transform object-cover"
                       src={"/images/test2.jpg"} fill/>
            </div>
            <i className="absolute z-10 top-0 left-0 text-3xl text-black group-hover:hidden">done</i>

            <div className=" w-[200%] h-1/5 transition-transform duration-[0.5s] -translate-x-2/4">
                <div className=" h-full w-6/12 relative float-left">
                    <div className=" float-left w-[calc(70%_-_40px)] p-5">
                        <h1 className=" m-0 p-0">Chair</h1>
                        <p className=" m-0 p-0">£250</p>
                    </div>
                    <div
                        className="hover:bg-[#a6cdde] float-right w-[calc(30%_-_2px)] h-full transition-[background] duration-[0.5s] border-l-[rgba(0,0,0,0.1)]">
                        <i className="hidden hover:translate-y-[5px] hover:text-[#00394B] text-3xl text-[#254053] transition-transform duration-[0.5s] p-[30px]">add_shopping_cart</i>
                    </div>
                </div>
                <div
                    className="px-2 text-center w-6/12 flex gap-2 bg-white items-center justify-start text-black float-right h-[100%] overflow-hidden">
                    <div className="text-black float-right w-full">
                        <p className="font-bold text-xl">Wholesale Pepsi Soft Drink</p>
                        <small className="text-lg text-blue-800 text-center">Food and beverages production
                            lines ›
                            Bottled Water</small>
                    </div>
                </div>
            </div>
            { <div className="group-hover:hover:animate-none group-hover:animate-wiggle z-[90] w-[140px] h-[140px] absolute top-[-70px] bg-black hover:bg-[#343434b1]
             right-[-70px] overflow-hidden hover:rounded-none
              transition-[all,background-color,top,border-radius]
              duration-[0.5s,2s,1s,1.5s]
              rounded-[0px_0px_200px_200px]
             hover:w-full group/details
             hover:right-0 hover:top-0
             hover:h-4/5 ">
                <div className="absolute text-[white] opacity-100 right-[75px] top-[75px]
                group-hover/details:opacity-0 group-hover/details:w-[150px] group-hover/details:h-[150px]">
                    <i className="material-icons">Details</i>
                </div>
                <div
                    className="opacity-0 translate-y-[-200%] transition-opacity duration-[0.2s,transform]
                    delay-[0.2s] p-[5%] scale-50 group-hover/details:opacity-100
                     group-hover/details:translate-y-0 group-hover/details:scale-100">
                    <div
                        className="absolute rounded-[10px] w-full px-5
                         drop-shadow-[-10px_12px_0px_60px_rgba(0,0,0,1)] text-white z-10 flex flex-col gap-2">
                        <div className="text-lg font-red-500 text-center ">
                            <p className="text-xl font-bold">Sold by: </p>
                            <p className="text-lg">Gold Member</p>
                            <p className="text-xl font-bold">Response rate: Not Calculated</p>
                            <p className="text-lg"> UAE</p>
                            <p className="text-lg">Member Flag
                            </p>
                            <p className="text-lg"> Member since : Dec-2020</p>
                            <div className="px-10">
                                <button
                                    className="flex border-none mt-2 justify-center bg-[#1bd741] items-center overflow-hidden rounded-lg
                        disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-80
                        active:opacity-90 active:shadow-[inset_0px_0px_8px_rgba(0,0,0,0.25)]
                        group mb-2 cm-btn-second border w-full h-10 self-center"
                                >
                                    <div className="text-white inline-block truncate opacity-1 group-active:opacity-90">
                                        Whatsapp
                                    </div>
                                </button>
                                <button
                                    className="flex border-none justify-center bg-[#d52a2c] items-center overflow-hidden rounded-lg
                        disabled:opacity-20 disabled:cursor-not-allowed hover:opacity-80
                        active:opacity-90 active:shadow-[inset_0px_0px_8px_rgba(0,0,0,0.25)]
                        group mb-2 cm-btn-second border w-full h-10 self-center"
                                >
                                    <div className="text-white inline-block truncate opacity-1 group-active:opacity-90">
                                        Details
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

    )
}
export default Product