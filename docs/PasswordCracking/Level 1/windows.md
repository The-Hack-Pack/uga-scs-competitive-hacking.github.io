---
description: Password Cracking | Easy - Windows
tags: [easy]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm2';

# Windows
Password Cracking | Easy - Windows
## Challenge
A Windows password hash was retrieved that needs to be cracked. Can you retrieve the original password?

Target Hash: `CB71EF0DA0400E47CCF9155E3E7DB453:C19E106F17653CDD586B95313D2053CA`

<PasswordForm hash="166e8d0e8480ce0f969e1558286a6060c51e35ebc1a960092f492c46a52dac1db85dcb5f0df3efe82a2dcef3145ae28cf47b7be1bdf90b1f4b83fe05f60dd86d" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  :::note
  This challenge assumes you have some background knowledge on the hashing process. If you don't, please check out the solution guide for [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Easy/rockyou)
  :::

  This is a unique kind of password cracking challenge as it is a Windows password and a format that you've probably not seen before. Windows passwords are designed to be resistant to bruteforce attacks and so we'll have to use a new technique known as a **Rainbow Tables Attack**. 

  <h2>What are Rainbow Tables?</h2>
  Rainbow Tables are precomputed tables used to reverse cryptographic hash functions, primarily to crack password hashes. Rather than attempting to brute-force each possible password hash individually at the time of the attack, rainbow tables contain a huge collection of hashed passwords matched with their plaintext counterparts, significantly speeding up the cracking process.

  The tool used for this challenge is [**ophcrack**](https://ophcrack.sourceforge.io/). To solve this challenge, you need to download the tool and then a rainbow table (I use the smallest one: https://sourceforge.net/projects/ophcrack/files/tables/XP%20free/tables_xp_free_small.zip/download)
  :::warning
  ophcrack will be flagged by Windows as a virus/malicious program because, well, it's used to crack Windows passwords. You can safely ignore this and allow download anyway.
  :::

  After downloading, load the hash in the top left of ophcrack's GUI. Then click tables and select the file location of the table you downloaded (must be extracted). Then just hit crack and you should have the password!



</details>

## Credits
- Author(s): Divesh Gupta (legendile7)