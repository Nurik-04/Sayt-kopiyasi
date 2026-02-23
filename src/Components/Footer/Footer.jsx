import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import logo from "../Header/images/NURIK_2.png"

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* 1-ustun */}
          <div>
            <img src={logo} alt="logo" className="w-14 mb-4" />
            <p className="text-sm mb-4 leading-relaxed">
              Biz innovatsion sayohat yechimlari orqali ajoyib tajribalar taqdim
              etishga intilamiz.
            </p>

            <div className="flex gap-4 text-xl">
              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="cursor-pointer hover:scale-110 transition" />
              <FaLinkedinIn className="cursor-pointer hover:scale-110 transition" />
              <FaYoutube className="cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

          {/* 2-ustun */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tez havolalar</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Haqida</li>
              <li className="hover:underline cursor-pointer">Ekskursiyalar</li>
            </ul>
          </div>

          {/* 3-ustun */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Manzillar</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:underline cursor-pointer">Yevropa</li>
              <li className="hover:underline cursor-pointer">Osiyo</li>
              <li className="hover:underline cursor-pointer">Afrika</li>
              <li className="hover:underline cursor-pointer">Avstraliya</li>
            </ul>
          </div>

          {/* 4-ustun */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bizning manzilimiz</h3>
            <p className="text-sm leading-relaxed">
              Toshkent shahri, Amir Temur ko‘chasi 108-uy.
              <br />
              Tel: +998 90 123 45 67
              <br />
              Email: info@ifly.uz
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
