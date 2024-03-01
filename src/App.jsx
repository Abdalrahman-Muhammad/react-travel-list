import { useState } from 'react';
import data from '../public/data.js';
import { Form, Logo, PackingList, Stats } from './components';

export default function App() {
  const [items, setItems] = useState(data);

  const handleAddingItem = (item) => setItems((items) => [...items, item]);

  const handleDeleteItem = (id) => {
    setItems((pre) => pre.filter((pre) => pre.id != id));
  };

  const togglePacking = (e, id) => {
    setItems((pre) =>
      pre.map((item) =>
        item.id === id ? { ...item, packed: e.target.checked } : item
      )
    );
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      'Are you sure that you want to delete all items ?!'
    );
    if (!confirmed) return;
    setItems(() => []);
  };
  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddingItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        togglePacking={togglePacking}
        handleClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
