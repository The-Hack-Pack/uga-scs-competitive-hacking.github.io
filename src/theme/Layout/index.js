import React from 'react';
import Layout from '@theme-original/Layout';
import DiscordPrompt from "../../components/DiscordPrompt";

function LayoutWrapper(props) {
    return (
        <>
            <DiscordPrompt />
            <Layout {...props} />
        </>
    );
}

export default LayoutWrapper;