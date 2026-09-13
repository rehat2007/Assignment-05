function TechnologyCard({ tech , setSelectedCards}) {

    const handleClick =()=>{
      const selectedCard = (cards) =>{
         const cardArr = [...cards , tech ] 
         return cardArr
      }
      setSelectedCards(selectedCard)
    }

    return (
        <div className="border border-gray-300 rounded-2xl p-5 min-w-65 max-w-77">

            <div className="flex justify-between">
                <img
                    src={tech.icon}
                    alt=""
                    className="w-7"
                />

                <p className="bg-blue-100 text-blue-500 px-3 rounded-2xl">
                    {tech.badge}
                </p>
            </div>

            <div className="my-5">
                <h3 className="font-bold mb-3">
                    {tech.name}
                </h3>

                <p>{tech.description}</p>
            </div>

            <div className="flex justify-between my-3 text-xs items-center">
                <p className="bg-gray-100 px-3 py-1 rounded-2xl">
                    {tech.category}
                </p>

                <p className="bg-gray-100 px-3 py-1 rounded-2xl">
                    {tech.difficulty}
                </p>

                <p>{tech.rating}</p>
            </div>

            <button onClick={handleClick} className="bg-black text-white w-full py-2 my-3 border rounded-xl cursor-pointer">
                Add to Stack
            </button>

        </div>
    );
}

export default TechnologyCard;
