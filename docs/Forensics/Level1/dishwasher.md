---
description: Forensics | Level 1 - Dishwasher
tags: [level1]
sidebar_position: 4
---

import PasswordForm from '@site/src/components/PasswordForm2';
import '@site/src/components/css/challengeBox.css';

# Dishwasher
Forensics | Level 1 - Dishwasher

<div className="challenge-box">
  ## Challenge
  We have received an image of a robot that is hiding something. We know that there's a password involved which is name of this robot (no spaces, lowercase). See if you can find the secret.
  
  <a href="/assets/Forensics/robotsteg.jpg" download class="download-btn-link">
    <button type="button" class="download-btn">Download robotsteg.jpg</button>
  </a>

  <PasswordForm hash="ff028e5456fef3db9f5dd231ac24970b1a06599537cc035274dd26b204869e6c441acec25ef8afcae73f49d349e9507d6d060bd2e19680b326db9b68f9cdb274" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>
  
  This is a [steganography](https://en.wikipedia.org/wiki/Steganography) challenge. There are many tools for steg challenges and usually involve trial & error. We know there's a password involved which eliminates a lot of methods. We also notice the file extension is `.jpg`. These 2 clues are great indicators that the method used in this is `steghide`. But first, we need to find the password which is apparently the robot's name. See if you can use some open source intelligence to figure it out (remember, no spaces and all lowercase).

  <details>
  <summary>Reveal Name</summary>

  figure3
  </details>

  Ok now we simply need to extract the hidden info with this password using steghide. You can use the Linux command `steghide extract -sf <image>` (-sf means stego_file). Running this will ask you to enter a password, after which it will write the flag to a text file! 
  
  You can also use an online tool such as this: https://futureboy.us/stegano/decinput.html

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)