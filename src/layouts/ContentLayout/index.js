import React from "react";
import "./styles.css";

function ContentLayout({ children }) {
  return (
    <div className="contentLayout">
      <div className="contentLayout-container">{children}</div>
    </div>
  );
}

export default ContentLayout;
