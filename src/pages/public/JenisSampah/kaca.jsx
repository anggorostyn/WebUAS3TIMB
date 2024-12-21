import React from 'react';

function Kaca() {
  const goBack = () => {
    window.history.back();
  };

  const showAlert = (itemName) => {
    alert(`Anda mengklik jenis sampah: ${itemName}`);
  };

  return (
    <div className="bg-green-50 font-sans min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={goBack}
          className="flex items-center text-green-600 space-x-2 p-4"
          style={{ marginTop: '80px' }}
        >
          <div className="flex items-center justify-center w-8 h-8 border-2 border-green-600 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg font-medium text-black">Kembali</span>
        </button>
      </div>

      {/* Title */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mt-8 ml-16">Jenis Sampah</h2>
        <h3 className="text-xl text-center text-gray-600 mt-2 ml-16">Kaca</h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center items-center px-4 ml-16">
          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Botol Kaca')}>
            <img
              src="/images/Jenis Sampah/KACA/botolkaca.jpg"  // Correct image path
              alt="Botol Kaca"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Botol Kaca</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Gelaskaca')}>
            <img
              src="/images/Jenis Sampah/KACA/gelaskaca.jpg"  // Correct image path
              alt="Gelaskaca"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Gelaskaca</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Botol Parfum Kaca')}>
            <img
              src="/images/Jenis Sampah/KACA/botolparfumkaca.jpg"  // Correct image path
              alt="Botol Parfum Kaca"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Botol Parfum Kaca</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Pecahan Cermin')}>
            <img
              src="/images/Jenis Sampah/KACA/pecahancermin.jpg"  // Correct image path
              alt="Pecahan Cermin"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Pecahan Cermin</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Lampu Bohlam')}>
            <img
              src="/images/Jenis Sampah/KACA/lampubohlam.jpg"  // Correct image path
              alt="Lampu Bohlam"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Lampu Bohlam</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-4 text-gray-600 text-center ml-16">
        &copy; 2024 RESIKEL. All rights reserved.
      </footer>
    </div>
  );
}

export default Kaca;
