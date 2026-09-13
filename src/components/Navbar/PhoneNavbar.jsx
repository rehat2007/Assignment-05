import { useState } from "react";

function PhoneNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative w-full bg-white px-4 py-2 border border-b-gray-300">
            <div className="relative flex h-12 items-center justify-between">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5">
                    <span className="h-0.5 w-8 rounded bg-gray-500" />
                    <span className="h-0.5 w-8 rounded bg-gray-500" />
                    <span className="h-0.5 w-8 rounded bg-gray-500" />
                </button>

                <div>
                    <img src="/src/assets/logo-text.png" alt="DevStack" className="" />
                </div>

                <div className="flex items-center gap-1">
                    <button className="px-2 text-sm font-semibold text-gray-700">  Sign In </button>
                    <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 active:scale-95"> Sign Up </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="py-4">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="hover:text-pink-600">Home</a>
                        <a href="#" className="hover:text-pink-600">Technologies</a>
                        <a href="#" className="hover:text-pink-600">Projects</a>
                        <a href="#" className="hover:text-pink-600">About</a>
                        <a href="#" className="hover:text-pink-600">Contact</a>
                    </div>
                </div>
            )}

        </div>
    );
}

export default PhoneNavbar;