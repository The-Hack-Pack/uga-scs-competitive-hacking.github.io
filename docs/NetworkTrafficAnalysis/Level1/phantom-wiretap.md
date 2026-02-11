---
description: "Network Traffick Analysis | Level 1 - Phantom Wiretap"
sidebar_position: 0
tags: [level1]
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadLink from '@site/src/components/DownloadLink';
import '@site/src/components/css/challengeBox.css';

# Phantom Wiretap

Network Traffick Analysis | Level 1 - Phantom Wiretap

<div className="challenge-box">
  ## Challenge
  A covert monitoring system known as Phantom Wiretap captured a stream of suspicious network traffic from a compromised internal workstation. Investigators believe the user was communicating with hidden infrastructure and exfiltrating encoded data through DNS queries.

  <a href="/assets/NetworkTrafficAnalysis/phantom.pcapng" download class="download-btn-link">
    <button type="button" class="download-btn">Download phantom.pcapng</button>
  </a>

Q1. What is the transaction ID of the first DNS query to the domain thehackpack.thp.lan?
<PasswordForm2 hash="a4071a66307f7b51262d0b671bda4ce66708748cf7def1766603d2d7f5815fdd039795af054c5dc416a4dbda23c84adce991b6533eea0fad13e4eadb5779db2f" algorithm="sha512" challengeName = "Phantom Wiretap 1"  />

Q2. Which email-related hostnames are queried in the capture (separated by commas)?
<PasswordForm2 hash="ea6dbf7647023bae6f4f9f405f553e17da844a7c56fc54e72208b8eb26a9dc842157b0ca308fd535a1c01492a74637fe763998f96879cb3d1c43f6804921e64d" algorithm="sha512" challengeName = "Phantom Wiretap 2"  />

Q3. A DNS response for target.thp.lan contains multiple A records. What is the second IPv4 address returned in that response?
<PasswordForm2 hash="fca0dec023399546586746b906bfe1d317dc6b176814e9651cfd256c36e4e6c08b6efb1ceba38058a04a9402234551b91dab5a2163c7b5d12d9d6a9ade5ca8ab" algorithm="sha512" challengeName = "Phantom Wiretap 3"  />

Q4. What is the DNS transaction ID in frame 11?
<PasswordForm2 hash="7d13a80cca0621286f31913144bf33d0de14cbf8bf680ca5c0b5b6fd372cc45adce06616fa3af06debdfd4cf7cb9445904f5b585abad6f74a7a728605db7aa00" algorithm="sha512" challengeName = "Phantom Wiretap 4"  />

Q5. The domain flag.thp.lan returns both A and AAAA records. The returned IP values encode a hidden message THP-ABCD-####. Decode that IP values to get the flag.
<PasswordForm2 hash="351453ee14af1c1e4e7d235cd438bb509c3fe7fb8e3b5822168e54495e795efe783311c6a588d3fd4f2ddef130038ba6929c5f388f7b7f1ca7bde0886626be58" algorithm="sha512" challengeName = "Phantom Wiretap 5"  />

Q6. What is the average DNS payload size in bytes (to 2 decimal places)?
<PasswordForm2 hash="9d52f0bc8fa5233a99e59a0e742ef1e988187e40139fa23130a4c1d8654353345abeccbb40082066bfa31917042d5de369a7e234107b857a9827759b9e886e2cf" algorithm="sha512" challengeName = "Phantom Wiretap 6"  />

</div>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)

## TODO

- Add Hints
- Make Solution Guide
