---
description: "Forensics | Easy - Speed"
sidebar_position: 2
tags: [easy]
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Speed

Forensics | Easy - Speed

## Challenge

This music is so jarring!! Why are there so many weird sounds?! I wish there was a way to look into the audio and clean out the clutter. (Please wrap your answer like such: scs\{answer\})

<audio controls>
  <source src="/assets/ugahacks10/sonic.wav" type="audio/wav"></source>
</audio>
If the browser-based audio doesn't play: [Download Audio](./assets/sonic.wav)

:::tip hint
<b>How can you access the spectrogram of this wave file?</b>
:::

Q1 - 100 points  
What is the hidden message?
<PasswordForm 
    hash="177b313d458854c6b227dfdfe9059802b38e70c91d482e0aa7b466789d05cc591f7c994940cd8f8c60a8a4ec17b75619010fb233536cab335c72dac3bbee7434"
    algorithm="sha512"
    googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSehukyoaR8WeLBkYXYmq2cqb9VATCBSHvCO_9cbipi8Chez3w/formResponse"
    entryId="entry.618474535"
/>

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
    <!--3. Answer: <b>scs\{LIVE AND LEARN\}</b>-->
</details>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
