export const Item = ({
  item: { description, quantity, packed, id },
  onDeleteItem,
  togglePacking,
}) => {
  return (
    <li>
      <input type='checkbox' onChange={togglePacking} checked={packed} />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
};
