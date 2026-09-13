import TechnologyCard from "./TechnologyCard"

function TechnologyGrid({ technology, setSelectedCards }) {

  return (

    <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">

      {technology.map((tech) => {
        return <TechnologyCard
          key={tech.id}
          tech={tech}
          setSelectedCards={setSelectedCards}
        />
      })}

    </div>
  )
}

export default TechnologyGrid

