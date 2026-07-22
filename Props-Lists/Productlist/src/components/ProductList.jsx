function ProductList({ products }) {
  return (
    <>
      <div className="products">
        {/* {imgs.map((img) => {
          <img src={img} alt="productPic"></img>;
        })} */}
        {products.map((product) => {
          return <p>{product}</p>;
        })}
      </div>
    </>
  );
}

export default ProductList;
