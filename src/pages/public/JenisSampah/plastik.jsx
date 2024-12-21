import React from 'react';

function JenisSampah() {
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
          style={{ marginTop: '80px' }} // Adjust margin top to position the button lower
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
        <h3 className="text-xl text-center text-gray-600 mt-2 ml-16">Plastik</h3> {/* Changed to Plastik */}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center items-center px-4 ml-16">
          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Kantong Plastik')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/kantongplastik.jpg"
              alt="Kantong Plastik"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Kantong Plastik</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Botol Plastik')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/botolplastik.jpg"
              alt="Botol Plastik"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Botol Plastik</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Gelas Plastik')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/gelasplastik.jpg"
              alt="Gelas Plastik"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Gelas Plastik</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Ember')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/ember.jpg"
              alt="Ember"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Ember</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Galon')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/galon.jpg"
              alt="Galon"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Galon</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Wadah Makan Plastik')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/wadahmakanplastik.jpg"
              alt="Wadah Makan Plastik"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Wadah Makan Plastik</p>
          </div>

          <div className="flex flex-col items-center text-center" onClick={() => showAlert('Alat Makan Plastik')}>
            <img
              src="/images/Jenis Sampah/PLASTIK/alatmakanplastik.jpg"
              alt="Alat Makan Plastik"
              className="w-full h-72 object-cover rounded-lg"
            />
            <p className="mt-2 text-lg font-semibold text-gray-700">Alat Makan Plastik</p>
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

export default JenisSampah;
