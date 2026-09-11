
function Hero() {
    return (
        <div className="flex justify-around items-center px-10 w-full">
            <div className="flex flex-col gap-6 ">
                <h1 className="text-5xl font-bold">
                    Build Your Ideal
                    <span className="block">
                        Development Stack
                    </span>

                </h1>
                <p>
                    Explore frontend, backend, database, and tooling options,<br />
                    compare them side by side, and put together the stack that fits your <br />
                    next project.
                </p>
                <div className="flex gap-5">
                    <button>Explore Technologies</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div className="flex justify-center items-center w-fit">
                <img src="/src/assets/banner-stack.png" alt="" />
            </div>
        </div>
    )
}

export default Hero