---
description: Cryptography | Medium - Radio
sidebar_position: 0
tags: [medium]
---

import PasswordForm from '@site/src/components/PasswordForm';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Radio

Cryptography | Medium - Radio

## Challenge

We've intercepted a message between two Radio stations regarding the upcoming album release of a famous band. Can you determine who the band is? (Please wrap all solutions within a ‘scs{}’ wrapper)

<audio controls>
  <source src="./assets/radio.wav" type="audio/wav"></source>
</audio>
If the browser-based audio doesn't play: [Download Audio](./assets/radio.wav)

:::tip
<b>Find a DTMF (Dual Tone Multi-Frequency) decoder to convert the DTMF-frequencies into an array of numbers</b>
:::

Q1 - 40 points
What is the number that was recorded?
<PasswordForm hash="66f6ed1f4c38e74715952d39683dcc10ce23f3f9615509b80a4802a56b7c5965ec199bd3fe96e934fa6f850089c787bd80a8868f9506db3a5f49e001c9c1e50f" algorithm="sha512" />

Q2 - 60 points
What is the plaintext English message in the recording? (ALL CAPS)
<PasswordForm hash="287347b120054521efcebb3e950021589403788ca98f94e1b3d9d0250fbf35ffae265f7a50250987148c566acd7061cceb2bfbb330e4e49dc8f17a51ceafdca9" algorithm="sha512" />

<!--
## Solution

<details>
    <summary>Solution Guide</summary>
    1. What is the number that was recorded?
       1. Go to [DTMF decoder tool](https://unframework.github.io/dtmf-detect/)
       2. Enter in the audio file
       3. <b>scs\{27333\}</b>
    2. <b>scs\{XWPS\}</b>
       1. Go to T9 (Text Message Cipher) in [dcode.xyz](https://www.dcode.fr/t9-cipher)
       2. Choose the answer that correlates fits best
       3. <b>scs\{CREED\}</b>
</details>
-->

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
