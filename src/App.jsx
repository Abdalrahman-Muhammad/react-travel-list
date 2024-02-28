import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Stats } from './components/Stats';

export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('../public/data.json');
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className='app'>
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
