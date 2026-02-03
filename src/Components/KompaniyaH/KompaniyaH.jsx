import React from "react";
import { IoAirplane, IoPeople } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { GrDirections } from "react-icons/gr";
import Slider from "react-slick";
import logo from "../Header/images/NURIK_2.png"

const KompaniyaH = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <main className="bg-orange-500 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">

        <h2 className="text-4xl font-bold mb-3">
          Kompaniyamiz Haqida
        </h2>
        <p className="mb-14 text-sm">
          20 yildan ortiq vaqt davomida noyob sayohat tajribalarini taqdim etamiz.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <IoAirplane className="text-blue-500 text-4xl" />,
              title: "Xalqaro Sayohat",
              text: "Dunyodagi eng go'zal joylarga sayohatlarni tashkil etamiz.",
            },
            {
              icon: <FaHotel className="text-green-500 text-4xl" />,
              title: "Qulay Mehmonxonalar",
              text: "Eng yaxshi va eng qulay mehmonxonalar bilan qolaq.",
            },
            {
              icon: <GrDirections className="text-yellow-500 text-4xl" />,
              title: "Maxsus Yo'nalishlar",
              text: "Har bir mijoz uchun individual yo'nalishlarni yaratamiz.",
            },
            {
              icon: <IoPeople className="text-purple-500 text-4xl" />,
              title: "Malakali Yo'riqchilar",
              text: "Har bir mijoz uchun individual yo'nalishlarni yaratamiz.",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="bg-white text-gray-700 rounded-xl p-6 text-left shadow-md"
            >
              {item.icon}
              <h3 className="font-bold mt-4 mb-2 text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm">{item.text}</p>
            </li>
          ))}
        </ul>

        <div className="bg-white rounded-xl p-8 text-left text-gray-700 mb-20 flex flex-col md:flex-row gap-6 items-center">
          <img
            src={logo}
            alt="logo"
            className="w-28 h-28 object-contain"
          />
          <div>
            <h3 className="text-blue-600 font-bold mb-2">
              BIZNING TARIXIMIZ
            </h3>
            <p className="text-sm mb-2">
              IFLY kompaniyasi tashkil etilganidan beri mijozlarga unutilmas
              sayohat tajribalarini taqdim etmoqda. Biz har doim eng yaxshi
              xizmatlarni ko'rsatishga intilamiz.
            </p>
            <a
              href="#"
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              Batafsil o‘qing →
            </a>
          </div>
        </div>

        {/* REVIEWS */}
        <h3 className="text-xl font-semibold mb-8">
          Mijozlarimiz nima deyishadi
        </h3>

        <Slider {...settings}>
          {["Madina", "Bobur", "Nigina", "Sabina", "Javohir"].map((name, i) => (
            <div key={i} className="px-3">
              <div className="bg-white text-gray-700 rounded-xl p-6 shadow-md h-full">
                <p className="text-sm italic mb-3">
                  “Sayohat juda zo‘r tashkil etilgan, barchasidan juda mamnunman.”
                </p>
                <span className="text-right block font-medium">
                  – {name}
                </span>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </main>
  );
};

export default KompaniyaH;
