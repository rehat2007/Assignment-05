import logo from "../../assets/logo-text.png"

function DextopNavbar() {
    return (
        <div className="flex justify-between w-full items-center border-b border-gray-300 bg-white px-6 py-4 lg:px-20">
            <img src={logo} alt="DevStack" className="w-36" />
            <div className=" flex items-center gap-7 font-semibold">
                <a href="#" className="text-pink-600 transition hover:text-pink-700" > Home </a>
                <a href="#" className="transition hover:text-pink-600">Technologies </a>
                <a href="#" className="transition hover:text-pink-600"> Projects </a>
                <a href="#" className="transition hover:text-pink-600"> About </a>
                <a href="#" className="transition hover:text-pink-600">Contact </a>
            </div>

            <div className="flex items-center gap-3">
                <button className="cursor-pointer px-4 py-2 font-medium text-gray-700 transition hover:text-pink-600">Sign In </button>
                <button className="cursor-pointer rounded-full bg-pink-600 px-5 py-2 font-medium text-white transition duration-200 hover:bg-pink-700 hover:shadow-md active:scale-95">Sign Up</button>
            </div>
        </div>
    )
}

export default DextopNavbar;