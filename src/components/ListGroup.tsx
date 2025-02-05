import { MouseEvent } from "react";
const ListGroup = () => {
  const items: string[] = ["item1", "item2", "item3", "item4"];

  // Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item: string) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {/*refrence not calling the function*/}
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
