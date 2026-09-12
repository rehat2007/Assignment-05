import EmptyStack from "./EmptyStack";
import StacButton from "./StacButton";
import StackItem from "./StackItem";

function StackSidebar() {
  const stackItenAvaiable = true;
  return (
    <div className="border border-gray-300 rounded-2xl h-fit p-5">
      <h2 className="font-bold">Your Stack </h2>
      <p>No technologies selected yet.</p>
      {stackItenAvaiable ?
        <>
          <StackItem />
          <StackItem />
          <StackItem />
          <StackItem />
          <StackItem />
          <StackItem />
          <StackItem />
          <StacButton />
        </> :
        <EmptyStack />}

    </div>
  )
}

export default StackSidebar