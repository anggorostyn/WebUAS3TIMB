import React from "react";
// import { Banner } from "@/components/partials/Banner";
import Banner from "@/components/partials/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Activities = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="w-full max-w-screen-xl mx-auto mb-8 px-1">
          <img
            src="/images/kegiatan/4.jpg"
            alt="Gambar Kegiatan"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Deskripsi Kegiatan */}
        <div className="w-full max-w-screen-lg mx-auto text-center px-4 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 relative inline-block">
            Kegiatan
            <span className="block h-[2px] w-12 bg-green-500 mt-1 mx-auto"></span>
          </h2>
        </div>

        {/* Card Section */}
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* Card 1 */}
          <div
            className=" dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/4.jpg"
              alt="Gambar Card 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Seminar Pengelolaan Sampah
              </h3>
              <p className="text-white mb-4 text-left">
                Menyelenggarakan sharing session bersama para ahli tentang
                pentingnya pengelolaan sampah yang tepat.
              </p>
              <div className="flex justify-between items-center mt-2">
                
                <a className="text-white text-xs">
                  Kamis, 18 November 2024
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/5.png"
              alt="Gambar Card 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Aksi Bersih Lingkungan
              </h3>
              <p className="text-white mb-4 text-left">
                Bergabung dalam kegiatan bersih-bersih dalam menciptakan
                lingkungan yang lebih sehat.
              </p>
              <div className="flex justify-between items-center mt-2">
                
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/4.jpg"
              alt="Gambar Card 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Seminar Pengelolaan Sampah
              </h3>
              <p className="text-white mb-4 text-left">
                Menyelenggarakan sharing session bersama para ahli tentang
                pentingnya pengelolaan sampah yang tepat.
              </p>
              <div className="flex justify-between items-center mt-2">
                
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            style={{
              background: `#1a7f5d`,
            }}
          >
            <img
              src="/images/kegiatan/5.png"
              alt="Gambar Card 4"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 text-left">
                Aksi Bersih Lingkungan
              </h3>
              <p className="text-white mb-4 text-left">
                Bergabung dalam kegiatan bersih-bersih dalam menciptakan
                lingkungan yang lebih sehat.
              </p>
              <div className="flex justify-between items-center mt-2">
                
                <span className="text-white text-xs">
                  Kamis, 18 November 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        

        {/* Subjudul Galeri */}
        <div className="w-full max-w-screen-lg mx-auto text-center px-4 mt-8 mb-7">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 relative inline-block">
            Galeri Dokumentasi
            <span className="block h-[2px] w-30 bg-green-500 mt-1 mx-auto"></span>
          </h2>
        </div>

        {/* Galeri Foto */}
        <div className="w-full max-w-screen-lg mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 px-4 mb-10">
          <img
            src="/images/galeri/dok1.jpg"
            alt="Gambar Galeri 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/dok2.jpeg"
            alt="Gambar Galeri 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/dok3.jpeg"
            alt="Gambar Galeri 3"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/dok6.jpg"
            alt="Gambar Galeri 1"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/dok4.jpeg"
            alt="Gambar Galeri 2"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src="/images/galeri/dok5.jpeg"
            alt="Gambar Galeri 3"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <Banner />
      </div>
      <Footer />
    </>
  );
};

export default Activities;
