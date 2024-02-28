export const Item = ({
  item: { description, quantity, packed, id },
  deleteItem,
  togglePacking,
}) => {
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
