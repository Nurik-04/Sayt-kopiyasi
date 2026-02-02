import React from 'react'
import { IoAirplane } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";

const KompaniyaH = () => {
  return (
    <main>
      <div className="contayner">
        <div className="kompaniya__contayner">
            <h2 className='kompaniya__title'></h2>
            <i className="kompaniya__text"></i>
            <ul className="kompaniya__list">
                <li className="kompaniya__item">
                    <IoAirplane />
                    <h3 className="kompaniya__item__title"></h3>
                    <b className="kompaniya__item__text"></b>
                </li>
                <li className="kompaniya__item">
                    <FaHotel />
                    <h3 className="kompaniya__item__title"></h3>
                    <b className="kompaniya__item__text"></b>
                </li>
                <li className="kompaniya__item">
                    <GrDirections />
                    <h3 className="kompaniya__item__title"></h3>
                    <b className="kompaniya__item__text"></b>
                </li>
                <li className="kompaniya__item">
                    <IoPeople />
                    <h3 className="kompaniya__item__title"></h3>
                    <b className="kompaniya__item__text"></b>
                </li>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default KompaniyaH
