export const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  const numItems = items.length;
  const numpackedItems = items.filter((item) => item.packed).length;
  const percentage = (numpackedItems / numItems) * 100 || 0;
  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got every thing! Ready to go ✈️'
          : `💼 You have ${numItems} items on your list, and you already packed ${numpackedItems} (${Math.round(
              percentage
            )}%)`}
      </em>
    </footer>
  );
};
