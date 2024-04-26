import React, { useState } from "react";

const Home = () => {
  // Initialize state with default colors
  const [colors1, setColors1] = useState(true);
  const [colors2, setColors2] = useState(true);
  const [colors3, setColors3] = useState(true);

  // Function to toggle color and shadow
  const toggleColor1 = () => {
    setColors1(!colors1);
  };

  const toggleColor2 = () => {
    setColors2(!colors2);
  };

  const toggleColor3 = () => {
    setColors3(!colors3);
  };



 return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="lightcontainer">
        <div className={`light ${colors1 ? "red" : "redshadow"}`} onClick={() => toggleColor1()}>
        </div>
        <div className={`light ${colors2 ? "yellow" : "yellowshadow"}`} onClick={() => toggleColor2()}>
        </div>
        <div className={`light ${colors3 ? "green" : "greenshadow"}`} onClick={() => toggleColor3()}>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
