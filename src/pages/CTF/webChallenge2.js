import React, { useEffect } from "react";

const HiddenFlag = () => {
  useEffect(() => {
    const handleRightClick = (event) => {
      event.preventDefault();
      alert("Right-clicking is disabled! Maybe try inspecting the element some other way? 🤔");
    };

    document.addEventListener("contextmenu", handleRightClick);

    console.log("%cHmm... Nothing suspicious here... 🤔", "color: gray; font-size: 14px;");
    console.log("%cFlag 2: THP{console_secrets_4829}", "color: green; font-size: 16px; font-weight: bold;");

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Nothing to see here...</h2>
      <img
        src="https://static.vecteezy.com/system/resources/previews/004/586/124/original/lock-cyber-security-padlock-with-keyhole-icon-made-with-binary-code-protect-and-security-or-safe-concept-illustrates-cyber-data-security-or-information-privacy-idea-illustration-vector.jpg"
        alt="Flag 1: THP{inspect_element_5913}"
        style={{ width: "355px", height: "200px" }}
      />
    </div>
  );
};

export default HiddenFlag;
