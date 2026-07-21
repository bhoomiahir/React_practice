import Todoitem from "./Todoitem";

function Todoitems({ todoitems }) {
  return (
    <>
      {todoitems.map((item) => {
        return <Todoitem todoitem={item.name} tododate={item.date}></Todoitem>;
      })}
    </>
  );
}

export default Todoitems;
