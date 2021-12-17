import React from 'react'
import Ellipse from "../../src/assets/images/Ellipse.png";
import Pattern from "../../src/assets/images/Pattern.png";
import zidapp from "../../src/assets/images/zidapp.png";
import Group1 from "../../src/assets/images/Group1.png";
import Group2 from "../../src/assets/images/Group2.png";
import Group3 from "../../src/assets/images/Group3.png";
import "./landpage.css";
import { AiOutlineLeft } from "react-icons/ai";
export const Values = () => {
    return (
        <div className='values__section pt-5 '>
                <div className="row flex-nowrap">
                    <div className="col-5 pe-5">
                      <h4 className='py-3'> كل ما تحتاجه لنمو متجرك فى مكان واحد</h4>
                      <p> مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمات وحلول سوق التطبيقات لنمو متجرك ومضاعفة أرباحك </p>
                      <ul>
                          <li className='d-flex align-items-baseline '> 
                              <figure> <img src={Group1} alt=""/></figure>
                              <p className='first'>سهولة ادارة و تفعيل تطبيقاتك من نفس لوحة تحكم متجرك</p>
                          </li>
                          <li className='d-flex align-items-baseline'> 
                              <figure> <img src={Group2} alt=""/></figure>
                              <p className='second'> دعم فني و تقني متكامل متوفر على مدار الساعة</p>
                          </li>
                          <li className='d-flex align-items-baseline'> 
                              <figure> <img src={Group3} alt=""/></figure>
                              <p className='last'> أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة </p>
                          </li>

                      </ul>
                      <button className=" w-50 btn__style mb-5"> تصفح التطبيقات <AiOutlineLeft /></button>
                    </div>
                    <div className="col-7">
                        <div className="values__photos">

                            <figure className="zidapp__photo">
                                <img src={zidapp} alt="" className=''/>
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
            </div>
       
    )
}
export default Values
