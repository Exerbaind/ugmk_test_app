import React from "react";
import "./styles.css";

function CenteredLayout({ children }) {
  return (
    <div className="centeredLayout">
      <div className="centeredLayout-container">{children}</div>
    </div>
  );
}

export default CenteredLayout;
