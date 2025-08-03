import StackSelector from "./components/StackSelector";
import CommandOutput from "./components/CommandOutput";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  return (
<div className="min-h-screen flex flex-col items-center justify-start p-8 bg-neutral-100 text-neutral-900 pt-24">

      <h1 className="text-4xl font-bold mb-8">DevKick</h1>

      <div className="w-full max-w-xl space-y-6">
        <StackSelector selectedStack={selectedStack} setSelectedStack={setSelectedStack} />

        <CommandOutput selectedStack={selectedStack} />
      </div>
    </div>
  );
}


export default App;
