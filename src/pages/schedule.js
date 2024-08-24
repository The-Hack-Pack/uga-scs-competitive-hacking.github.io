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
              marginBottom: '40px',
            }}
            allowFullScreen
          ></iframe>
          <h1>Meeting Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.92331614354768!2d-83.37469977581145!3d33.9465924479591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66ce3e5a7d31d%3A0x9042b5285e207cb1!2sParking%20lot%2C%20200%20D.%20W.%20Brooks%20Drive%2C%20Athens%2C%20GA%2030602!5e1!3m2!1sen!2sus!4v1724460394577!5m2!1sen!2sus"
            title="Meeting Location"
            style={{
              width: '100%',
              height: '450px',
              border: 'none',
              marginTop: '20px',
              marginBottom: '40px',
            }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
