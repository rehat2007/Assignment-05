
function Hero() {
    return (
        <div className="flex justify-between items-center px-20 w-full">
            <div className="flex flex-col gap-6 ">
                <h1 className="text-5xl font-bold">
                    Build Your Ideal
                    <span className="block bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>

                </h1>
                <p>
                    Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.
                </p>
                <div className="flex gap-5 mt-5">
                    <button className="cursor-pointer py-2 px-5 rounded-md text-white bg-linear-to-r from-orange-500 to-pink-500">Explore Technologies</button>
                    <button className="cursor-pointer border border-gray-300 py-2 px-5 rounded-md ">Learn More</button>
                </div>
            </div>
            <div className="flex justify-center items-center w-fit">
                <img src="/src/assets/banner-stack.png" alt="" />
            </div>
        </div>
    )
}

export default Hero