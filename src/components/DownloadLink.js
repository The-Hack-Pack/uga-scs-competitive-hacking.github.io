import React from 'react';

export default function DownloadLink({ file, children }) {
  return (
    <a href={`/${file}`} download>
      {children}
    </a>
  );
}
