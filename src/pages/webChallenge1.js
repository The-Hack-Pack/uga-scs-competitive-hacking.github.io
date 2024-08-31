// CombinedChallenge.js
import React, { useEffect } from 'react';

// Function to set a cookie
const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

function CombinedChallenge() {
    useEffect(() => {
        const encodedFlag2 = "VEhQe2Nvb2tpZV9tb25zdGVyfQ==";
        setCookie("flag_2", encodedFlag2, 7);
    }, []);

    return (
        <div style={{ padding: '2em', textAlign: 'center' }}>
            <h1>Welcome to the Web App Challenge!</h1>
            <p>This challenge contains two flags. Can you find both?</p>
            <p>Both flags are hidden on this page. Look closely!</p>
            <p>Hint for Flag 1:</p>
            <img 
                   src="https://i.imgflip.com/920ozn.jpg" 
                   alt="Flag 1: THP{flags_in_disguise}"
                   style={{ width: '300px', height: 'auto', marginBottom: '1em' }}
               />
            <p>Hint for Flag 2:</p>
            <img 
                   src="https://todaysmama.com/.image/t_share/MTU5OTEwMzkyMDIyMTE1NzAz/cookie-monster.png" 
                   alt="Cookie Monster"
                   style={{ width: '200px', height: 'auto', marginBottom: '1em' }}
               />

            <p>Good luck finding both flags!</p>
        </div>
    );
}

export default CombinedChallenge;
