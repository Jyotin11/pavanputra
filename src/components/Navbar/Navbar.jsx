import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'

export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg  ">
  <div class="container">
    <a class="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active fw-semibold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fw-semibold" href="#">About us</a>
        </li>
        <li class="nav-item">
        <div class="dropdown">
  <button class="btn dropdown-toggle fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    RESIDENTIAL
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item fw-semibold" href="#">Action</a></li>
    <li><a class="dropdown-item fw-semibold" href="#">Another action</a></li>
    <li><a class="dropdown-item fw-semibold" href="#">Something else here</a></li>
  </ul>
</div>
        </li>
        <li class="nav-item">
        <div class="dropdown">
  <button class="btn dropdown-toggle fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    RESIDENTIAL
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item fw-semibold" href="#">Action</a></li>
    <li><a class="dropdown-item fw-semibold" href="#">Another action</a></li>
    <li><a class="dropdown-item fw-semibold" href="#">Something else here</a></li>
  </ul>
</div>



        </li>


<li>

        <div class="dropdown">
  <button class="btn dropdown-toggle fw-semibold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    NA PLOTS
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item fw-semibold" href="#">Action</a></li>
    <li><a class="dropdown-item fw-semibold" href="#">Another action</a></li>
    <li><a class="dropdown-item fw-semibold" href="#">Something else here</a></li>
  </ul>
</div>

</li>


<li class="nav-item">
          <a class="nav-link active fw-semibold" href="#">ABOUT US</a>
        </li>



        <li class="nav-item">
          <a class="nav-link active fw-semibold" href="#">CONTACT US</a>
        </li>

      </ul>
    </div>
  </div>
</nav>
    
    </>
  )
}
