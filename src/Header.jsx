import logo from "./assets/react.svg";
import { NavLink, Link } from 'react-router-dom';



function Header() {
  return (
    <div className="py-2 pl-2" style={{ borderBottom: "1px solid #777" }}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          {/* <span className="h2 pt-4 m-2 text-white-50">RouteOpedia</span> */}
          <img src={logo} alt="" style={{ height: "35px", verticalAlign: "top" }} />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active text-danger' : 'nav-link'}
                  aria-current="page"
                  to="/"
                >Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active text-danger' : 'nav-link'}
                  to="/about"
                >About</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active text-danger' : 'nav-link'}
                  to="/cryptodetail/BTC/10"
                >Crypto Detail</NavLink>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Product
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="/product">Product</Link></li>
                  <li><Link class="dropdown-item" to="/product/list">Product List</Link></li>
                  <li><Link class="dropdown-item" to="/product/create">Create Product</Link></li>
                  <li><Link class="dropdown-item" to="/product/details/12">Product Details</Link></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;