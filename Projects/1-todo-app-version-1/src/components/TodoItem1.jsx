function TodoItem1() {
  let todoName = "Buy Milk";
  let todoDate = "04/10/2026";
  return (
    <div className="container">
      <div className="row row-space">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button className="btn btn-danger btn-cstm">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
