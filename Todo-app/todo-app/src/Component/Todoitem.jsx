function Todoitem() {
  return (
    <>
      <div class="row">
        <div class="col-6">Buy Milk</div>
        <div class="col-4">09/07/26</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>

      <div class="row">
        <div class="col-6">Study in evening</div>
        <div class="col-4">10/07/26</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todoitem;
