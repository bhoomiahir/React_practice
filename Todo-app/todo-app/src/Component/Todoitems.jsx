import Todoitem from "./Todoitem";

function Todoitems({ todoitems }) {
  return (
    <>
      {todoitems.map((items) => {
        <Todoitem todoitem={items.name} tododate={items.date}></Todoitem>;
      })}
    </>
  );
}

export default Todoitems;
