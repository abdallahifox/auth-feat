import React from "react";
import Github from "./UI/github";
import LinkedIn from "./UI/LinkedIn";
function SocialNav() {
  return (
    <div className="container center-align" style={{ marginTop: "20px" }}>
      <Github width="26" hight="26" />
      <LinkedIn width="26" hight="26" />
    </div>
  );
}

export default SocialNav;
