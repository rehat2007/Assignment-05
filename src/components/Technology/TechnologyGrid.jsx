import TechnologyCard from "./TechnologyCard"

function TechnologyGrid({ technology, setSelectedCards , tostNotification }) {

  return (

    <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">

      {technology.map((tech) => {
        return <TechnologyCard
          key={tech.id}
          tech={tech}
          setSelectedCards={setSelectedCards}
          tost = {tostNotification}
        />
      })}

    </div>
  )
}

export default TechnologyGrid

