import React from 'react';

function Khusus() {
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
        <h3 className="text-xl text-center text-gray-600 mt-2 ml-16">Khusus</h3>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center items-center px-4 ml-16">
          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Baterai Bekas')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/bateraibekas.jpg"  // Correct image path
              alt="Baterai Bekas"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Baterai Bekas</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Cat')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/cat.jpg"  // Correct image path
              alt="Cat"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Cat</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Pestisida')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/pestisida.jpg"  // Correct image path
              alt="Pestisida"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Pestisida</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Jarum Suntik')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/jarumsuntik.jpg"  // Correct image path
              alt="Jarum Suntik"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Jarum Suntik</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Masker Medis')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/maskermedis.jpg"  // Correct image path
              alt="Masker Medis"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Masker Medis</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Sarung Tangan Medis')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/sarungtanganmedis.jpg"  // Correct image path
              alt="Sarung Tangan Medis"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Sarung Tangan Medis</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Obat-obatan Kadaluarsa')}>
            <img
              src="/images/Jenis Sampah/KHUSUS/obatobatankadaluarsa.jpg"  // Correct image path
              alt="Obat-obatan Kadaluarsa"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Obat-obatan Kadaluarsa</p>
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

export default Khusus;
