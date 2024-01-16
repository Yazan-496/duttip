import FilterDashboard from "../../../Common/FilterDashboard";
import Items from "../Items";

const StoreProducts = ({cate}) => {
  return (
      <div
          className='w-full gap-5 rounded-lg h-full grid auto-rows-auto lg:grid-cols-[30%_69%]'>
          <FilterDashboard categoryProps={cate}/>
          <div className="p-0 h-full">
              <Items/>
          </div>
      </div>
  )
}
export default StoreProducts