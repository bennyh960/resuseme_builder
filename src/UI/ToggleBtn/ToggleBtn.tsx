const ToggleButton = ({ checked, onChange }: { checked: boolean; onChange: () => void }) => {
  return (
    <button
      onClick={onChange}
      className={`relative w-12 h-6 flex items-center rounded-full p-1 transition duration-300 cursor-pointer ${
        checked ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition duration-300 ${
          checked ? "translate-x-6" : "translate-x-0"
        }`}
      ></span>
    </button>
  );
};

export default ToggleButton;
