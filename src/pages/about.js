import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout title="About" description="Learn more about The Hack Pack">
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>About</h1>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p>
            The Hack Pack is the <strong>competitive hacking</strong> subdivision of the University of Georgia's <strong>Society for Cybersecurity</strong>. We participate in Capture The Flag (offensive) and Blue Team (defensive) competitions, providing a platform for our members to sharpen their skills, collaborate on cybersecurity challenges, and build an impressive portfolio. Open to all UGA students, our club offers trainings, practice challenges, and write-ups to help you succeed in the world of competitive hacking.
          </p>
        </div>
        <h1>Meet The Officers</h1>
        <div style={{ maxWidth: '1200px', margin: '20px auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* First Row */}
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src="img/divesh.jpg" alt="Divesh Gupta" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/divesh2027/" target="_blank"><strong>Divesh Gupta</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>President</p>
            </div>
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src="img/ethan.jpg" alt="Ethan Mund" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/ethan-mund227/" target="_blank"><strong>Ethan Mund</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Vice President</p>
            </div>
            {/* Second Row */}
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src="img/cole.jpg" alt="Cole Nangle" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/cole-nangle/" target="_blank"><strong>Cole Nangle</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Training Coordinator</p>
            </div>
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src="img/aparna.jpg" alt="Aparna Sajith" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/aparna-sajith-a90716206/" target="_blank"><strong>Aparna Sajith</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Marketing Officer</p>
            </div>
            <div style={{ flex: '0 0 30%', margin: '10px' }}>
              <img src="img/sriram.jpg" alt="SriRam Surisetty" style={{ width: '70%', height: 'auto', borderRadius: '20%' }} />
              <p style={{ margin: '5px 0', fontSize: '1.3em' }}><a href="https://www.linkedin.com/in/sriram-surisetty-389483290/" target="_blank"><strong>SriRam Surisetty</strong></a></p>
              <p style={{ margin: '5px 0', fontSize: '0.9em' }}>Competition Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
