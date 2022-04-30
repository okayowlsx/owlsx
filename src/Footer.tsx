import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const [currentYear] = useState(new Date().getFullYear());
  return (
    <div className="footerDiv">
      <h4 className="copyright">
        <span className="gradTextFancyFontPinkFooter">
          <i>Copyright &#169; {currentYear} </i>
        </span>
        <span className="gradTextFancyFontPinkFooter">
          {" "}
          <i>OKAY OWLS 🦉</i>
        </span>
      </h4>

      {/* <a href="https://discord.gg/akncVEYvRW" className="discord"> */}
      {/* <FontAwesomeIcon icon={["fab", "github"]} size="2x" color="gold" /> */}
      {/* </a> */}
      {/* <a href="https://twitter.com/SolQueensNFT" className="twitter"> */}
      {/* <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" color="gold" /> */}
      {/* </a> */}
    </div>
  );
}
