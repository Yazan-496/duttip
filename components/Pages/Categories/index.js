"use client";
import FilterDashboard from "../../Common/FilterDashboard";
import Items from "./Items";
let cate = [{
    id: 1,
    name: "category1",
    sub: [{
        id: 1,
        name: "sub1ca1",
        sub: [{
            id: 1,
            name: "sub1sub1ca1", sub: [{
                id: 1,
                name: "1"
            }, {
                id: 2, name: "2"
            }, {
                id: 3, name: "3"
            }]
        }, {
            id: 2, name: "sub2sub1ca2"
        }, {
            id: 3, name: "sub3sub1ca3"
        }]
    }, {
        id: 2, name: "sub2ca1"
    }, {
        id: 3, name: "sub3ca1"
    }]
}, {
    id: 2, name: "category2", sub: [{
        id: 1, name: "sub1ca1"
    }, {
        id: 2, name: "sub2ca2"
    }, {
        id: 3, name: "sub3ca3"
    }]
}]
function CategoriesPage( ) {
    return (
        <>
            <div className='w-full m-0 md:m-5 gap-5 rounded-lg bg-[#F5F5F5] p-0 md:p-5 shadow-lg h-full grid auto-rows-auto lg:grid-cols-[30%_69%]'>
                <FilterDashboard categoryProps={cate} />
                <div className="p-0 h-full">
                <Items />
                </div>
            </div>
        </>
    );
}

export default CategoriesPage;