import React, { useState, useEffect } from 'react';
import "../css/DiscordPrompt.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

const TWO_WEEKS_IN_MS = 14 * 24 * 60 * 60 * 1000;

const DiscordPrompt = () => {
    const [show, setShow] = useState(false);
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const visitCount = parseInt(localStorage.getItem('visitCount') || '0');
        const lastClosed = parseInt(localStorage.getItem('lastClosed') || '0');
        const currentTime = new Date().getTime();

        if (visitCount >= 1 && (currentTime - lastClosed > TWO_WEEKS_IN_MS || !lastClosed)) {
            setShow(true);
        }

        localStorage.setItem('visitCount', visitCount + 1);
    }, []);

    const handleClose = () => {
        localStorage.setItem('lastClosed', new Date().getTime());
        setHide(true);
        setTimeout(() => setShow(false), 500);
    };

    const handleJoin = () => {
        localStorage.setItem('lastClosed', new Date().getTime());
    };

    if (!show) return null;

    return (
        <div className={`discord-prompt ${hide ? 'hide' : ''}`}>
            <div className="content">
                <p><strong>Want to be part of UGA's hacking community?</strong> Join our Discord to connect, share ideas, and collaborate with others!</p>
                <div className="discord-buttons">
                    <a href="http://discord.thehackpack.org" target="_blank" rel="noopener noreferrer" className="discord-button" onClick={handleJoin}>
                        <img
                            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/653714c1f22aef3b6921d63d_636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
                            alt="Discord" height="20" />
                        <strong>Join Server</strong>
                    </a>
                    <button className="close-button" onClick={handleClose}>✕</button>
                </div>
            </div>
        </div>
    );
};

export default () => (
    <BrowserOnly>
        {() => <DiscordPrompt />}
    </BrowserOnly>
);