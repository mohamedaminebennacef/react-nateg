const Message = () => {
  const name = "";
  if (name) {
    return (
      <>
        <h1>React {name}</h1>
        <p>Session1</p>
      </>
    );
  }
  return <h1>Loading...</h1>;
};
export default Message;
