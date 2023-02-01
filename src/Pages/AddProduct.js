import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate()

  const formSubmit = (e) => {
    e.preventDefault()

    // axios.post('http://localhost:9000/products', {
    //   title,
    //   price,
    //   description,
    //   category,
    //   image
    // }).then((data) => {
    //   console.log(data)
    //   navigate('/products')
    // })

    fetch(`http://localhost:9000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        title,
        price,
        description,
        category,
        image
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate('/products')
      })

  }

  return (
    <>
      <h1>Add Product</h1>

      <form onSubmit={formSubmit}>

        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="productTitle" aria-describedby="Product title" placeholder="Product title" onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="productPrice" aria-describedby="Product Price" placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Description</label>
          <input type="text" className="form-control" id="productDescription" aria-describedby="Product Description" placeholder="Product Description" onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <input type="text" className="form-control" id="productCategory" aria-describedby="Product Category" placeholder="Product Category" onChange={(e) => setCategory(e.target.value)} />
        </div>

        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Image Url</label>
          <input type="text" className="form-control" id="productImage" aria-describedby="Product Image" placeholder="Product Image" onChange={(e) => setImage(e.target.value)} />
        </div>

        <button type="submit" className="btn btn-primary">Add Product</button>

      </form>
    </>
  )
}

export default AddProduct