
function TechnologyCard() {
    return (
        <div className="border border-gray-300 rounded-2xl p-5 min-w-65 max-w-77">
            <div className="flex justify-between">
                <img src="/src/assets/React Icon - Colored - zonalogo.com.svg" alt="" className="w-7" />
                <p className="bg-blue-100 text-blue-500 px-3 rounded-2xl ">React</p>
            </div>
            <div className="my-5">
                <h3 className="font-bold mb-3">React</h3>
                <p>A declarative, component-based
                    JavaScript library for building modern user
                    interfaces. </p>
            </div>
            <div className="flex justify-between my-3 text-xs items-center">
                <p className="bg-gray-100 px-3 py-1 rounded-2xl " >Frontend</p>
                <p className="bg-gray-100 px-3 py-1 rounded-2xl " >Beginner-Friendly</p>
                <p>4.9</p>
            </div>
            <button className="bg-black text-white w-full py-2 my-3 border rounded-xl cursor-pointer">Add to Stack</button>
        </div>
    )
}

export default TechnologyCard
