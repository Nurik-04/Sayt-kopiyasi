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
            <h2 className='kompaniya__title'>Kompaniyamiz Haqida</h2>
            <i className="kompaniya__text">20 yildan ortiq vaqt davomida noyob sayohat tajribalarini taqdim etamiz.</i>
            <ul className="kompaniya__list">
                <li className="kompaniya__item">
                    <IoAirplane />
                    <h3 className="kompaniya__item__title">Xalqaro Sayohat</h3>
                    <b className="kompaniya__item__text">Dunyodagi eng go'zal joylarga sayohatlarni tashkil etamiz.</b>
                </li>
                <li className="kompaniya__item">
                    <FaHotel />
                    <h3 className="kompaniya__item__title">Qulay Mehmonxonalar</h3>
                    <b className="kompaniya__item__text">Eng yaxshi va eng qulay mehmonxonalar bilan qolaq.</b>
                </li>
                <li className="kompaniya__item">
                    <GrDirections />
                    <h3 className="kompaniya__item__title">Maxsus Yo'nalishlar</h3>
                    <b className="kompaniya__item__text">Har bir mijoz uchun individual yo'nalishlarni yaratamiz.</b>
                </li>
                <li className="kompaniya__item">
                    <IoPeople />
                    <h3 className="kompaniya__item__title">Malakali Yo'riqchilar</h3>
                    <b className="kompaniya__item__text">Har bir mijoz uchun individual yo'nalishlarni yaratamiz.</b>
                </li>
            </ul>
        </div>
      </div>
    </main>
  )
}

export default KompaniyaH
