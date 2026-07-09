function Todoitem() {
  return (
    <>
      <div className="row">
        <div className="col-6">Buy Milk</div>
        <div className="col-4">09/07/26</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn">
            Delete
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">Study in evening</div>
        <div className="col-4">10/07/26</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
