import EmptyStack from "./EmptyStack";
import StackItem from "./StackItem";

function StackSidebar() {
  const stackItenAvaiable = true ;
  return (
    <div>
        <h2>Your Stack </h2>
        <p>No technologies selected yet.</p>
        {stackItenAvaiable ? <StackItem/> : <EmptyStack/>}
    </div>
  )
}

export default StackSidebar