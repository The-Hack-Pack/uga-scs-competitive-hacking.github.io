import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="Learn more about The Hack Pack">
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p>
            The Hack Pack is the <strong>practical & competitive cybersecurity</strong> club at the University of Georgia. This is the place to learn hands-on cybersecurity and apply your knowledge in competitions!
          </p>
          <p>
            Open to <strong>all UGA students</strong> regardless of any experience! We will teach and prepare you for everything with our weekly training sessions, practice challenges, team-based & solo competitions, and writeups.
          </p>
        </div>
        <h1>Meet The Officers</h1>
        <div style={{ maxWidth: '1200px', margin: '20px auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* First Row */}
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src={require('@site/static/img/divesh.webp').default} alt="Divesh Gupta" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/divesh2027/" target="_blank"><strong>Divesh Gupta</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>President</p>
            </div>
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src={require('@site/static/img/ethan.webp').default} alt="Ethan Mund" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/ethan-mund227/" target="_blank"><strong>Ethan Mund</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Vice President</p>
            </div>
            {/* Second Row */}
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src={require('@site/static/img/cole.webp').default} alt="Cole Nangle" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/cole-nangle/" target="_blank"><strong>Cole Nangle</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Training Coordinator</p>
            </div>
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src={require('@site/static/img/aparna.webp').default} alt="Aparna Sajith" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/aparna-sajith-a90716206/" target="_blank"><strong>Aparna Sajith</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Marketing Officer</p>
            </div>
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src={require('@site/static/img/sriram.webp').default} alt="SriRam Surisetty" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/sriram-surisetty-389483290/" target="_blank"><strong>SriRam Surisetty</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Competition Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
