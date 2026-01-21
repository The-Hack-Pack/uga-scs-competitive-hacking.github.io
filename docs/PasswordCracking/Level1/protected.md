---
description: Password Cracking | Level 1 - Protected
tags: [level1]
sidebar_position: 3
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import '@site/src/components/css/challengeBox.css';

# Protected
Password Cracking | Level 1 - Protected
<div className="challenge-box">
  ## Challenge
  We have intercepted a PDF file but it seems to be protected with a password. Can you find a way through?

  <a href="/assets/PasswordCracking/protected.pdf" download class="download-btn-link">
    <button type="button" class="download-btn">Download protected.pdf</button>
  </a>

  <PasswordForm hash="b1212522c3aafa9908fd732456d1803ac4634882a91dab2b6f05fc435e59f2dcd6e3ea791f2b4ba6ededf5d76488839acda4f8cefd94205f801d89d828783b27" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>
  
  This challenge requires basic understanding of password cracking & Hashcat's dictionary attack so please do [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Level1/rockyou) before doing this challenge.
  
  Encrypted PDF files also have a password hash. We can extract it with a tool like John The Ripper (JTR) or an online tool. We will use an online tool: https://hashes.com/en/johntheripper/pdf2john. This online tool uses JTR behind the scenes. Upload the pdf file and you will get the password hash.

  Our next step is to figure out the password from the hash. We will be using **Kali Linux** to demonstrate. The method will be almost identical to the password cracking easy challenge RockYou. However, in that challenge, the hash type was `MD5` but clearly this hash looks nothing like `MD5`. So, let's ask hashcat what type it thinks the hash is. First, place your extracted hash in a text file like `hash.txt`. Then run this command:
  ```bash
  hashcat hash.txt
  ```
  After running this, Hashcat will output the hash type (aka mode).

  <details>
    <summary>Reveal hash mode</summary>

    `10500` | PDF 1.4 - 1.6 (Acrobat 5 - 8) | Document

  </details>

  Our next step is to do a dictionary attack. We will use `rockyou.txt` once again as it's the most commonly used one. Recall that hashcat's dictionary attack command is:
  ```bash
  hashcat -a <attack-mode> -m <hash-mode> hash.txt [other_options_like_dictionary]
  ```
  I encourage you to craft the command yourself.

  <details>
    <summary>Reveal Command</summary>
    
      ```bash
      hashcat -a 0 -m 10500 hash.txt /usr/share/wordlists/rockyou.txt.gz
      ```
  </details>

  This may take a few minutes but after a short while, we should see our hash cracked and the password revealed. Now, simply open the PDF file and type the password and you should now see the flag!
</details>

## Credits
- Author(s): Divesh Gupta (legendile7)