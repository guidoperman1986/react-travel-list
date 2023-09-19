export function Stats({ items }) {
  if (!items.length) return <p className="stats"><em>Start adding some items to your list</em></p>;

  const numItems = items.length;
  // const packedItems = items.filter(item => item.packed).length
  let packedItems = 0;
  items.forEach(item => item.packed && packedItems++);
  const percentage = packedItems / numItems * 100;

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `You have ${numItems} items on your list, and you already packed ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
