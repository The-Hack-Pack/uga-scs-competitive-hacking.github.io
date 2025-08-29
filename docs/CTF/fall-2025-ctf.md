---
description: "Fall 2025 Kickoff CTF"
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PasswordForm from '@site/src/components/PasswordForm4';
import NameBanner from '@site/src/components/NameBanner';

# Fall 2025 Kickoff CTF
Welcome to the Fall 2025 Kickoff Capture The Flag competition! There are 20 challenges, each is worth 1 point towards your total score.

*NOTE: Your correct answers are being saved and sent even if you refresh the page.*
<NameBanner />

## OSINT
### Question 5
What does OSINT stand for?
<PasswordForm
  hash="f406f4e66f5495035b024d3bf96fc10a3f349a14860d175c26e22e4c936c8838293175a74ffe486fd0758d9e676d37411930a20a2ec45696502f975c7f9de88a"
  algorithm="sha512"
  challengeName="OSINT 1"
  points={1}
/>
### Question 6
What year was Twitter's name changed to X?
<PasswordForm
  hash="a1e11c5d0b12fb74fd97f392c088b16ea641fcc55f80c8b0d4e5e1a2903887b70173c487ab994516f26f0b13a72da36f61ac00b5644bb1a2e9a78cbd4a4c4dc9"
  algorithm="sha512"
  challengeName="OSINT 2"
  points={1}
/>
### Question 7
What is the first name of Mr. Wonderful from Shark Tank?
<PasswordForm
  hash="5dfe55879638e99cc14a1d4730238936207b92050ef3cd24ae64d52d773084485b55b00f835a076bdc8f8c307ab5eb183eaf332867a2b6f47557d913234f2973"
  algorithm="sha512"
  challengeName="OSINT 3"
  points={1}
/>
### Question 8
What is the name of this building?

<!--[Download Photo](./assets/osint_image.jpg)-->
<PasswordForm
  hash="f579ad1a6a474a7038e75a2f39299f44c32971fbb880ac0b4ca5780b20034735d6c4faabd569f15bc8eeeeb9b7d73e694604761079bebbcebc07d829e44994fd"
  algorithm="sha512"
  challengeName="OSINT 4"
  points={1}
/>
## Cryptography
Useful tools: 
- https://gchq.github.io/CyberChef/
- https://www.dcode.fr/cipher-identifier
### Question 9
Decode `62 6c 61 63 6b 62 6f 78`
<PasswordForm
  hash="a96614e20d61ee9acc37c6b5632e13c1842ae5bb8ec461db7a8bb1926acc8f6e633d3deebdb96f0201064d81d744aaed38af7eeb3e4bd21e21d36ecbdc378d2f"
  algorithm="sha512"
  challengeName="Crypto 1"
  points={1}
/>
### Question 10
Decrypt `wopbkrm gry ioir` with the key `UGA`
<PasswordForm
  hash="b965582af6228e808bd32e285a648a93d168c3b5a0e7dd05942a325e0c7a22b294493fc3a3627afec7019ddc38f0f82cd23af30ff5c94117acbfb7d4c72cea9b"
  algorithm="sha512"
  challengeName="Crypto 2"
  points={1}
/>
### Question 11
Decode & Decrypt this: `LS4tIC0uIC0tLSAtLi0uIC0uLQotLi0gLS4gLS0tIC0uLS4gLS4tIC0uLS4tLQ==`
<PasswordForm
  hash="aa7c1a9b0e0011f900ed4549bbb2a37e012a2cbdb4db3dda1514ad7f5787b3e528a61795ba7917c7814420775fd11064f95aaf9de465c0e5da39e6d39dc25a1c"
  algorithm="sha512"
  challengeName="Crypto 3"
  points={1}
/>
### Question 12
Decode this symbol cipher:

<!--![Symbol](./assets/symbol.png)-->
<PasswordForm
  hash="e419cdecd87be195afa05128b3d71f7c33ad81279adcc643482ee67d77a26477eebde1b07f34bbfa01d4fef7e2fe55578b4097dbf87481ed1fa8d26fed589442"
  algorithm="sha512"
  challengeName="Crypto 4"
  points={1}
/>

## Web App Exploitation
## Forensics

## Password Cracking
### Question 18
Crack this password hash using `rockyou.txt`:
```
8afa847f50a716e64932d995c8e7435a
```
<PasswordForm
  hash="1a47e74e0e6ad208c19efb42c0fefded43f07b037a3c552ad04ae8b167417e5612556641c0df4da77643e027b030e6ebcb9264dda9e8db3522952bec751d3b92"
  algorithm="sha512"
  challengeName="Pass 2"
  points={1}
/>
### Question 19
Crack this password hash that follows the format of `DAWG-##` where `#` is a number:
```
10d5c804bce41fb34c9f8dfdd89b9ff9
```
<PasswordForm
  hash="27edef6b6c749f47cab9fa96a23d6b1a52138ff4ed1287ab3dc06f5e3d5b96618b75095f1e9600c904fcb3ac2c80c7f11e75669a5147eb7ca0b3184fc2cc79fe"
  algorithm="sha512"
  challengeName="Pass 3"
  points={1}
/>
### Question 20
Crack the password of this PDF file and submit the flag found inside

<!--[Download PDF](./assets/locked.pdf)-->

*Hint 1: You can find the PDF file's hash here: https://hashes.com/en/johntheripper/pdf2john*

*Hint 2: The hashmode (-m) is `10500`*
<PasswordForm
  hash="c983102469ca6b8cb39732c87f864601ef2f2f68887bbac6eaf06c1df932527f70c705f615e9800bb3926d7b219e3c50464212fb510a841d3a2da26b8ec02517"
  algorithm="sha512"
  challengeName="Pass 4"
  points={1}
/>

## Credits

- Author(s): Divesh Gupta (legendile7)
