function OutputDisplay({ message }) {
  return (
    <section className="flex flex-col w-1/2 bg-gray-700 rounded-xl p-6 h-full justify-center">
      <h2 className="text-2xl font-semibold mb-4 text-blue-300">
        Salida del mensaje
      </h2>
        <p className="text-lg bg-gray-800 p-4 rounded-md min-h-[60px] break-words">
        {message.length === 0
          ? "No se ha ingresado texto todavía..."
          : message}
        </p>
    </section>
  );
}

export default OutputDisplay;
