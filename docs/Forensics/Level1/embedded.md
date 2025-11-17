---
description: Forensics | Level 1 - Embedded
tags: [level1]
sidebar_position: 3
---

import PasswordForm from '@site/src/components/PasswordForm2';
import '@site/src/components/css/challengeBox.css';

# Embedded
Forensics | Level 1 - Embedded

<div className="challenge-box">
  ## Challenge
  We have recieved an image that is hiding something. See if you can find the secret.

  [Download Image](./assets/embedded.png)

  <PasswordForm hash="f8edd80c039cbe2677c1279bb44bf074b42cf9406c0801019a80340376ef0d7f50f9d94dee03f7124a790ed1c4033f610858b0d8d50b25eb1d768e73285d8253" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>
  
  This is a [steganography](https://en.wikipedia.org/wiki/Steganography) challenge. There are many tools for steg challenges and usually involve trial & error. It's a good idea to first runs the Linux command `strings` on the file to see what we can find. If you run it on this file, you will see "flag.txt" towards the end. This suggests that there is a hidden file embedded in this PNG image! There are many tools to extract such files with the most common being Binwalk, Zsteg, Foremost, and Outguess (in that order). Let's start with binwalk.

  To see potential hidden files inside a file, we can use the command `binwalk <file>`. Upon running this on our target image, you may see multiple files show up with the most notable being:
  ```bash
  1022019       0xF9843         Zip archive data, at least v2.0 to extract, name: flag.txt
  ```
  It seems that there is indeed a hidden file, specifically a Zip archive containing a `flag.txt`. We can extract the files with the command `binwalk -e <file>` which will send the extracted file to `_<filename>.extracted`. Inside, you will find the `flag.txt` with the flag!

  This challenge is also solvable with the online tool [Aperisolve](https://aperisolve.fr/) that automates tools including Binwalk.

  :::warning
  Aperisolve has very unreliable uptime, especially during competitions. Learn to solve without it.
  :::

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)