function ProductList(products) {
  return (
    <div>
      <h1>Products List:</h1>
      {products.map((product) => {
        return (
          <div>
            <p>{product}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
