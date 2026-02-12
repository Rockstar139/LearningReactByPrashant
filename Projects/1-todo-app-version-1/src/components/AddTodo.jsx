function AddTodo() {
  return (
    <div className="container">
      <div className="row row-space">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Text" />
        </div>
        <div className="col-4">
          <input type="Date" />
        </div>
        <div className="col-2">
          <button className="btn btn-success btn-cstm">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
