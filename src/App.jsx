import StackSelector from "./components/StackSelector";
import CommandOutput from "./components/CommandOutput";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [selectedStack, setSelectedStack] = useState([]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-100 text-neutral-900">
      

      <main className="flex-grow flex items-center justify-center pt-24 px-4">
        <div className="w-full max-w-xl space-y-6">
          <Header />
          <StackSelector selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
          <CommandOutput selectedStack={selectedStack} />
        </div>
      </main>

      <Footer />
    </div>
  );
}



export default App;
