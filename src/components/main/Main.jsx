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
        <div>
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div className="flex gap-5 justify-center">
                <TechnologyGrid technology={getTechnologies()} />
                <StackSidebar />
            </div>
        </div>
    )
}

export default Main