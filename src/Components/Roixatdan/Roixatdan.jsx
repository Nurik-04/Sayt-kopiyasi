import React from "react";

const Roixatdan = () => {
  return (
    <main className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white rounded-2xl shadow-xl p-10">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Aviabiletlar bron qilish
          </h2>

          {/* FORM */}
          <form className="grid md:grid-cols-3 gap-6">

            {/* Ism */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">To'liq ismingiz:</label>
              <input
                type="text"
                placeholder="Ismingizni, otangiz ismini va familiyangizni kiriting"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Tel 1 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Birinchi raqamingiz</label>
              <input
                type="tel"
                placeholder="Birinchi mobil raqamni kiriting"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Tel 2 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Ikkinchi raqamingiz</label>
              <input
                type="tel"
                placeholder="Ikkinchi mobil raqamni kiriting"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Davlatdan */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Qaysi davlatdan</label>
              <select className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Tanlang...</option>
                <option>Veitnam</option>
                <option>Tayland</option>
                <option>Indoneziya</option>
                <option>O'zbekiston</option>
                <option>Janubiy Koreya</option>
                <option>Filipin</option>
                <option>Italiya</option>
                <option>Xitoy</option>
                <option>Yaponiya</option>
                <option>Rossiya</option>
              </select>
            </div>

            {/* Davlatga */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Qaysi davlatga</label>
              <select className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400">
                <option>Tanlang...</option>
                <option>Veitnam</option>
                <option>Tayland</option>
                <option>Indoneziya</option>
                <option>O'zbekiston</option>
                <option>Janubiy Koreya</option>
                <option>Filipin</option>
                <option>Italiya</option>
                <option>Xitoy</option>
                <option>Yaponiya</option>
                <option>Rossiya</option>
              </select>
            </div>

            {/* Jonash */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Jo'nash sanasi</label>
              <input
                type="date"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Qaytish */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Qaytish sanasi</label>
              <input
                type="date"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Email manzilingizni kiriting"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Telegram */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">
                Telegram foydalanuvchi nomi
              </label>
              <input
                type="text"
                placeholder="Telegram username"
                className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="md:col-span-3 mt-4">
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-lg transition"
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Roixatdan;
