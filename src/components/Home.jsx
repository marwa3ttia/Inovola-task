import React from 'react'
import Ellipse from "../../src/assets/images/Ellipse.png";
import Pattern from "../../src/assets/images/Pattern.png";
import product from "../../src/assets/images/product.png";
import { AiOutlineLeft } from "react-icons/ai";
import"./landpage.css";
export const Home = () => {
    return (
      <div className="home">
      <div className="container">
<div className="header__info text-center">
        <h1 className="pt-5">  طور متجرك ووسع افاق تجارتك مع سوق تطبيقات زد </h1>
        <p className='mx-auto w-50 px-5 py-3'> طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التى تساعدك فى نمو ارباحك عبر اداره عمليات متجرك بشكل فعال واحترافى </p>
        <button className="w-25 btn__style mb-5"> تصفح التطبيقات <AiOutlineLeft /></button>
      </div>
      <div className="header__photos">

<figure className="product__photo mb-5 py-5">
  <img src={product} alt="" />
</figure>

<figure className="Ellipse__photo">
  <img src={Ellipse} alt="" />
</figure>

<figure className="Pattern__photo">
  <img src={Pattern} alt="" />
</figure>

      </div>

      </div>
      </div>

    )
}
export default Home
