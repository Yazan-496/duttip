import StoreProducts from "./StoreProducts"
import StoreDetails from "./StoreDetails";
import StoreContact from "./StoreContact";

const Index = ({cate, tab, countries}) => {
    switch (tab) {
        case 0 :
            return (<StoreProducts cate={cate}/>)
        case 1 :
            return <StoreDetails/>
        case 2 :
            return (<div
                className='w-full flex flex-col bg-white shadow-xl p-5 items-center justify-center gap-5 rounded-lg h-full'>
                Gallery</div>)
        case 3 :
            return <div
                className='w-full flex flex-col bg-white shadow-xl p-5 items-center justify-center gap-5 rounded-lg h-full'>
                Catalog</div>
        case 4 :
            return <StoreContact countries={countries}/>
        default :
            break;
    }
    return null
}
export default Index