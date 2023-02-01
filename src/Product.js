import Button from "./components/Button"

function Product(props) {
  return (
    <div className="product-card">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <span>{props.price}</span>
      <br />
      <Button title="Details" />
    </div>
  )
}

export default Product