import React, { useState } from "react";
import "./App.css"; 
import FormComponent from "./FormComponent";
import ComicComponent from "./ComicComponent";

  function App() {
    const [imageUrls, setImageUrls] = useState({
      1: "radial-gradient(circle, white, lightgray)",
      2: "radial-gradient(circle, white, lightgray)",
      3: "radial-gradient(circle, white, lightgray)",
      4: "radial-gradient(circle, white, lightgray)",
      5: "radial-gradient(circle, white, lightgray)",
      6: "radial-gradient(circle, white, lightgray)",
      7: "radial-gradient(circle, white, lightgray)",
      8: "radial-gradient(circle, white, lightgray)",
      9: "radial-gradient(circle, white, lightgray)",
      10: "radial-gradient(circle, white, lightgray)",
    });
  return (
    <div className="App">
      <FormComponent setImageUrls={setImageUrls} imageUrls={imageUrls} />
      <ComicComponent imageUrls={imageUrls} />
    </div>
  );
}
export default App;
