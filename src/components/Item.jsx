export const Item = ({
  item: { description, quantity, packed, id },
  setItems,
}) => {
  const deleteItem = (id) => {
    setItems((pre) => pre.filter((pre) => pre.id != id));
  };

  const togglePacking = (e) => {
    setItems((pre) =>
      pre.map((item) =>
        item.id === id ? { ...item, packed: e.target.checked } : item
      )
    );
  };
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <input type='checkbox' onChange={togglePacking} checked={packed} />
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
};
