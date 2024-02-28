import { useState } from 'react';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';
import data from '../public/data.js';

export default function App() {
  const [items, setItems] = useState(data);
  const handleAddingItem = (item) => setItems((items) => [...items, item]);
  const deleteItem = (id) => {
    setItems((pre) => pre.filter((pre) => pre.id != id));
  };

  const togglePacking = (e, id) => {
    setItems((pre) =>
      pre.map((item) =>
        item.id === id ? { ...item, packed: e.target.checked } : item
      )
    );
  };

  return (
    <div className='app'>
      <Logo />
      <Form onAddItem={handleAddingItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        togglePacking={togglePacking}
      />
      <Stats items={items} />
    </div>
  );
}
