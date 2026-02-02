
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import japan from "../Hero/images/yapon.jpg";
import dubai from "../Hero/images/dubai.jpg";
import orol from "../Hero/images/orol.jpg";
import tailand from "../Hero/images/tailand.jpg";
import turkiya from "../Hero/images/turkiya.jpg";
import maldiva from "../Main/images/maldiva.jpg";
import vietnam from "../Main/images/vetnam.jpg";


const Davlatlar = () => {
    const data = [
        {
            title: "Tokio, Yaponiya",
            desc: "Tokio Yaponiya poytaxti bo‘lib, an’anaviy ibodatxonalarni zamonaviy osmono‘parlar bilan birlashtiradi.",
            img: japan,
        },
        {
            title: "Orol qochishi",
            desc: "Shahar shovqinidan uzoqda, tabiatning ajoyib go‘zalligida dam oling.",
            img: orol,
        },
        {
            title: "Vetnam sarguzashti",
            desc: "Vetnamning rang-barang guruch teraslari va noyob madaniyati bilan tanishing.",
            img: vietnam,
        },
        {
            title: "Dubay, BAA",
            desc: "Dubayning kelajakdagi silueti va hashamatini guvohi bo‘ling.",
            img: dubai,
        },
        {
            title: "Maldivlar",
            desc: "Oq qumli plyajlar va toza suvlar bilan tropik jannat.",
            img: maldiva,
        },
        {
            title: "Tropik Tailand",
            desc: "Tailand chiroyli orollari, ko‘chada oziq-ovqat va boy madaniyati bilan mashhur.",
            img: tailand,
        },
        {
            title: "Mo‘jizaviy Turkiya",
            desc: "Turkiyaning boy tarixi va go‘zal manzaralarini kashf eting.",
            img: turkiya,
        },
    ];
    return (
        <div>
            <div className="yaqinroq py-16 bg-white w-full">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <h2 className="text-2xl font-bold text-center mb-10">
                        Davlatlarni o‘rganing
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                            >
                                {/* Image */}
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-48 w-full object-cover"
                                />
                                {/* Content */}
                                <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-5 text-white">
                                    <h3 className="font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm mb-4">
                                        {item.desc}
                                    </p>
                                    <button className="bg-white text-orange-500 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
                                        Batafsil ma’lumot
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Davlatlar
