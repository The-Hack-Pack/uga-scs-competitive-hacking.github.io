---
description: Password Cracking | Level 2 - Fusion
tags: [level2]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm2';
import '@site/src/components/css/challengeBox.css';

# Fusion
Password Cracking | Level 2 - Fusion
<div className="challenge-box">
  ## Challenge
  A password hash was retrieved that needs to be cracked. We have received intel that the password is a Netflix movie or show with a number at the end. Can you crack the password?

  Target Hash: `427e3d9c817de20912d9838f1f2ad7d0`

  <PasswordForm hash="37afa22691121b292edfbbfd6f6de98b920ef64cd387ec217fecb4248e454bcc2ba17fe06a25ab4f05f7afb73ca0db32124ce5f8934235eec32f111676596cf3" algorithm="sha512" challengeName = "Fusion" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>
  
  :::note
  This challenge assumes you know how to solve [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Level1/rockyou) & [**Masked**](https://thehackpack.org/practice/PasswordCracking/Level1/masked).
  :::

  As you may be able to tell from the challenge title, we need to fuse or combine 2 different password cracking techniques for this: dictionary attack & mask attack. But notice, we are not provided with a wordlist so we will need to research.

  **Obtain Wordlist**

  My #1 source for finding wordlists and datasets is either GitHub or Kaggle. This challenge uses one from Kaggle although I'm sure it can be solved with other wordlists. We know it's a Netflix show/movie so why not look for the most popular one on Kaggle.

  <details>
    <summary>Reveal Wordlist</summary>

    https://www.kaggle.com/datasets/shivamb/netflix-shows
  </details>

  Download the wordlist, open with Excel, and copy the `Title` column to a text document. Name it something like `netflix.txt`

  **Crack the password**

  We're now ready to attack the hash and obtain our password. As usual, we will use hashcat but this time with their [**Hybrid**](https://hashcat.net/wiki/doku.php?id=hybrid_attack) mode. Hashcat has two hybrid modes. Attack mode `-a 6` is wordlist appended with mask (wordlist + mask). Attack mode `-a 7` is wordlist prepended with mask (mask + wordlist). We know our hash is our wordlist with a number (the mask) appended at the end so we will use `-a 6`. 

  You should know how to find out hash type from [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Level1/rockyou). You should know which mask to use from [**Masked**](https://thehackpack.org/practice/PasswordCracking/Level2/masked). I now encourage you to craft the attack command yourself.
  <details>
    <summary>Reveal Command</summary>
    
    Attack mode: Hybrid (wordlist + mask) - `-a 6`
    Hash type: MD5 - `-m 0`
    Mask: Single digit - `?d`

    Command:
    ```bash
    hashcat -a 6 -m 0 427e3d9c817de20912d9838f1f2ad7d0 netflix.txt ?d
    ```
  </details>

  You should now have the password cracked!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)