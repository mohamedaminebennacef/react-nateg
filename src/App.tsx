import ListGroup from "./components/ListGroup";
function App() {
  const items: string[] = ["item1", "item2", "item3", "item4"];
  const items2: string[] = ["props1","props2","props3","props4"];
  const heading = "Heading";
  const heading2 = "Heading2";
  const handleSelect = (item:string) => console.log(item)
  return (
    <>
      {/* <ListGroup items={items} heading={heading}></ListGroup> */}
      <ListGroup items={items2} heading={heading2} onSelect={handleSelect}></ListGroup>
    </>
  );
}
export default App;
