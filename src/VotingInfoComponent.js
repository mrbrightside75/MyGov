import React, { useEffect } from "react";

const VotingInfoTool = () => {
  // Function to initialize the Voting Information Tool
  const initVIT = () => {
    const config = {
      logo: { type: "default" },
      "official-only": false,
    };

    if (typeof window.vit !== "undefined") {
      window.vit.core.init("_vit", config);
    } else {
      setTimeout(initVIT, 500);
    }
  };

  // Function to load the external script
  const loadScript = () => {
    if (
      !document.querySelector(
        'script[src="https://votinginfotool.org/js/compiled/app.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://votinginfotool.org/js/compiled/app.js";
      script.async = true;
      script.onload = initVIT;
      document.body.appendChild(script);
    } else {
      initVIT();
    }
  };

  // useEffect to handle loading the script and component lifecycle
  useEffect(() => {
    loadScript();

    // Cleanup function to handle component unmounting
    return () => {
      // Add any necessary cleanup here if the external script modifies the DOM
    };
  }, []);

  return (
    <div
      id="vit-size-contaner"
      className="vit-size-container"
      style={{ width: "100%", height: "100%" }}
    >
      <div id="_vit"></div>
    </div>
  );
};

export default VotingInfoTool;
