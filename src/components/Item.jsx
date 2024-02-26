export const Item = ({
  item: { description, quantity, packed, id },
  setItems,
}) => {
  const deleteItem = (id) => {
    setItems((pre) => pre.filter((pre) => pre.id != id));
  };
  return (
    <li>
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
};
