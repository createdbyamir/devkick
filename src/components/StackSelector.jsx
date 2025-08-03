function StackSelector({ selectedStack, setSelectedStack }) {
  const stacks = [
    { id: 1, name: "React" },
    { id: 2, name: "Tailwind CSS" },
    { id: 3, name: "Vite" },
  ];

  const toggleStack = (name) => {
    if (selectedStack.includes(name)) {
      setSelectedStack(selectedStack.filter((item) => item !== name));
    } else {
      setSelectedStack([...selectedStack, name]);
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Select your stack:</h2>
      <div className="flex flex-col gap-4">
        {stacks.map((stack) => (
          <label
            key={stack.id}
            className="cursor-pointer flex items-center justify-between bg-white border border-neutral-300 px-4 py-2 rounded shadow-sm hover:shadow transition"
          >
            <span>{stack.name}</span>
            <div className="relative w-10 h-6">
              <input
                type="checkbox"
                checked={selectedStack.includes(stack.name)}
                onChange={() => toggleStack(stack.name)}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-neutral-300 rounded-full peer-checked:bg-green-400 transition-colors"></div>
              <div className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow transform peer-checked:translate-x-4 transition-transform"></div>
            </div>

          </label>
        ))}
      </div>
    </div>
  );
}

export default StackSelector;
