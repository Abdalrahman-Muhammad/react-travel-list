import { Item } from './Item';
export const PackingList = ({ items, onDeleteItem, togglePacking }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            togglePacking={(e) => togglePacking(e, item.id)}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  );
};
