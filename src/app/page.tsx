export default function Home() {
  return (
    <div>
      {/* <h1 className='text-3xl font-semibold'>Welcome To Labira RAG Chat</h1>
      <h2 className="mt-5">Lets start Chatting. Select The Topic First</h2> */}
      {/* <div className="flex justify-center items-center">
          <div className="mt-5 text-5xl">About Us</div>
          <div>Penelitian ini </div>
      </div> */}

        {/* <div className="mt-4 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Cara Penggunaan : </h2>
          <p className="mt-4 text-lg">Select topik chatbot pada sidebar</p>
        </div> */}

      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Tentang Kami</h2>
          <p className="mt-4 text-lg">Penelitian ini bertujuan untuk mengembangkan chatbot yang dapat membantu anak-anak SD belajar dengan cara yang menyenangkan dan interaktif. Chatbot ini menggunakan metode RAG (Retrieval-Augmented Generation), yang memungkinkan chatbot untuk mencari informasi terbaik dari e-book pelajaran sebelum memberikan jawaban.</p>
          <p className="mt-2 text-lg">Menggunakan LLM open source dari Ollama untuk mendukung kemampuan dari chatbot ini.</p>
        </div>

        <div className="py-12 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold">Tim Pengembang</h2>
            {/* <p className="mt-4 text-lg text-gray-600">Kami adalah tim pengembang yang berkomitmen untuk menciptakan solusi teknologi yang membantu anak-anak belajar dengan cara yang menyenangkan dan efektif.</p> */}
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center">
                  <img src="/img/ldanuarta.jpg" alt="Developer" className="w-24 h-24 rounded-full object-cover border-2 border-gray-300" />
                </div>
                <h3 className="text-2xl text-gray-600 font-semibold mt-4">Leo Danuarta</h3>
                <p className="mt-2 text-gray-600">Developer</p>
                <p className="mt-4 text-gray-600">Teknik Informatika</p>
                <p className="text-gray-600">Universitas Tarumanagara</p>
              </div>

              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center">
                  <img src="/img/vcmawardi.jpg" alt="Developer" className="w-24 h-24 rounded-full object-cover border-2 border-gray-300" />
                </div>
                <h3 className="text-2xl text-gray-600 font-semibold mt-4">Viny Christanti Mawardi S.Kom., M.Kom.</h3>
                <p className="mt-2 text-gray-600">Supervisi Internal</p>
                <p className="mt-4 text-gray-600">Teknik Informatika</p>
                <p className="text-gray-600">Universitas Tarumanagara</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center">
                  <img src="/img/vlee.jpg" alt="Developer" className="w-24 h-24 rounded-full object-cover border-2 border-gray-300" />
                </div>
                <h3 className="text-2xl text-gray-600 font-semibold mt-4">Dr. Viciano Lee</h3>
                <p className="mt-2 text-gray-600">Supervisi Eksternal</p>
                <p className="mt-4 text-gray-600">Department of Mathematics</p>
                <p className="text-gray-600">City, University of London</p>
              </div>
            </div>
            
            <div className="mt-12">
            <h3 className="text-2xl font-semibold">Didukung Oleh</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4 flex justify-center">
              <img src="/img/MisiPaket.png" alt="Supported By Logo" className="w-72 h-auto object-contain" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}
