import React, { useState } from "react";

const Home = () => {
 
  const [selectedLight, setSelectedLight] = useState(null);

  const handleClick = (light) => {
    setSelectedLight(selectedLight === light ? null : light);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="lightcontainer">
        <div
          className={`light ${selectedLight === "red" ? "redshadow" : "red"}`}
          onClick={() => handleClick("red")}
        ></div>
        <div
          className={`light ${selectedLight === "yellow" ? "yellowshadow" : "yellow"}`}
          onClick={() => handleClick("yellow")}
        ></div>
        <div
          className={`light ${selectedLight === "green" ? "greenshadow" : "green"}`}
          onClick={() => handleClick("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;