import TechnologyCard from "./TechnologyCard"

function TechnologyGrid({props}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <TechnologyCard/>
      <TechnologyCard/>
      <TechnologyCard/>
    </div>
  )
}

export default TechnologyGrid