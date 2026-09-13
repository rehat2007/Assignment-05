import TechnologyCard from "./TechnologyCard"

function TechnologyGrid({ technology , setSelectedCards}) {
  
  return (
    <div className="grid grid-cols-3 gap-10">
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

export default TechnologyGrid;

