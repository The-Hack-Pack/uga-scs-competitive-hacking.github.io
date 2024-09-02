import React, { useEffect, useState } from 'react';

// Function to get a cookie by name
const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const WebEasyChallenge = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [clickCount, setClickCount] = useState(0); // State to track cookie clicks

    // Check the cookie when the component mounts
    useEffect(() => {
        const adminCookie = getCookie('admin');
        if (adminCookie === 'true') {
            setIsAdmin(true);
        }
    }, []);

    // Function to handle cookie image click
    const handleCookieClick = () => {
        setClickCount(clickCount + 1); // Increment the click count
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2em', textAlign: 'center' }}>
            {isAdmin ? (
                <div>
                    <h1>Welcome, Admin!</h1>
                    <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>&#x54;&#x48;&#x50;&#x7b;&#x73;&#x75;&#x70;&#x65;&#x72;&#x5f;&#x63;&#x6f;&#x6f;&#x6b;&#x69;&#x65;&#x5f;&#x39;&#x32;&#x37;&#x35;&#x7d;</p>
                    <div style={{ marginTop: '1em' }}>
                        <img
                            src="https://www.thebakingchocolatess.com/wp-content/uploads/2016/04/ebKkMdBw-2.jpg"
                            alt="Mega Cookie"
                            style={{ width: '300px', height: 'auto', marginBottom: '1em'}}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Access Denied</h1>
                    <p>You must be an admin to view this content.</p>
                    <p>Here's a cookie clicker for fun.</p>
                    {/* Cookie Clicker */}
                    <div style={{ marginTop: '1em' }}>
                        <img
                            src="https://play-lh.googleusercontent.com/OssE3ON9WsLZedOF39UCgtIHcRYfV0OqQS9O78LfmRdxSyKdHX52G2OFa0LkG6D-k9w"  // Cookie image
                            alt="Cookie"
                            style={{ width: '300px', height: 'auto', marginBottom: '1em', cursor: 'pointer' }}
                            onClick={handleCookieClick} // Handle cookie click
                        />
                        <p>Cookie Clicks: {clickCount}</p> {/* Display click count */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WebEasyChallenge;
