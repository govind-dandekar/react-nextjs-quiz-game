import Image from "next/image";

function Home() {
  return (
    // global container
    <body className="flex items-center justify-center min-h-screen bg-cyan-50">
      {/* card container */}
      <div className="bg-cyan-400 m-3 shadow-2xl rounded-2xl px-60 pb-40 pt-20">
        {/* image container */}
        <div className="flex justify-center">
          <Image
            src="/bluey.png"
            width={64}
            height={100}
            alt="bluey character"
          />
        </div>
        {/* welcome text container*/}
        <div className="text-white text-5xl text-center space-y-4 text-nowrap mt-8">
          <p>Welcome To...</p>
          <p>The Bluey Quiz Game!!!</p>
        </div>
        {/* start button*/}
        <div className="text-white text-center mt-12 text-2xl">
          <button className="bg-cyan-700 py-3 px-8 rounded-2xl hover:bg-cyan-900 hover:scale-110 transition delay-100 duration-300">
            Click Here To Play!
          </button>
        </div>
      </div>
    </body>
  );
}

export default Home;
