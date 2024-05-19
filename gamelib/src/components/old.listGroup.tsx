import { MouseEvent, useState } from "react";

interface ListGroupProps {
  items: Array<string>;
  heading: string;
  onSelectedItem?: (item: string) => void;
}

export default function ListGroup({
  heading,
  items,
}: // onSelectedItem,
ListGroupProps) {
  const [selectedIndex, selectedIndexUpdater] = useState(-1); // arr[0] = variable, arr[1] = updater func
  const handleClick = (event: MouseEvent, item: string, index: number) => {
    selectedIndexUpdater(index);
    console.log(`${item} item clicked:`, event);
  };

  return (
    <>
      <h2>{heading}</h2>
      {<br />}
      {
        items.length === 0 && (
          <p>No item found!</p>
        ) /* equivalent to render p tag if items' length is 0 */
      }
      <ul className="list-group">
        {
          items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item.toUpperCase()}
              onClick={(event) => handleClick(event, item, index)}
            >
              {item}
            </li>
          )) /* render n item by map them  */
        }
      </ul>
    </>
  );
}
