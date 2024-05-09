export default function ListGroup() {
  let items = ["THA", "CHN", "USA"];
  items.pop();
  items.pop();
  items.pop();
  if (items.length <= 0) {
    return <>No item found</>;
  }
  return (
    <>
      <h1>List Group</h1>
      <br />
      <ul className="list-group">
        {items.map((item) => (
          <li key={item.toUpperCase()}>{item}</li>
        ))}
      </ul>
    </>
  );
}
