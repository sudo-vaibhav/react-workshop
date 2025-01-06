import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-center p-5 font-sans">
      <div
        className={`text-2xl m-5 ${
          count % 2 === 0 ? "text-green-600" : "text-blue-600"
        }`}
      >
        {count}
      </div>
      <div>{count % 2 === 0 ? "Even" : "Odd"}</div>
      <button
        onClick={() => setCount(count - 1)}
        className="px-5 py-2.5 m-1 text-base bg-gray-200 rounded"
      >
        -
      </button>
      <button
        onClick={() => setCount(count + 1)}
        className="px-5 py-2.5 m-1 text-base bg-gray-200 rounded"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
