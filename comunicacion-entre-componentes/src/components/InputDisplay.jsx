function InputDisplay({ onChange }) {
  return (
    <form className="flex flex-col gap-4 w-1/2">
      <label htmlFor="message" className="text-2xl font-semibold">
        Mensaje
      </label>

      <input
        type="text"
        name="message"
        id="message"
        onChange={onChange}
        placeholder="Escribí algo..."
        className="p-3 rounded-lg text-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ring-2 break-words placeholder:text-gray-500"
      />
    </form>
  );
}

export default InputDisplay;
