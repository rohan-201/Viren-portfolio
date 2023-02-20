import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developer",
          "Working on Solana ecosystem .",
          "Video Editor ..",
          "Open Source Contributor ...",
          "Contributre in SuperteamDAO",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
