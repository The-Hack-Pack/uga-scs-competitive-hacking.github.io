---
description: Forensics | Level 1 - CrowdSteg
tags: [level1]
sidebar_position: 2
---

import PasswordForm from '@site/src/components/PasswordForm';
import '@site/src/components/css/challengeBox.css';

# CrowdSteg
Forensics | Level 1 - CrowdSteg

<div className="challenge-box">
  ## Challenge
  We have received an image that is hiding something. See if you can find the secret.

  [Download Image](./assets/crowdsteg.png)

  <PasswordForm hash="c935c6aa6d9a74c430d85dedebff140e46cd0527e71610f96bad887bd242535971a6528382772b59ccf79e842da42e65b58c4e5c6fa2b4e45988a54584eba8ac" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>
  
  This is a [steganography](https://en.wikipedia.org/wiki/Steganography) challenge. There are many tools for steg challenges and usually involve trial & error. This particular challenge cannot be solved online and needs a downloadable tool: [**Digital Invisible Ink Toolkit (DIIT)**](https://diit.sourceforge.net/) which can be downloaded here: https://diit.sourceforge.net/download.php. Once downloaded, double click `diit.jar` to open it. It works for Windows, Linux, and Mac OSX.
  :::warning
  You need to have Java 1.5+ installed on your computer for the program to run! 
  :::
  Once it is open, head to the `Decode` tab. Click `Get Image` and choose the image you downloaded for the challenge (`crowdsteg.png`). Then, click `Set Message` and enter any filename (.png extension) in your chosen location, this will be the extracted output file. Your next step will be to attempt every `algorithm` from the dropdown menu until one of them succeeds. Once it's succeeded, simply find and open your extracted image to get the flag!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)