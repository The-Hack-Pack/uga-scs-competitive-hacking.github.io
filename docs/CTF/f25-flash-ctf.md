---
title: "Fall 2025 Flash CTF"
description: "Fall 2025 Flash CTF"
sidebar_position: 0
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PasswordForm from '@site/src/components/PasswordFormCTF';
import NameBanner from '@site/src/components/NameBanner';
import SidebarAutoCollapse from '@site/src/components/SidebarAutoCollapse';
import '@site/src/components/css/challengeBox.css';
import DifficultyLabel from '@site/src/components/DifficultyLabel';
import PointsLabel from '@site/src/components/PointsLabel';
import Leaderboard from '@site/src/components/Leaderboard';

<SidebarAutoCollapse />

# Fall 2025 Flash CTF
Welcome to the Fall 2025 Flash Capture The Flag competition! You are allowed & encouraged to use any online tool including Google and AI. Attacking the competition platform is strictly prohibited.

*NOTE: Correct submissions are being saved, refreshing won’t erase them from the server.*
<NameBanner />

<Leaderboard />



## Open Source Intelligence

<div className="challenge-box">
  ### 1 - Tree <PointsLabel points={10}/><DifficultyLabel level="Easy" />
  A local historian has uncovered a strange property deed, but the original owner's name is smudged. The deed is for a famous local landmark in Athens, Georgia, pictured below.

  We need to find the full name of the man who originally owned this tree and granted it its 'freedom'.

  Flag Format: `thp{First_MiddleInitial_Last}`

  <a href="/assets/f25-flash-ctf/tree.jpg" download class="download-btn-link">
    <button type="button" class="download-btn">Download tree.jpg</button>
  </a>

  <PasswordForm
    hash="5d85eb8250aec5f4f9e9c7aafcfa43d191b8f771bddebfc6e46de3ffccedf93813b82f9cb6cba80738c523a61e02451085cc2008dd01943324e1b97412600ca5"
    algorithm="sha512"
    challengeName="OSINT 1"
    points={10}
  />

  <div className="challenge-author">Challenge Author: Zayan Hoodani (zayanh)</div>
</div>

<div className="challenge-box">
  ### 2 - Discord Bot <PointsLabel points={20} /><DifficultyLabel level="Medium" />
  We've received this Discord bot repository where sensitive information may have been exposed. Can you find the flag?

  Flag Format: `thp{}`

  <a href="/assets/f25-flash-ctf/discord-bot-project.zip" download class="download-btn-link">
    <button type="button" class="download-btn">Download discord-bot-project.zip</button>
  </a>

  <PasswordForm
    hash="764af21e5395f1d38b62defbe7a0fe463a73632cc56fc9edd648cdd7d60a6bfbd98a70609f46807dd9ccd8bc02474c5b4f618ca797a1b8d880540ad2de92b300"
    algorithm="sha512"
    challengeName="OSINT 2"
    points={20}
  />

  <div className="challenge-author">Challenge Author: Zayan Hoodani (zayanh)</div>
</div>

<div className="challenge-box">
  ### 3 - Off The Grid <PointsLabel points={30} /><DifficultyLabel level="Hard" />
  We've been tasked to find the exact time Zayan went off the grid. All we have is this note found at their desk.
  
  Flag Format: `thp{DD-MM-YYYY_HH:MM}`

  :::note
  Link is case-sensitive.
  :::

  <a href="/assets/f25-flash-ctf/note.jpeg" download class="download-btn-link">
    <button type="button" class="download-btn">Download note.jpeg</button>
  </a>

  <PasswordForm
    hash="2c55358b24dbb7bf254e27a0359fe59f3647f01577644d755c2ccb349450750aca063295b82632f317c3232b2affd979a77e49e4091f27dc769bb77ace51f1c8"
    algorithm="sha512"
    challengeName="OSINT 3"
    points={30}
  />

  <div className="challenge-author">Challenge Author: Zayan Hoodani (zayanh)</div>
</div>



## Cryptography

<div className="challenge-box">
  ### 4 - Zgyzhs <PointsLabel points={10} /><DifficultyLabel level="Easy" />
  Oh no! There is a malicious virus on our servers that's making all of our text backwards, there is only one way to stop it and that is to enter a super secret phrase. Luckily we managed to get the phrase, unluckily it has been encoding. 

  Can you figure out the plaintext of the encrypted password:
  ```
  gsk{uorkgsvhxirkg}
  ```

  Flag Format: `thp{}`

  <PasswordForm
    hash="6e88fb0efbb640209fad4af8a11823336f824cab4d38594fd6b96bffb2957e9538bfe7be649f95332db342d22e857ee9944dd1cdbce57f13362d2f92af2147cc"
    algorithm="sha512"
    challengeName="Crypto 1"
    points={10}
  />

  <div className="challenge-author">Challenge Author: SriRam Surisetty (famousmagic87870)</div>
</div>

<div className="challenge-box">
  ### 5 - Choo Choo <PointsLabel points={20} /><DifficultyLabel level="Medium" />
  One spooky night a train conductor is all alone at a railway station after a long day's work. However, he notices that there are a weird number of train tracks and that they have been shifted around. All of a sudden he hears an eerie train horn, and then all of a sudden he sees a ghost train rush by him!!! When the train finally stops a skeleton walks out and hands him this message: 
  ```
  ao{lbatplar}h_d
  ```
  What are the ghosts trying to say?

  Flag Format: `thp{}`

  <PasswordForm
    hash="aaa48642d2c687f28ec2b80b9a1d9301b9c021864147e95a15b40aeb128ada164a4d6cb2f8946dacb35854b42a7b668c98ef2107dd9147d843459f211573f1cd"
    algorithm="sha512"
    challengeName="Crypto 2"
    points={20}
  />

  <div className="challenge-author">Challenge Author: SriRam Surisetty (famousmagic87870)</div>
</div>

<div className="challenge-box">
  ### 6 - Emoji <PointsLabel points={30} /><DifficultyLabel level="Hard" />
  We've received an emoji that apparently contains the flag, can you find it? Here's the emoji: 
  ```
  😀󠅤󠅘󠅠󠅫󠅕󠅝󠅟󠅚󠅙󠅏󠅔󠅕󠅓󠅟󠅔󠅕󠅏󠅘󠅡󠄢󠄤󠄠󠅘󠅡󠄠󠄢󠅭
  ```

  Flag Format: `thp{}`

  <PasswordForm
    hash="3919957e93f59b6715f586368c3dbb34b348c0e64d136fa4d58c7c838f3e372b07d8942353b3c83894961d3923580b78fc4debea222bd389467e4279be26e71d"
    algorithm="sha512"
    challengeName="Crypto 3"
    points={30}
  />
  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>


## Password Cracking

<div className="challenge-box">
  ### 7 - Let's Rock <PointsLabel points={10} /><DifficultyLabel level="Easy" />
  We've received this password hash that seems to originate from the RockYou breach. Can you crack the password?

  Hash: `31d8c2fe81a635bef93315aa8234c1a0`

  Flag Format: `password`

  <PasswordForm
    hash="8cd88350cfa0e65ce5212c65761aded6fa00278f831dc7e390be490b798dec84b3441699da4c8439464cd42996de25432f9a6e2a700a58906127c332529cfeae"
    algorithm="sha512"
    challengeName="Pass 1"
    points={10}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>

<div className="challenge-box">
  ### 8 - Mask Up <PointsLabel points={20} /><DifficultyLabel level="Medium" />
  We've received this password hash that seems to follow the pattern of `THP-PASS-####` where `#` is a number. Can you crack the password?

  Hash: `fbb4ba434d9d6413e4f3a3381a646cb3`

  Flag Format: `password`

  <PasswordForm
    hash="367af734129834ef0a66fbe94b432932f7ef9a158828c6521b9456d07ff31bd2228dcc2b904228194d8b0acd174e347daf5babcfdb9692f33e0a0f6c1a01effb"
    algorithm="sha512"
    challengeName="Pass 2"
    points={20}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>

<div className="challenge-box">
  ### 9 - Dawg <PointsLabel points={30} /><DifficultyLabel level="Hard" />
  We've received this password hash that seems to be a dog breed appended by a special character and number. Can you crack the password?

  Hash: `ce7f4c18a74bfa86af7c22b7222e34f3`

  Flag Format: `password`

  <PasswordForm
    hash="16392b694c1fbea8782d58e0628c1de06508a905ee650a16dd1a38ea47bf15928dba3e79ac2a76e74ce5970e6f1bbd4efa17278503d6f4e0b57c43d02893da90"
    algorithm="sha512"
    challengeName="Pass 3"
    points={30}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>


## Forensics

<div className="challenge-box">
  ### 10 - Amogus <PointsLabel points={10} /><DifficultyLabel level="Easy" />

  This image is suspicious, can you find the flag?

  Flag Format: `thp{}`

  <a href="/assets/f25-flash-ctf/sus.png" download class="download-btn-link">
    <button type="button" class="download-btn">Download sus.png</button>
  </a>

  <PasswordForm
    hash="93c4cf3f44fbee1c71c2e4e8d43ee6e13f1839030832b21c6a86a036e2c933fc4349defaac5c8a56512253940d554102f08ce1e6b66090ca9efb924657806b1e"
    algorithm="sha512"
    challengeName="Forensics 1"
    points={10}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>

<div className="challenge-box">
  ### 11 - Data Exfil <PointsLabel points={20} /><DifficultyLabel level="Medium" />

  We've got a packet capture where someone downloaded some secret files. Can you find the flag?

  Flag Format: `thp{}`

  <a href="/assets/f25-flash-ctf/data-download.pcap" download class="download-btn-link">
    <button type="button" class="download-btn">Download data-download.pcap</button>
  </a>

  <PasswordForm
    hash="9023cd00306a084ab4746a12bbf3e6578965782fec525fb6cbc251d522dbbd7e9297dc8b2482ca9ac09c95f0f2284063afb1597c77590a76e603e0e3b75236e4"
    algorithm="sha512"
    challengeName="Forensics 2"
    points={20}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>

<div className="challenge-box">
  ### 12 - Encrypted Email <PointsLabel points={30} /><DifficultyLabel level="Hard" />

  We've received a raw email of someone sending suspicious data to someone. Can you find the flag?

  Flag Format: `thp{}`

  <a href="/assets/f25-flash-ctf/email.eml" download class="download-btn-link">
    <button type="button" class="download-btn">Download email.eml</button>
  </a>

  <PasswordForm
    hash="aa98c7c5f893e40cc17893bef60c9fabc7d6949d4a511badad0e8879bc50774f2b680dc1c07bac9282b29ce0ac1204fe37778d6705609a29789b8834ccb30501"
    algorithm="sha512"
    challengeName="Forensics 3"
    points={30}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>


## Log Analysis

<div className="challenge-box">
  ### 13 <PointsLabel points={10} /><DifficultyLabel level="Easy" />
  <div className="challenge-author">Challenge Author: Hung Nguyen (triumviratesys)</div>
</div>

<div className="challenge-box">
  ### 14 <PointsLabel points={20} /><DifficultyLabel level="Medium" />
  <div className="challenge-author">Challenge Author: Hung Nguyen (triumviratesys)</div>
</div>

<div className="challenge-box">
  ### 15 <PointsLabel points={30} /><DifficultyLabel level="Hard" />
  <div className="challenge-author">Challenge Author: Hung Nguyen (triumviratesys)</div>
</div>


## Web App Exploitation

<div className="challenge-box">
  ### 16 - Robot <PointsLabel points={10} /><DifficultyLabel level="Easy" />
  It seems like some clanker hid something on this website. Can you find the flag?

  Flag Format: `thp{}`

  <PasswordForm
    hash="91117b4e78d28daba58d84bb705f3fd4509e25dd51b9b982af26f7e4b32c425aa1fbcd689bc0a2a1d1edf52c5c98cbb5a39d934a51ce514519e233b9ef57c872"
    algorithm="sha512"
    challengeName="Web 1"
    points={10}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>

<div className="challenge-box">
  ### 17 - Notes <PointsLabel points={20} /><DifficultyLabel level="Medium" />
  Can you find the flag on my notes website? (NOTE: Bruteforcing web challenges is out of scope and should not be done.)

  Website: https://notes.thehackpack.org

  Flag Format: `thp{}`

  <PasswordForm
    hash="efe039aa825ccced01e94d06809bf097e933e4e2d2e68dbb518d13518a9810e2023ed5c9fb1fe2025e9f860c88d688a77ea5a8f745157bc7452ef37e3a7b43a4"
    algorithm="sha512"
    challengeName="Web 2"
    points={20}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>

<div className="challenge-box">
  ### 18 - Fetch The Flag <PointsLabel points={30} /><DifficultyLabel level="Hard" />
  Can you find the flag on this fetch service? (NOTE: Bruteforcing web challenges is out of scope and should not be done.)

  Website: https://fetch.thehackpack.org

  Flag Format: `thp{}`

  <PasswordForm
    hash="a8bf0d2b4b898010105df4063dc81f7b93078e155f067b8d5564daf52f3184d6c98e745966351a5e4f9646d2611dc0eadeecea0b055f3de4f16e34b3c86254bf"
    algorithm="sha512"
    challengeName="Web 3"
    points={30}
  />

  <div className="challenge-author">Challenge Author: Divesh Gupta (legendile7)</div>
</div>


## Reverse Engineering

<div className="challenge-box">
  ### 19 - Binary Keystone <PointsLabel points={15} /><DifficultyLabel level="Easy" />
  Can you find the right key to unlock the core logic?

  Flag format: `thp{key}`

  <a href="/assets/f25-flash-ctf/keystone.bin" download class="download-btn-link">
    <button type="button" class="download-btn">Download keystone.bin</button>
  </a>

  <PasswordForm
    hash="c234467c3ed869103c06c69cf2b6c047fcd90cddd891f2d5e8c3e1efb1eb2b51a5a90d1d0cb5457a80df28434e0f6b90ae13c7f6e261076c0af4925abef9a6b4"
    algorithm="sha512"
    challengeName="RE 1"
    points={15}
  />

  <div className="challenge-author">Challenge Author: Swapnil Roy (thespcrewroy)</div>
</div>

<div className="challenge-box">
  ### 20 <PointsLabel points={25} /><DifficultyLabel level="Medium" />
  <div className="challenge-author">Challenge Author: Swapnil Roy (thespcrewroy)</div>
</div>

