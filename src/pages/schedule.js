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
              marginTop: '10px',
              marginBottom: '40px',
            }}
            allowFullScreen
          ></iframe>
          <h1>Meeting Location</h1>
          <p>Poultry Science 0125, 6-7 pm on Tuesdays.</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208.47752932355164!2d-83.3745110700088!3d33.9467143083355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66d6c389c7577%3A0x71e832f7814d669!2sPoultry%20Science%20Building!5e1!3m2!1sen!2sus!4v1724461054314!5m2!1sen!2sus"
            title="Meeting Location"
            style={{
              width: '100%',
              height: '450px',
              border: 'none',
              marginTop: '10px',
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
