import {LineItem} from "../line-item";

export const ItemList = ({items, handleDelete, handleCheck}) => {
    return (
            <ul>
                {items.map((item) => (
                   <LineItem
                       key={item.id}
                       item={item}
                       handleCheck={handleCheck}
                       handleDelete={handleDelete}
                    />
                ))}
            </ul>
    );
};
