import React from 'react'
import n1 from './images/NURIK_1.png'
// import "./header.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const header = () => {
  return (
    <header className='header fixed top-0 right-0 left-0 z-250 bg-orange-400'>
        <div className="contayner">
            <nav className='header__nav flex justify-between items-center px-10 w-full h-20 backdrop-blur-lg '>
                <img src={n1} alt="" className='header__img w-20 h-20'/>
                <ul className='header__list flex gap-7 text-white text-lg'>
                    <li className='header__item'>
                        <a className='' href="">Ekskursiyalar</a>
                    </li>
                    <li className='header__item'>
                        <a className='' href="">Shahar</a>
                    </li>
                    <li className='header__item'>
                        <a className='' href="">Haqida</a>
                    </li>
                    <li className='header__item'>
                        <a className='' href="">Aloqaga chiqish</a>
                    </li>
                </ul>
                <div className="header__box flex gap-5 text-white text-lg items-center">
                    <div className="header__icons flex gap-2">
                        <a className='text-xl' href="https://www.facebook.com/?locale=ru_RU"><FaFacebookF /></a>
                        <a className='text-xl' href="https://x.com/?lang=ru"><FaTwitter /></a>
                        <a className='text-xl' href="https://www.instagram.com/"><FaInstagram /></a>
                        <a className='text-xl' href="https://www.linkedin.com/"><FaLinkedinIn /></a>
                        <a className='text-xl' href="https://www.youtube.com/"><FaYoutube /></a>
                    </div>
                    <select name="" id=" " className='bg-gray-400 rounded-md text-center'>
                        <option value="0">Uzb</option>
                        <option value="1">Рус</option>
                        <option value="2">Eng</option>
                    </select>
                    <button >🌑</button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default header
