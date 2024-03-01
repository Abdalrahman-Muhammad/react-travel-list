import { useState } from 'react';
import { Item } from './Item';
export const PackingList = ({
  items,
  onDeleteItem,
  togglePacking,
  handleClearList,
}) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;
  else if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            togglePacking={(e) => togglePacking(e, item.id)}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>sort by description</option>
          <option value='packed'>sort by packed stats</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
};
