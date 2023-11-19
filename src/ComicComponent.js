import React from "react";
// import html2canvas from "html2canvas";
import "./styles2.css";

const ComicComponent = (props) => {
  return (
    <div className="comic">
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[1]}` }}
      >
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[2]}` }}
      ></div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[3]}` }}
      ></div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[4]}` }}
      >
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[5]}` }}
      ></div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[6]}` }}
      >
      </div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[7]}` }}
      ></div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[8]}` }}
      ></div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[9]}` }}
      ></div>
      <div
        className="panel"
        style={{ backgroundImage: `${props.imageUrls[10]}` }}
      >
        <p className="text bottom-right">The End</p>
      </div>
    </div>
  );
};

export default ComicComponent;
