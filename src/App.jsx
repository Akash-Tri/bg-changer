import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("skyblue");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-12 justify-center p-2 inset-x-0 rounded-full ">
        <div className="gap-3 flex flex-wrap justify-center shadow-lg rounded-full bg-white p-3">
          <button onClick={()=>setColor("red")}
            className="text-white rounded-full p-3 outline-none shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button onClick={()=>setColor("green")}
            className="text-white rounded-full p-3 outline-none shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button onClick={()=>setColor("blue")}
            className="text-white rounded-full p-3 outline-none shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button onClick={()=>setColor("yellow")}
            className="text-black rounded-full p-3 outline-none shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button onClick={()=>setColor("pink")}
            className="text-black rounded-full p-3 outline-none shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button onClick={()=>setColor("black")}
            className="text-white rounded-full p-3 outline-none shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
