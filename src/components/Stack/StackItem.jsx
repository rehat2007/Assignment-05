
function StackItem() {
  return (
    <div className="flex justify-between border border-gray-300 rounded-md p-3 mt-5 min-w-65 max-w-77">
      <div className="flex gap-2">
        <img src="/src/assets/React Icon - Colored - zonalogo.com.svg " alt="" className="w-10" />
        <div className="leading-4">
          <h3 className="font-bold">React</h3>
          <p className="text-xs"> Frontend</p>
        </div>
      </div>
      <button className="font-bold text-mauve-400 cursor-pointer">X</button>
    </div>
  )
}

export default StackItem