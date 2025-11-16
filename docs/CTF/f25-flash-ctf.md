---
description: "Fall 2025 Flash CTF"
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PasswordForm from '@site/src/components/PasswordForm5';
import NameBanner from '@site/src/components/NameBanner';

# Fall 2025 Flash CTF
Welcome to the Fall 2025 Flash Capture The Flag competition! You are allowed to use any online tool including AI. There are 20 total challenges.

*NOTE: Your correct answers are being saved and sent even if you refresh the page.*
<NameBanner />

## OSINT

## Cryptography

## Password Cracking

### Challenge # (10 points)
We've received this password hash that seems to originate from the RockYou breach. Can you crack the password?

Hash: `31d8c2fe81a635bef93315aa8234c1a0`

<PasswordForm
  hash="8cd88350cfa0e65ce5212c65761aded6fa00278f831dc7e390be490b798dec84b3441699da4c8439464cd42996de25432f9a6e2a700a58906127c332529cfeae"
  algorithm="sha512"
  challengeName="Pass 1"
  points={10}
/>

### Challenge # (20 points)
We've received this password hash that seems to follow the pattern of `THP-PASS-####` where `#` is a number. Can you crack the password?

Hash: `fbb4ba434d9d6413e4f3a3381a646cb3`

<PasswordForm
  hash="367af734129834ef0a66fbe94b432932f7ef9a158828c6521b9456d07ff31bd2228dcc2b904228194d8b0acd174e347daf5babcfdb9692f33e0a0f6c1a01effb"
  algorithm="sha512"
  challengeName="Pass 2"
  points={20}
/>

### Challenge # (30 points)
We've received this password hash that seems to be a dog breed appended by a special character and number. Can you crack the password?

Hash: `ce7f4c18a74bfa86af7c22b7222e34f3`

<PasswordForm
  hash="16392b694c1fbea8782d58e0628c1de06508a905ee650a16dd1a38ea47bf15928dba3e79ac2a76e74ce5970e6f1bbd4efa17278503d6f4e0b57c43d02893da90"
  algorithm="sha512"
  challengeName="Pass 3"
  points={30}
/>

## Forensics
### Challenge # (10 points)
This image is suspicious, can you find the flag?

[sus.png](./assets/sus.png)

<PasswordForm
  hash="93c4cf3f44fbee1c71c2e4e8d43ee6e13f1839030832b21c6a86a036e2c933fc4349defaac5c8a56512253940d554102f08ce1e6b66090ca9efb924657806b1e"
  algorithm="sha512"
  challengeName="Forensics 1"
  points={10}
/>

### Challenge # (20 points)
We've got a packet capture where someone downloaded some secret files. Can you find the flag?

[data-download.pcap](./assets/data-download.pcap)

<PasswordForm
  hash="9023cd00306a084ab4746a12bbf3e6578965782fec525fb6cbc251d522dbbd7e9297dc8b2482ca9ac09c95f0f2284063afb1597c77590a76e603e0e3b75236e4"
  algorithm="sha512"
  challengeName="Forensics 2"
  points={20}
/>

### Challenge # (30 points)
We've received a raw email of someone sending suspicious data to someone. Can you find the flag?

[email.eml](./assets/email.eml)

<PasswordForm
  hash="aa98c7c5f893e40cc17893bef60c9fabc7d6949d4a511badad0e8879bc50774f2b680dc1c07bac9282b29ce0ac1204fe37778d6705609a29789b8834ccb30501"
  algorithm="sha512"
  challengeName="Forensics 3"
  points={30}
/>

## Log Analysis

## Web App Exploitation

### Challenge # (10 points)
It seems like some clanker hid something to help its robot friends on this website. Can you find the flag?

<PasswordForm
  hash="91117b4e78d28daba58d84bb705f3fd4509e25dd51b9b982af26f7e4b32c425aa1fbcd689bc0a2a1d1edf52c5c98cbb5a39d934a51ce514519e233b9ef57c872"
  algorithm="sha512"
  challengeName="Web 1"
  points={10}
/>

### Challenge # (20 points)
Can you find the flag on my notes website?

Website: https://notes.thehackpack.org

<PasswordForm
  hash="efe039aa825ccced01e94d06809bf097e933e4e2d2e68dbb518d13518a9810e2023ed5c9fb1fe2025e9f860c88d688a77ea5a8f745157bc7452ef37e3a7b43a4"
  algorithm="sha512"
  challengeName="Web 2"
  points={20}
/>

### Challenge # (30 points)
Can you find the flag on this fetch service?

Website: https://fetch.thehackpack.org

<PasswordForm
  hash="a8bf0d2b4b898010105df4063dc81f7b93078e155f067b8d5564daf52f3184d6c98e745966351a5e4f9646d2611dc0eadeecea0b055f3de4f16e34b3c86254bf"
  algorithm="sha512"
  challengeName="Web 3"
  points={30}
/>

## Reverse Engineering



## Credits

- Author(s): Divesh Gupta (legendile7)
