import React, { useState } from "react";
import CryptoJS from "crypto-js";

const PasswordForm3 = ({ hash, algorithm, googleFormUrl, entryId }) => {
  const [inputPassword, setInputPassword] = useState("");
  const [result, setResult] = useState("");

  const hashPassword = (password, algorithm) => {
    // Convert password to lowercase before hashing
    const lowercasedPassword = password.toLowerCase();

    switch (algorithm) {
      case "sha1":
        return CryptoJS.SHA1(lowercasedPassword).toString();
      case "sha512":
        return CryptoJS.SHA512(lowercasedPassword).toString();
      // Add more cases here for other algorithms if needed
      default:
        return lowercasedPassword; // Default to lowercase password if no valid algorithm is specified
    }
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop().split(";").shift());
  };
  

  const checkPassword = async () => {
    const inputHash = hashPassword(inputPassword, algorithm);
    if (inputHash === hash) {
      setResult("Correct!");

      // Retrieve name and email from cookies
      const name = getCookie("name");
      const email = getCookie("email");

      // Generate the "name-email" entryId
      const nameEmailEntryId = `${name}-${email}`;

      // Submit to Google Form
      const formData = new FormData();
      formData.append(entryId, nameEmailEntryId); 

      try {
        await fetch(googleFormUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors", // necessary due to google form CORS policy restriction
        });
        console.log("Submitted to Google Form successfully!");
      } catch (error) {
        console.error("Error submitting to Google Form:", error);
      }
    } else {
      setResult("Incorrect. Try again.");
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          checkPassword();
        }}
      >
        <input
          type="text"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          placeholder="Enter answer"
        />
        <button type="submit">Check</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default PasswordForm3;
