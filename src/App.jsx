import { useState } from 'react';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';
import data from '../public/data.js';

export default function App() {
  const [items, setItems] = useState(data);

  return (
    <div className='app'>
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
