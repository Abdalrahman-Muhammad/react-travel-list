import { Item } from './Item';
export const PackingList = ({ items, setItems }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} setItems={setItems} />
        ))}
      </ul>
    </div>
  );
};
