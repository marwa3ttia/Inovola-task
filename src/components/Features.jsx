import React from "react";
import bbaa from "../../src/assets/images/bbaa.png";
import { AiOutlineLeft } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

export const Features = () => {
  return (
    <div className="features my-5 pt-5">
     
          <div className="feature__header text-center pb-3">
          <h4>  التطبيقات المميزة </h4>
        <p> تطبيقات تقدم حلول وخدمات مميزة نوصي بتجربتها</p>
          </div>
       
        <div className="row px-5">
        <div className="col-3">
            <div className="feature__item bg-light d-flex flex-row px-2 py-3">
                <figure className="ps-2" > <img src={bbaa} alt="" /></figure>
                <div className="">
                   
                 <h6 className=""> <span className="ps-4"> قمرة</span> <AiFillStar className="text-warning"/>  5</h6>
               <p> تطوير : عمر برهوم</p>
               <p className=" fs-small ">نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك </p>
                </div>
            </div>
          </div>
          <div className="col-3">
          <div className="feature__item bg-light d-flex flex-row px-2 py-3">
                <figure className="ps-2" > <img src={bbaa} alt="" /></figure>
                <div className="">
                   
                 <h6> <span className="ps-4" > قمرة</span> <AiFillStar className="text-warning"/>  5</h6>
               <p> تطوير : عمر برهوم</p>
               <p className=" fs-small">نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك </p>
                </div>
            </div>
          </div>
          <div className="col-3">
          <div className="feature__item bg-light d-flex flex-row px-2 py-3">
                <figure className="ps-2" > <img src={bbaa} alt="" /></figure>
                <div className="">
                   
                 <h6> <span className="ps-4"> قمرة</span> <AiFillStar className="text-warning"/>  5</h6>
               <p> تطوير : عمر برهوم</p>
               <p className=" fs-small">نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك </p>
                </div>
            </div>
          </div>
          <div className="col-3">
          <div className="feature__item bg-light d-flex flex-row px-2 py-3">
                <figure className="ps-2" > <img src={bbaa} alt="" /></figure>
                <div className="">
                   
                 <h6> <span className="ps-4"> قمرة</span> <AiFillStar className="text-warning"/>  5</h6>
               <p> تطوير : عمر برهوم</p>
               <p className=" fs-small">نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك </p>
                </div>
            </div>
          </div>
        </div>
        <button className="btn__style bg-white mx-auto mt-4"> تصفح التطبيقات <AiOutlineLeft /></button>
      </div>
  
  );
};
export default Features;
