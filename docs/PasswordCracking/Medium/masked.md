---
description: Password Cracking | Medium - Masked
tags: [medium]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';

# Masked
Password Cracking | Medium - Masked
## Challenge
A password hash was retrieved that needs to be cracked. We have received intel that the password is of the format 

`THP-PASS-####`

where `#` is a number 0-9.

Target Hash: `a9fe58ebbe541f23dcb988ac47e7ee6f`

<PasswordForm hash="0b0583b4d6ee8fe50f52b780d92d4e774c371c8d42ef73beb2dbb284f6891388acf60ea4b201ad8f8704ae3e64e07bc33e0161f922d4e475bf73f61d5522141f" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  
  <h2>Video Guide</h2>
  Timestamp: 10:08-13:40
  <iframe width="560" height="315" src="https://www.youtube.com/embed/4lNpxP-zJsY?si=rFx-VwkmSan1SsQ0&start=608" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>

  ---

  This challenge assumes you have solved the Easy challenge [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Easy/rockyou) and have a basic understanding of Hashcat. Please do that challenge and look over the solution guide before moving to this one. In RockYou, we used Hashcat to do a dictionary attack. However, we do not have a dictionary this time. We only have the password format of `THP-PASS-####` where the 4 numbers are unknown. Therefore, we will have to do a different attack to bruteforce every single number combination possible.

  Our first step is to identify the hash type. This can be done with an online tool such as https://hashes.com/en/tools/hash_identifier. After submitting the hash here, we can see that it is identified as an **MD5** hash.

  Our next step is to crack the hash. We will be using **Hashcat** again for this. For the purpose of this tutorial, we will be using Kali Linux.

  Hashcat supports many hash modes, denoted by a numerical ID. We know our hash is MD5 so we just need to find the hash mode ID for it. We can find that [**here**](https://hashcat.net/wiki/doku.php?id=example_hashes). Upon searching for MD5 here (it's the first one), we can see the hash mode is `0`. 

  Our next step is to choose an attack type. I encourage you to take a look at hashcat's attack modes [**here**](https://hashcat.net/wiki/doku.php?id=hashcat) (near the bottom of the page) and figure out which one to use. 
  
  <details>
    <summary>Reveal Attack Type</summary>

    We will need to bruteforce every single number combination for this attack. Therefore, the best attack method for this would be [Mask Attack](https://hashcat.net/wiki/doku.php?id=mask_attack). This will let us put a `mask` of `?d` in place of each number we don't know to tell hashcat to hash every single combination from `THP-PASS-0000` to `THP-PASS-9999` and compare to the target hash.
    
    The ID for this is attack type is `3`.
  </details>

  Now we can craft our command to crack the password. The format of a hashcat attack is:
  ```bash
  hashcat -a <attack-mode> -m <hash-mode> [hash] [other_options_like_mask]
  ```
  I encourage you to craft the command yourself by referencing the wiki for our attack type.

  <details>
    <summary>Reveal Command</summary>
    
      ```bash
      hashcat -a 3 -m 0 a9fe58ebbe541f23dcb988ac47e7ee6f THP-PASS-?d?d?d?d
      ```
  </details>

  After executing this command, hashcat will start cracking the hash by hashing every single password from `THP-PASS-0000` to `THP-PASS-9999` and compare with the target hash. This may take a few minutes depending on your computer but after a short while, we should see our hash cracked!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)