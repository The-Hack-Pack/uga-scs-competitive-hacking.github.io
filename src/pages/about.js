import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="Learn more about The Hack Pack">
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About The Hack Pack</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
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
        <h1>Meet The Officers</h1>
        <div style={{ maxWidth: '1500px', margin: '20px auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* First Row */}
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/divesh.webp').default} alt="Divesh Gupta" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/divesh2027/" target="_blank"><strong>Divesh Gupta</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>President</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/ethan.webp').default} alt="Ethan Mund" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/ethan-mund227/" target="_blank"><strong>Ethan Mund</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Vice President</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/garrett.webp').default} alt="Garrett Moore" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/garrett-moore-/" target="_blank"><strong>Garrett Moore</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Training Coordinator</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/swapnil.webp').default} alt="Swapnil Roy" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/swapnil-roy/" target="_blank"><strong>Swapnil Roy</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Treasurer, Trainer</p>
            </div>
            {/* Second Row */}
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/placeholder.webp').default} alt="Pragnya Nallagonda" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/pragnya-nallagonda-45a92a236/" target="_blank"><strong>Pragnya Nallagonda</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Secretary</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/placeholder.webp').default} alt="Soumay Mali" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/soumay-mali-41482a294/" target="_blank"><strong>Soumay Mali</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Marketing Officer</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/sriram.webp').default} alt="SriRam Surisetty" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/sriram-surisetty-389483290/" target="_blank"><strong>SriRam Surisetty</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Event Coordinator</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/hung.webp').default} alt="Hung Nguyen" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/hung-nguyen-123456789/" target="_blank"><strong>Hung Nguyen</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Graphic Designer, Trainer</p>
            </div>
            {/* Third Row */}
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/placeholder.webp').default} alt="Zayan Hoodani" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/zayanh1/" target="_blank"><strong>Zayan Hoodani</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Trainer</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/placeholder.webp').default} alt="Caleb Floyd" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="" target="_blank"><strong>Caleb Floyd</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Website Admin</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/agni.webp').default} alt="Agni Athreya" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/agniathreya/" target="_blank"><strong>Agni Athreya</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>ARES Lab Director</p>
            </div>
            <div style={{ flex: '0 0 20%', margin: '10px' }}>
              <img src={require('@site/static/img/placeholder.webp').default} alt="Michael Bowers" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="" target="_blank"><strong>Michael Bowers</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>New Website Developer</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
