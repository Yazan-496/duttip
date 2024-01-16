import {useState} from 'react';
import {SvgCheckbox} from "../../core/svgs";

const Tree = ({data, parentRefId }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [clickedIds, setClickedIds] = useState([]);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const handleSelect = (id) => {
        if (!clickedIds.includes(id)) {
            setClickedIds([...clickedIds, id]);
        } else {
            setClickedIds(clickedIds.filter((clickedId) => clickedId !== id));
        }
    };

    return (
        <div className="">
            <div className="flex cursor-pointer items-center justify-start w-full gap-x-2">
                <div className="flex items-center justify-start gap-x-1" onClick={() => handleSelect(data.id)}>
                <SvgCheckbox click={clickedIds.includes(data.id)}/>
                <p>{data?.name}</p>
                </div>
                {data?.sub?.length > 0 && <p className="font-bold" onClick={toggleCollapse}>{!collapsed ? '+' : '-'}</p>}
            </div>
            {data.sub && (
                <ul className={`duration-300 transition ${collapsed ? 'visible' : 'hidden'} ml-4`}>
                    {data.sub.map((subItem) => (
                        <Tree key={subItem.id} data={subItem}
                              parentRefId={parentRefId}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};
export default Tree