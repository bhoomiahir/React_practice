function ProductImg({ imgs }) {
  return (
    <>
      <h1>Products List:</h1>
      <div className="products">
        {imgs.map((img) => {
          return <img src={img} alt="productPic"></img>;
        })}
      </div>
    </>
  );
}

export default ProductImg;
