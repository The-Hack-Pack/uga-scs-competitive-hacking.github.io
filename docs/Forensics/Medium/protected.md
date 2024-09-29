---
description: Forensics | Medium - Protected
tags: [medium]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Protected
Forensics | Medium - Protected
## Challenge
We have intercepted a PDF file but it seems to be protected with a password. Can you find a way through?

Download file: <a href={require("./assets/protected.pdf").default} download>protected.pdf</a>

Flag: <PasswordForm hash="efca4e4f572283feda8600aefc9a7660d57e50662160eaa92fecedc8db4e3499465cbd4c0fa3305132677b6403ef833c582255d1dc9a50f17236cc12778b4954" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  
  This challenge requires basic understanding of password cracking & Hashcat's dictionary attack so please do [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Easy/rockyou) before doing this challenge.
  
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