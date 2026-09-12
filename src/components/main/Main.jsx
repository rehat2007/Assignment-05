import StackSidebar from "../Stack/StackSidebar"
import TechnologyGrid from "../Technology/TechnologyGrid"

const getTechnologies = async () => {
    try {
        const response = await fetch("/src/data/technologies.json");
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error("Error:", error);
    }
}


function Main() {
    return (
        <div className="px-20">
            <h2 className="text-3xl font-bold mb-1">Explore the <span className="text-pink-500">Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div className="flex justify-between mt-8">
                <TechnologyGrid technology={getTechnologies()} />
                <StackSidebar />
            </div>
        </div>
    )
}

export default Main