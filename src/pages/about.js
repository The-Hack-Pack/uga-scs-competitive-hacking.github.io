import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

const officers = [
  {
    name: 'Divesh Gupta',
    img: require('@site/static/img/divesh.webp').default,
    role: 'President',
    link: 'https://www.linkedin.com/in/divesh2027/',
  },
  {
    name: 'Ethan Mund',
    img: require('@site/static/img/ethan.webp').default,
    role: 'Vice President',
    link: 'https://www.linkedin.com/in/ethan-mund227/',
  },
  {
    name: 'Swapnil Roy',
    img: require('@site/static/img/swapnil.webp').default,
    role: 'Treasurer, Trainer',
    link: 'https://www.linkedin.com/in/swapnil-roy/',
  },
  {
    name: 'Pragnya Nallagonda',
    img: require('@site/static/img/pragnya.webp').default,
    role: 'Secretary',
    link: 'https://www.linkedin.com/in/pragnya-nallagonda-45a92a236/',
  },
  {
    name: 'Garrett Moore',
    img: require('@site/static/img/garrett.webp').default,
    role: 'Training Coordinator',
    link: 'https://www.linkedin.com/in/garrett-moore-/',
  },
  {
    name: 'Zayan Hoodani',
    img: require('@site/static/img/zayan.webp').default,
    role: 'Training Coordinator',
    link: 'https://www.linkedin.com/in/zayanh1/',
  },
  {
    name: 'Soumay Mali',
    img: require('@site/static/img/soumay.webp').default,
    role: 'Marketing Officer',
    link: 'https://www.linkedin.com/in/soumay-mali-41482a294/',
  },
  {
    name: 'SriRam Surisetty',
    img: require('@site/static/img/sriram.webp').default,
    role: 'Event Coordinator',
    link: 'https://www.linkedin.com/in/sriram-surisetty-389483290/',
  },
  {
    name: 'Hung Nguyen',
    img: require('@site/static/img/hung.webp').default,
    role: 'Graphic Designer, Trainer',
    link: 'https://www.linkedin.com/in/hung-nguyen-123456789/',
  },
  {
    name: 'Caleb Floyd',
    img: require('@site/static/img/caleb.webp').default,
    role: 'Website Admin',
    link: 'https://www.linkedin.com/in/caleb-floyd-622253367',
  },
];

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
          {officers.map((officer, idx) => (
            <div
              className={styles.officerCard}
              key={officer.name}
              onClick={() => officer.link && window.open(officer.link, '_blank')}
              tabIndex={0}
              role="button"
              onKeyPress={e => {
                if ((e.key === 'Enter' || e.key === ' ') && officer.link) {
                  window.open(officer.link, '_blank');
                }
              }}
              aria-label={officer.name + (officer.role ? ' - ' + officer.role : '')}
            >
              <img src={officer.img} alt={officer.name} className={styles.officerImage} />
              <p className={styles.officerName}>
                <a href={officer.link} target="_blank" rel="noopener noreferrer">
                  <strong>{officer.name}</strong>
                </a>
              </p>
              <p className={styles.officerRole}>{officer.role}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
