import banner from "../../assets/banner-stack.png"

function Hero() {
  return (
    <div className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-10 lg:px-16 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:flex-row lg:justify-between">

        <div className="flex w-full flex-col gap-5 text-center lg:w-1/2 lg:items-start lg:text-left">

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-base leading-7 text-gray-700 sm:text-lg lg:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>


          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <button className="cursor-pointer rounded-md bg-linear-to-r from-orange-500 to-pink-500 px-5 py-3 transitionduration-200 hover:scale-105 hover:shadow-lg active:scale-95 ">
            Explore Technologies
            </button>

            <button className="cursor-pointer rounded-md border border-gray-300 px-5 py-3  transition duration-200 hover:border-pink-500 hover:text-pink-600 active:scale-95">
            Learn More
            </button>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2"> 
        <img src={banner} alt="Development stack" className="w-64 max-w-full sm:w-80 md:w-96 lg:w-112.5"/>
         </div>

      </div>
    </div>
  );
}

export default Hero;