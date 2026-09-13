import { useEffect, useState } from "react";

import StackSidebar from "../Stack/StackSidebar";
import TechnologyGrid from "../Technology/TechnologyGrid";

const getTechnologies = async () => {
  try {
    const response = await fetch("/src/data/technologies.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

function Main() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    const loadTechnologies = async () => {
      const data = await getTechnologies();
      setTechnologies(data);
    };

    loadTechnologies();
  }, []);

  const clearStack = () => {
    setSelectedCards([]);
  };

  return (
    <div className="w-full text-center px-4 py-8 sm:px-6 sm:py-16 md:px-10 lg:px-16">

      <h2 className="mb-1 text-3xl font-bold sm:text-4xl">
        Explore the{" "}
        <span className="text-pink-500">Technologies</span>
      </h2>

      <p className="text-sm sm:text-base">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-15 flex flex-col gap-8 lg:flex-row lg:justify-between">

        <TechnologyGrid
          technology={technologies}
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
        />

        <StackSidebar
          selectedCards={selectedCards}
          setSelectedCards={setSelectedCards}
          clearStack={clearStack}
        />

      </div>

    </div>
  );
}

export default Main;
