import React from 'react';
import Layout from '@theme/Layout';

export default function Schedule() {
  return (
    <Layout title="Schedule" description="View the schedule for The Hack Pack">
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Club Schedule</h1>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p>Stay updated with our meetings and competitions! This can also be viewed on our Discord.</p>
          <iframe
            src="https://outlook.office365.com/owa/calendar/c87c30d4328c4978b57b2a49f921bea1@uga.edu/befcc995deb845c89087771730d3a3f61397539605297869228/calendar.html"
            title="Hack Pack Club Schedule"
            style={{
              width: '100%',
              height: '600px',
              border: 'none',
              marginTop: '20px',
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
