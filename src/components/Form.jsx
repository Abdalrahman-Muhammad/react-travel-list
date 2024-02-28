import { useState } from 'react';

export const Form = ({ onAddItem }) => {
  const [formData, setFormData] = useState({
    description: '',
    quantity: 1,
    packed: false,
    id: crypto.randomUUID(),
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === 'quantity' ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description) return;
    onAddItem(formData);
    setFormData({
      description: '',
      quantity: 1,
      packed: false,
      id: crypto.randomUUID(),
    });
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name='quantity' onChange={handleChange} value={formData.quantity}>
        {Array.from({ length: 20 }, (_, num) => (
          <option key={num} value={num + 1}>
            {num + 1}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        onChange={handleChange}
        name='description'
        value={formData.description}
      />
      <button>ADD</button>
    </form>
  );
};
