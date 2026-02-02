import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Main.css";

import japan from "../Hero/images/yapon.jpg";
import dubai from "../Hero/images/dubai.jpg";
import china from "../Hero/images/xitoy.jpg";

const Main = () => {
    const sliderRef = useRef(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="premium">
            <div className="contayner">
                <div className="slider-wrap">
                    <h1 className="title">Bizning Premium Turlarimizni Kashf Etish</h1>
                    <Slider ref={sliderRef} {...settings}>
                        {/* CARD 1 */}
                        <div className="card">
                            <img src={japan} alt="Japan" />
                            <div className="overlay">
                                <h2>Yaponiya</h2>
                                <p>
                                    Yaponiya – bu sizning barcha sayohat
                                    orzularingizni ro‘yobga chiqaradigan mamlakat.
                                </p>
                                <button>Biz bilan bog‘laning</button>
                            </div>
                        </div>
                        {/* CARD 2 */}
                        <div className="card">
                            <img src={dubai} alt="Dubai" />
                            <div className="overlay">
                                <h2>Dubay Muxlislari</h2>
                                <p>
                                    Dubayning kelajakdagi silueti
                                    va hashamatini ko‘ring.
                                </p>
                                <button>Biz bilan bog‘laning</button>
                            </div>
                        </div>
                        {/* CARD 3 */}
                        <div className="card">
                            <img src={china} alt="China" />
                            <div className="overlay">
                                <h2>Xitoyni Kashf Etish</h2>
                                <p>
                                    Sevgi shahri, madaniyati,
                                    san’ati va taomi bilan mashhur.
                                </p>
                                <button>tour-contact</button>
                            </div>
                        </div>
                        {/* CARD 4 */}
                        <div className="card">
                            <img src={japan} alt="Japan" />
                            <div className="overlay">
                                <h2>Yaponiya</h2>
                                <p>
                                    Yaponiya – bu sizning barcha sayohat
                                    orzularingizni ro‘yobga chiqaradigan mamlakat.
                                </p>
                                <button>Biz bilan bog‘laning</button>
                            </div>
                        </div>
                        {/* CARD 5 */}
                        <div className="card">
                            <img src={dubai} alt="Dubai" />
                            <div className="overlay">
                                <h2>Dubay Muxlislari</h2>
                                <p>
                                    Dubayning kelajakdagi silueti
                                    va hashamatini ko‘ring.
                                </p>
                                <button>Biz bilan bog‘laning</button>
                            </div>
                        </div>
                        {/* CARD 6 */}
                        <div className="card">
                            <img src={china} alt="China" />
                            <div className="overlay">
                                <h2>Xitoyni Kashf Etish</h2>
                                <p>
                                    Sevgi shahri, madaniyati,
                                    san’ati va taomi bilan mashhur.
                                </p>
                                <button>tour-contact</button>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Main;
