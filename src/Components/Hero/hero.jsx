import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Rasmlar manzili to'g'riligini yana bir bor tekshiring (Hero/images/...)
import yapon from   "./images/yapon.jpg"; 
import dubai from   "./images/dubai.jpg";
import xitoy from   "./images/xitoy.jpg";
import orol from    "./images/orol.jpg";
import turkiya from "./images/turkiya.jpg";
import tailand from "./images/tailand.jpg";
import poytax from  "./images/poytax.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  { title: "Dubayni kashf eting", desc: "BAAda hashamat va sarguzasht", image: dubai },
  { title: "Xitoyni kashf eting", desc: "Qadimiy tarix va zamonaviy madaniyat", image: xitoy },
  { title: "Yaponiya", desc: "Zamonaviy hayot va qadimiy an’analar", image: yapon },
  { title: "Turkiya", desc: "Istanbulning sehri va moviy sohillar", image: turkiya },
  { title: "Tropik Tailand", desc: "Chiroyli plyajlarda dam oling va mazali taomlarni tatib koring.", image: tailand },
  { title: "Orollarda dam olish", desc: "Ajoyib orol manzaralarida tinchlikni his qiling", image: orol },
  { title: "Malakali shahar", desc: "Dunyoning ko'gilochar poytaxtiga shoshiling", image: poytax },
];

const Hero = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center relative flex items-center justify-center"
              style={{ 
                // Bu joyda xatolik bo'lishi mumkin edi, url() ichiga stringni aniq beramiz
                backgroundImage: `url(${slide.image})` 
              }}
            >
              {/* Qorong'ulash (Overlay) */}
              <div className="absolute inset-0 bg-black/40"></div>

              <div className="relative z-10 text-center px-4">
                <div className="text-white max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-xl select-none">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl font-light drop-shadow-md select-none">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;