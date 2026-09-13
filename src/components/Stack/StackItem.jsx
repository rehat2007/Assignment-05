function StackItem({ data, removeCard }) {
  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-md p-3 mt-5 min-w-65 max-w-77">
      
      {/* Technology information */}
      <div className="flex items-center gap-2">
        <img
          src={data.icon}
          alt={data.name}
          className="w-10 h-10 object-contain"
        />

        <div className="leading-4">
          <h3 className="font-bold">
            {data.name}
          </h3>

          <p className="text-xs">
            {data.category}
          </p>
        </div>
      </div>

      {/* Remove button */}
      <button
        type="button"
        onClick={() => removeCard(data.id)}
        className="font-bold text-mauve-400 cursor-pointer"
        aria-label={`Remove ${data.name}`}
      >
        X
      </button>

    </div>
  );
}

export default StackItem;
