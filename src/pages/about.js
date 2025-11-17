import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout title="About" description="Learn more about The Hack Pack">
      <div className={styles.aboutContainer}>
        <h1 className={styles.pageTitle}>About The Hack Pack</h1>
        <div className={styles.introSection}>
          <p>
            The Hack Pack is the University of Georgia's official <strong>competitive and practical cybersecurity club</strong>. We are a vibrant community of students passionate about all aspects of security, from network defense to penetration testing and everything in between.
          </p>
          <p>
            Whether you're a seasoned professional or someone new to cybersecurity, you've found your home. We welcome <strong>all UGA students</strong> regardless of experience level and provide hands-on training, competitive opportunities, and career-readiness resources.
          </p>
          <p>
            Our philosophy is centered around <strong>hands-on learning</strong> through weekly training sessions, practice challenges, team-based competitions, and detailed writeups. We create a supportive environment where you can learn, grow, and challenge yourself alongside fellow cybersecurity enthusiasts.
          </p>
        </div>
        <h1 className={styles.sectionTitle}>Meet The Officers</h1>
        <div className={styles.officersGrid}>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/divesh.webp').default} alt="Divesh Gupta" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/divesh2027/" target="_blank"><strong>Divesh Gupta</strong></a></p>
              <p className={styles.officerRole}>President</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/ethan.webp').default} alt="Ethan Mund" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/ethan-mund227/" target="_blank"><strong>Ethan Mund</strong></a></p>
              <p className={styles.officerRole}>Vice President</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/garrett.webp').default} alt="Garrett Moore" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/garrett-moore-/" target="_blank"><strong>Garrett Moore</strong></a></p>
              <p className={styles.officerRole}>Training Coordinator</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/swapnil.webp').default} alt="Swapnil Roy" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/swapnil-roy/" target="_blank"><strong>Swapnil Roy</strong></a></p>
              <p className={styles.officerRole}>Treasurer, Trainer</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/pragnya.webp').default} alt="Pragnya Nallagonda" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/pragnya-nallagonda-45a92a236/" target="_blank"><strong>Pragnya Nallagonda</strong></a></p>
              <p className={styles.officerRole}>Secretary</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/soumay.webp').default} alt="Soumay Mali" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/soumay-mali-41482a294/" target="_blank"><strong>Soumay Mali</strong></a></p>
              <p className={styles.officerRole}>Marketing Officer</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/sriram.webp').default} alt="SriRam Surisetty" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/sriram-surisetty-389483290/" target="_blank"><strong>SriRam Surisetty</strong></a></p>
              <p className={styles.officerRole}>Event Coordinator</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/hung.webp').default} alt="Hung Nguyen" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/hung-nguyen-123456789/" target="_blank"><strong>Hung Nguyen</strong></a></p>
              <p className={styles.officerRole}>Graphic Designer, Trainer</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/zayan.webp').default} alt="Zayan Hoodani" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/zayanh1/" target="_blank"><strong>Zayan Hoodani</strong></a></p>
              <p className={styles.officerRole}>Trainer</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/caleb.webp').default} alt="Caleb Floyd" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/caleb-floyd-622253367" target="_blank"><strong>Caleb Floyd</strong></a></p>
              <p className={styles.officerRole}>Website Admin</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/agni.webp').default} alt="Agni Athreya" className={styles.officerImage} />
              <p className={styles.officerName}><a href="https://www.linkedin.com/in/agniathreya/" target="_blank"><strong>Agni Athreya</strong></a></p>
              <p className={styles.officerRole}>ARES Lab Director</p>
            </div>
            <div className={styles.officerCard}>
              <img src={require('@site/static/img/placeholder.webp').default} alt="Michael Bowers" className={styles.officerImage} />
              <p className={styles.officerName}><a href="" target="_blank"><strong>Michael Bowers</strong></a></p>
              <p className={styles.officerRole}>New Website Developer</p>
            </div>
        </div>
      </div>
    </Layout>
  );
}
