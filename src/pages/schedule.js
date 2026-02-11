import React from 'react';
import Layout from '@theme/Layout';
import styles from './schedule.module.css';

export default function Schedule() {
  return (
    <Layout title="Schedule" description="View the schedule for The Hack Pack">
      <div className={styles.scheduleContainer}>
        <h1 className={styles.pageTitle}>Club Schedule</h1>
        <div className={styles.contentSection}>
          <p>Stay updated with our meetings and competitions! This can also be viewed on our Discord.</p>
          <div className={styles.iframeCard}>
            <iframe
              src="https://outlook.office365.com/owa/calendar/c87c30d4328c4978b57b2a49f921bea1@uga.edu/befcc995deb845c89087771730d3a3f61397539605297869228/calendar.html"
              title="Hack Pack Club Schedule"
              className={styles.scheduleFrame}
              allowFullScreen
            ></iframe>
          </div>
          <h1 className={styles.sectionTitle}>Meeting Location</h1>
          <p>SLC 145, 6:30-7:30 pm on Tuesdays.</p>
          <div className={styles.iframeCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d516.0999465428912!2d-83.37633412049067!3d33.9427907018308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f66ce2df7e4faf%3A0x89c9109eb414823c!2sScience%20Learning%20Center%2C%20130%20Carlton%20St%2C%20Athens%2C%20GA%2030602!5e1!3m2!1sen!2sus!4v1756056891358!5m2!1sen!2sus"
              title="Meeting Location"
              className={styles.mapFrame}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
}
