import logo from "../../src/assets/images/logo.png";

import "./landpage.css";

const Navbar = () => {
  return (
    <div className="container ">
      {/* start navbar */}
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <figure className="px-5 m-0">
            <img className="w-100" src={logo} alt="profile" />
          </figure>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-dark px-5" href="/">الرئيسية</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark px-5" href="/">التصنيفات</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark px-5" href="/">التطبيقات </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-dark px-5" href="/">طور تطبيق</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* end navbar */}
    </div>
  );
};


export default Navbar 