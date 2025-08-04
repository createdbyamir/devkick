import { useState } from 'react';

function CommandOutput({ selectedStack }) {
  const [copied, setCopied] = useState(false);

  const hasReact = selectedStack.includes("React");
  const hasTailwind = selectedStack.includes("Tailwind CSS");
  const hasVite = selectedStack.includes("Vite");

  let command = "";

  if (selectedStack.length === 0) {
    return (
      <div className="min-h-[140px] transition-all duration-300 flex items-center">
        <strong>Please select at least one option</strong>
      </div>
    );
  }

  if (hasTailwind && !hasReact && !hasVite) {
    command = "npm install tailwindcss";
  } else {
    command = "npm create vite@latest my-app";
    if (hasReact) {
      command += " --template react";
    }
    command += " && cd my-app";
    if (hasTailwind) {
      command += " && npm install -D tailwindcss";
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-4 min-h-[140px] transition-all duration-300 flex flex-col">
      <pre className="bg-neutral-900 text-white font-mono p-4 rounded overflow-x-auto whitespace-pre-wrap break-words">
        {command}
      </pre>

      <button
        onClick={handleCopy}
        className="mt-2 self-start bg-neutral-800 text-white px-3 py-1 rounded hover:bg-neutral-700"
      >
        {copied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
}

export default CommandOutput;
