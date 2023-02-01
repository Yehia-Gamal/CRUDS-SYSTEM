import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function EditProduct(props) {

  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate()

  const formSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:9000/products/${props.product.id}`, {
      title,
      price,
      description,
      category,
      image
    }).then((data) => {
      console.log(data)
      navigate('/products')
    })
  }


  return (
    <>
      <h1>edit product</h1>

      <form onSubmit={formSubmit}>

        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="productTitle" aria-describedby="Product title" placeholder="Product title" onChange={() => setTitle(props.title)} />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="productPrice" aria-describedby="Product Price" placeholder="Product Price" />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">Description</label>
          <input type="text" className="form-control" id="productDescription" aria-describedby="Product Description" placeholder="Product Description" />
        </div>

        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">Category</label>
          <input type="text" className="form-control" id="productCategory" aria-describedby="Product Category" placeholder="Product Category" />
        </div>

        <div className="mb-3">
          <label htmlFor="productImage" className="form-label">Image Url</label>
          <input type="text" className="form-control" id="productImage" aria-describedby="Product Image" placeholder="Product Image" />
        </div>

        <button type="submit" className="btn btn-primary">Save Edit</button>

      </form>
    </>
  )
}

export default EditProduct