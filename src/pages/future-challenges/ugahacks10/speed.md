---
description: Forensics | Easy - Speed
sidebar_position: 0
tags: [easy]
---

import PasswordForm from '@site/src/components/PasswordForm';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Speed

Foresnics | Easy - Speed

## Challenge

This music is so jarring!! Why are there so many weird sounds?! I wish there was a way to look into the audio and clean out the clutter. (Please wrap all solutions within a ‘scs{}’ wrapper)

<audio controls>
  <source src="./assets/sonic.wav" type="audio/wav"></source>
</audio>
If the browser-based audio doesn't play: [Download Audio](./assets/sonic.wav)

:::tip <b>How can you access the spectrogram of this wave file?</b>
:::

Q1 - 100 points  
What is the hidden message?
<PasswordForm hash="ef817e81d95ff270551a8727a72f7a05130ddfed62c86111bbdfbf51d8d2bf48e70a95090e7b1230132b07463a06b7a02400f35c8e60e47c9e363b18fe08fa14" algorithm="sha512" />

<!--
## Solution

<details>
    <summary>Solution Guide</summary>
    1. Exploit 1:
       1. Go to the website ["Image to Audio Spectrogram Player"](https://nsspot.herokuapp.com/imagetoaudio/)
       2. Upload the .wav file
       3. Click play and find the flag
    2. Exploit 2 (More Difficult):
       1. Download audacity
       2. Drag and drop the .wav file
       3. Right click the track and select 'Spectrogram'
    3. Answer: <b>scs\{LIVE AND LEARN\}</b>
</details>
-->

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
