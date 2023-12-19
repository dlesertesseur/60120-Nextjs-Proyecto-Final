"use client";
const ProductCounter = ({ setValue, value, disabled }) => {
  const increase = () => {
    setValue(value + 1);
  };

  const decreate = () => {
    if (value >= 2) {
      setValue(value - 1);
    }
  };

  return (
    <div
      className={
        "flex justify-between w-32 p-1 border-2 border-gary-200 rounded-sm"
      }
    >
      <button
        disabled={disabled}
        className={`text-center ${disabled ? "text-gray-500" : "text-white"} ${
          disabled ? "bg-gray-300" : "bg-blue-500"
        } rounded-sm text-xl w-8 h-8`}
        onClick={increase}
      >
        {"+"}
      </button>
      <div className="text-center text-xl">{value}</div>
      <button
        disabled={disabled}
        className={`text-center ${disabled ? "text-gray-500" : "text-white"} ${
          disabled ? "bg-gray-300" : "bg-blue-500"
        } rounded-sm text-xl w-8 h-8`}
        onClick={decreate}
      >
        {"-"}
      </button>
    </div>
  );
};

export default ProductCounter;
