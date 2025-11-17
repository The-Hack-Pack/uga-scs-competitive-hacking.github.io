---
description: Open Source Intelligence | Level 1 - TV
tags: [level1]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';
import '@site/src/components/css/challengeBox.css';

# TV
Open Source Intelligence | Level 1 - TV

<div className="challenge-box">
  ## Challenge
  We have received a photograph that needs investigation. Can you find the following information?
  
  <a href="/assets/OSINT/TV.jfif" download class="download-btn-link">
    <button type="button" class="download-btn">Download TV.jfif</button>
  </a>

  Q1. Season & Episode of the show (Format: `S#E#` where `#` is the number):
  <PasswordForm hash="1eadf00209c56f7b9625ead3b7c74550b36ebff800212d20d159bc5f3d10f4c5d8f913ea7863dc38a3eaf521522f961649693c959bd94e7464b290ae408ce5e6" algorithm="sha512" />

  Q2. Photographer Name:
  <PasswordForm hash="0a0ee357d9d06a5bf34748c98f5549fc407f28870578c487f6a682743e472066fe23e78e2fe8eaf4693143539e5c953d3e969e5480101d900985449686da6d31" algorithm="sha512" />

  Q3. City where picture was taken:
  <PasswordForm hash="70f7a94a26b21b5aaec5d2103faa8fd78ed0b007605998b52039197057b5da4a9ae699af7c0cf226fa0ab525db86a54e7868934e9dc5b940adc265b043c56143" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>

  The questions here involve 2 different techniques. The first technique will be used for Question 1 which is just a simple reverse image search. We can use [**Google Images**](http://images.google.com/) for this (Another powerful option is Yandex). Just upload the image here and some similar images will show on the right, containing YouTube videos which reveal the Season and Episode of the show!

  Questions 2 and 3 will use a different technique. We will be analyzing the image's metadata or EXIF. We can use a simple website like **https://onlineexifviewer.com**. Simply upload the image here and you can see the Photographer's name under the "Artist" field. There is also a "Photo GPS Location" link you can click to see where the photo was taken on Google Maps, which will give you the city!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)