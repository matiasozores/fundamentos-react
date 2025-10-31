import { useState } from "react";
import InputDisplay from "../components/InputDisplay";
import OutputDisplay from "../components/OutputDisplay";

function HomePage() {
  const [message, setMessage] = useState("");

  function handleInputChange(event) {
    setMessage(event.target.value);
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Comunicación entre Componentes
      </h1>

      <div className="flex flex-row gap-8 bg-gray-800 rounded-2xl shadow-lg p-10 w-[800px] h-[400px] items-center justify-between">
        <InputDisplay onChange={handleInputChange} />
        <OutputDisplay message={message} />
      </div>
    </main>
  );
}

export default HomePage;
