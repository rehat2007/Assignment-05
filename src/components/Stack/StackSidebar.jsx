import EmptyStack from "./EmptyStack";
import StacButton from "./StacButton";
import StackItem from "./StackItem";

function StackSidebar({ selectedCards, setSelectedCards, clearStack }) {
  const removeCard = (id) => {
    setSelectedCards((previousCards) =>
      previousCards.filter((card) => card.id !== id)
    );
  };

  const stackItemAvailable = selectedCards.length > 0;

  return (
    <div className="border border-gray-300 rounded-2xl h-fit p-5 ">
      <h2 className="font-bold text-lg">
        Your Stack
      </h2>

      {stackItemAvailable ? (
        <>
          <div>
            {selectedCards.map((card) => (
              <StackItem
                key={card.id}
                data={card}
                removeCard={removeCard}
              />
            ))}
          </div>
          <StacButton clearStack = {clearStack} />
        </>
      ) : (
        <>
          <p className="text-sm text-gray-500 mt-2">
            No technologies selected yet.
          </p>

          <EmptyStack />
        </>
      )}
    </div>
  );
}

export default StackSidebar;