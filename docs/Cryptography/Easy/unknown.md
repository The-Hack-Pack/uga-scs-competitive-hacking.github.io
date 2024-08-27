---
description: Cryptography | Easy - Unknown
tags: [easy]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';

# Unknown
Cryptography | Easy - Unknown

## Challenge
We have intercepted a message written in a strange language, see if you can decrypt it.

![Message](./assets/1.png)

<PasswordForm hash="67d39006efe5c9c0bdc62389ca3fcea4421f45dcb516b1a09f54852b91f30a26976a2607702d889cf1a52d590b3e2e9ec65f19c1a9ba02044ec8a3d2bbfa876f" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  
  Let's analyze this message further. It seems to be a symbol cipher made of some strange symbols. However, there is a way to identify this cipher with a website.
  
  :::info
  Any time you have a symbol cipher, use this website: https://www.dcode.xyz/symbols-ciphers.
  :::

  After scrolling and comparing the message with the ciphers on the website, you should be able to identify the type of cipher used.

  <details>
    <summary>Reveal Cipher</summary>

    Unown Pokemon Alphabet
  </details>

  Great! Now we just have to go to that cipher, input the symbols, and decrypt!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)