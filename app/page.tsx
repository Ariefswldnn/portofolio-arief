export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold">Hallo</h1>
        <div className="space-x-4 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center mt-16 px-6">
        <img
          src="/a1.jpg"
          alt="Profile"
          className="w-36 h-36 mx-auto rounded-full border-4 border-gray-700 shadow-lg hover:scale-105 transition"
        />

        <h1 className="text-4xl md:text-5xl font-bold mt-6">
          Arief Sawaludin
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Mahasiswa Teknik Informatika yang sedang fokus mengembangkan skill
          web development dan memiliki tujuan bekerja di Jepang 🇯🇵
        </p>

        <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-semibold hover:bg-gray-300 transition">
          Lihat Portfolio
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-24 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-400">
          Saya sedang membangun skill di bidang web development dengan fokus pada
          pembuatan aplikasi modern menggunakan JavaScript dan framework seperti Next.js.
          Saya memiliki ambisi untuk bekerja di luar negeri dan terus berkembang
          di dunia teknologi.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="mt-24 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center">My Projects</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* CARD */}
          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <h3 className="text-lg font-semibold">Login Register App</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Sistem autentikasi user menggunakan database.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <h3 className="text-lg font-semibold">Cafe Mobile App</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Aplikasi Android untuk pemesanan makanan.
            </p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 hover:bg-gray-700 transition shadow-lg">
            <h3 className="text-lg font-semibold">MySQL Project</h3>
            <p className="text-gray-400 mt-2 text-sm">
              Implementasi query dan stored procedure.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-24 px-6 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <div className="mt-4 text-gray-400">
          <p>Email: ariefswldnn33@email.com</p>
          <p>GitHub: github.com/Ariefswldnn</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 text-center text-gray-500 text-sm pb-6">
        © 2026 AriefSwldnn
      </footer>

    </main>
  );
}