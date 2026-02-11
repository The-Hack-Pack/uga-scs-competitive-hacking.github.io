import React from 'react';
import Layout from '@theme/Layout';
import styles from './attendance.module.css';

export default function Attendance() {
  return (
    <Layout title="Attendance" description="Sign in for The Hack Pack meetings">
      <div className={styles.attendanceContainer}>
        <div className={styles.iframeCard}>
          <iframe
            src="https://form.thehackpack.org"
            title="The Hack Pack Meeting Attendance Form"
            className={styles.attendanceFrame}
            allowFullScreen
          />
        </div>
        <p className={styles.fallbackText}>
          If the form does not load,{' '}
          <a href="https://form.thehackpack.org" target="_blank" rel="noopener noreferrer">click here to open it in a new tab</a>.
        </p>
      </div>
    </Layout>
  );
}
