import React from "react";

export function Loading({ w, h }) {
  return (
    <div className="loading">
      <p>Hang in there...</p>
      <img
        src={require("../assets/loading.gif")}
        alt="loading-animation"
        width={w ? w : "200px"}
        height={h ? h : "auto"}
      />
    </div>
  );
}

export function Error({ w, h }) {
  return (
    <div className="loading">
      <h2>Unfortunately, there was an error.</h2>
      <p>That's all I can tell, for now.</p>
    </div>
  );
}
