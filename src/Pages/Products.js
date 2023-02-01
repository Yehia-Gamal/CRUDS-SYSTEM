import "./Products.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])

  const getAllProducts = () => {
    fetch('http://localhost:9000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }

  const deleteProduct = (product) => {
    // eslint-disable-next-line no-restricted-globals
    let confirmMsg = confirm(`Are You Sure To Delete ${product.title} ?`);

    if (confirmMsg === true) {

      fetch(`http://localhost:9000/products/${product.id}`, {
        method: "DELETE"
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        getAllProducts()
      })
    }
  }

  return (
    <>
      <h1>Products Page</h1>

      <Link to={'/products/add'} className="btn btn-success mb-3">Add New Product</Link>

      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titl</th>
            <th>Description</th>
            <th>Price</th>
            <th className="text-center">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th>{product.id}</th>
                <th>{product.title.slice(1, 20)}...</th>
                <th>{product.description.slice(1, 20)}...</th>
                <th>{product.price}</th>
                <td className="text-end">
                  <button className="btn btn-danger btn-sm" onClick={() => deleteProduct(product)}>Delete</button>
                  <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                  <Link to={`/products/edit`} className="btn btn-primary btn-sm">Edit</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </>
  )
}

export default Products