import { Item } from './Item';
export const PackingList = ({ items, deleteItem, togglePacking }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            togglePacking={(e) => togglePacking(e, item.id)}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
};
