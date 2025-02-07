import React from 'react';
import Info from '@theme-original/BlogPostItem/Header/Info';
import { FeelbackPulse, PRESET_PULSE_HEART } from "@feelback/react";


export default function InfoWrapper(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Info {...props} />
      <div style={{ marginLeft: "0.4em" }}>
        <FeelbackPulse contentSetId="13b95a5f-3c78-4212-8749-0f9203c9ebe0"
            preset={PRESET_PULSE_HEART} 
            showCount
        />
      </div>
    </div>
  );
}