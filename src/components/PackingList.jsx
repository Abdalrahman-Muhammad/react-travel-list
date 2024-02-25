import { useState } from 'react';
import { initialItems } from '../../public/data';
import { Item } from './Item';
export const PackingList = () => {
  const [items, setItems] = useState(initialItems);
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
