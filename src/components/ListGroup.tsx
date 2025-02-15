import { useState } from "react";

const ListGroup = () => {
  const items: string[] = ["item1", "item2", "item3", "item4"];
  const [selectedIndex,setSelectedIndex] = useState(0);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item: string, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
