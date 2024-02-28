export const Stats = ({ items }) => {
  const packedItems = items.filter((item) => item.packed);
  const percentage = (packedItems.length / items.length) * 100;
  return (
    <footer className='stats'>
      <em>
        💼 You have {items.length} items on your list, and you already packed{' '}
        {packedItems.length}({Math.round(percentage)}%)
      </em>
    </footer>
  );
};
