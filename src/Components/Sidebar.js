import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">

        <li>
          <Link to="/" > Get All Products</Link>
        </li>

        <li>
          <Link to="/products" > Get All Cateogries</Link>
        </li>

      </ul>
    </>
  )
}

export default Sidebar