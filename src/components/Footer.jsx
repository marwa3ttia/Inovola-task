import React from 'react'
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";

import footer from "../../src/assets/images/footer.jpg";
export const Footer = () => {
    return (
        <div className='footer text-center' >
            <figure className='pt-3'>
                <img src={footer} alt="" />
            </figure>
            <div className='pb-5'>
                <span className='mx-3 fs-3'> <AiOutlineYoutube className='text-white' /> </span>
                <span className='mx-3 fs-3'> <AiOutlineWhatsApp className='text-white' /> </span>
                <span className='mx-3 fs-3'> <AiOutlineInstagram className='text-white' /> </span>
                <span className='mx-3 fs-3'> <AiOutlineTwitter className='text-white' /> </span>
            </div>
<button className='goUp'> <AiOutlineArrowUp/></button>
<button className='chat'> <FaCommentAlt /></button>
        </div>
    )
}
export default Footer
