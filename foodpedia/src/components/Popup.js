import React from "react";

const Popup = (props) => {
  return (
    <div className="popup">
      <div className="popupInfo">
        <img src={props.image} />
        <div className="popupText">
          <h3>{props.d1}</h3>
          <h3>{props.d2}</h3>
          <h3>{props.d21}</h3>
          <h3>{props.d222}</h3>
          <h3>{props.d3}</h3>
        </div>
        <button onClick={props.onclick}>Continue</button>
      </div>
    </div>
  );
};

export default Popup;
