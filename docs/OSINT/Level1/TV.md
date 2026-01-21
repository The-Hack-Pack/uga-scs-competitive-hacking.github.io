---
description: Open Source Intelligence | Level 1 - TV
tags: [level1]
sidebar_position: 0
---

import PasswordForm2 from '@site/src/components/PasswordForm2';
import '@site/src/components/css/challengeBox.css';

# TV
Open Source Intelligence | Level 1 - TV

<div className="challenge-box">
  ## Challenge
  We have received a photograph that needs investigation. Can you find the following information?
  
  <a href="/assets/OSINT/TV.jfif" download class="download-btn-link">
    <button type="button" class="download-btn">Download TV.jpg</button>
  </a>

  Q1. Season & Episode of the show (Format: `S#E#` where `#` is the number):
  <PasswordForm2 hash="d138986980a277b8d6d77314ddb6c54da309991b5f92c761d8846b8af1242ac99fe9a4520e77fa5896b424f2f9f5cd63021a154bd68c8774b757fa45ef198838" algorithm="sha512" />

  Q2. Photographer Name:
  <PasswordForm2 hash="3365d7284e633947e0c2fb9c2b3566643e28755e505e81e0002dd2dcd042bf3c9c7a836264e5e8758d6a7921d2ff4e2f3f728a8ef3d3a5fed62ff31dc543353d" algorithm="sha512" />

  Q3. City where picture was taken:
  <PasswordForm2 hash="f57924c935edb0b5ccfbcdb48751eba20400ed09d1a77d3a0f9bd67ad64aa4810f75ce3ed4b26a8e8058b655b01a8e0d36ce6a9613a92b546945823e859245da" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>

  The questions here involve 2 different techniques. The first technique will be used for Question 1 which is just a simple reverse image search. We can use [**Google Images**](http://images.google.com/) for this (Another powerful option is Yandex). Just upload the image here and some similar images will show on the right, containing YouTube videos which reveal the Season and Episode of the show!

  Questions 2 and 3 will use a different technique. We will be analyzing the image's metadata or EXIF. We can use a simple website like **https://onlineexifviewer.com**. Simply upload the image here and you can see the Photographer's name under the "Artist" field. There is also a "Photo GPS Location" link you can click to see where the photo was taken on Google Maps, which will give you the city!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)