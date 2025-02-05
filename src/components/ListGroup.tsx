const ListGroup = () => {
  const items:string[] = ["item1", "item2", "item3", "item4"];
  // if (items.length === 0) {
  //   return (
  //     <>
  //       <h1>List</h1>
  //       <p>No items Found</p>
  //     </>
  //   );
  // }
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No items Found</p>:null} */}
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item:string) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
