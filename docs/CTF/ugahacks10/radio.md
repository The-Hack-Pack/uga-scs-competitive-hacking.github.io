---
description: "Cryptography | Medium - Radio"
sidebar_position: 5
tags: [medium]
---

import PasswordForm from '@site/src/components/PasswordForm3';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Radio

Cryptography | Medium - Radio

## Challenge

We've intercepted a message between two radio stations regarding the upcoming album release of a famous band. Can you determine who the band is? (Please wrap your answer like such: scs\{answer\})

<audio controls>
  <source src="/assets/ugahacks10/radio.wav" type="audio/wav"></source>
</audio>
If the browser-based audio doesn't play: [Download Audio](./assets/radio.wav)

:::tip hint
<b>Find a DTMF (Dual Tone Multi-Frequency) decoder to convert the DTMF-frequencies into an array of numbers.</b>
:::

Q1 - 40 points  
What is the number that was recorded?
<PasswordForm hash="66f6ed1f4c38e74715952d39683dcc10ce23f3f9615509b80a4802a56b7c5965ec199bd3fe96e934fa6f850089c787bd80a8868f9506db3a5f49e001c9c1e50f" algorithm="sha512" />

Q2 - 60 points  
What is the plaintext English message in the recording?
<PasswordForm 
    hash="97003d49b60504aa593f6c6c4d843dc6a9ff47344a7ad5b2b9b729d43f72c08c07c34fa251ef9db1784e9e5032c4afa2b9ef4c8b54625a28c399f44390ca7e1d"
    algorithm="sha512"
    googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSdHuZffNNxYUsoV3ksNgy7aZ09bmF7N8UrUS3AZnLdS8Kt1pQ/formResponse"
    entryId="entry.1013997341"
/>

## Solution

<details>
    <summary>Solution Guide</summary>
    1. What is the number that was recorded?
       1. Go to [DTMF decoder tool](https://unframework.github.io/dtmf-detect/)
       2. Enter in the audio file
       <!--3. <b>scs\{27333\}</b>-->
    2. What is the plaintext English message in the recording?
       1. Go to T9 (Text Message Cipher) in [dcode.xyz](https://www.dcode.fr/t9-cipher)
       2. Choose the answer that fits best (might take multiple attempts)
       <!--3. <b>scs\{CREED\}</b>-->
</details>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
