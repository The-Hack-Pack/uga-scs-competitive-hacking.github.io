---
description: Reverse Engineering | Level 1 - Pyc
tags: [level1]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';
import '@site/src/components/css/challengeBox.css';

# Pyc
Reverse Engineering | Level 1 - Pyc
<div className="challenge-box">
  ## Challenge
  We have created a python script for you to break into as training. See if you can figure out a password that will authenticate with the program.
  
  <a href="/assets/ReverseEngineering/rev.pyc" download class="download-btn-link">
    <button type="button" class="download-btn">Download rev.pyc</button>
  </a>

  <PasswordForm hash="b5368f3271b484d3ca35e63a102e636dc8e83e238b10b70124a2da6a51e7f8060f6bb76e748d8c0d4f9da4d2012dd5db09e2f455f4d9d95bd9ac27439d37d890" algorithm="sha512" challengeName = "Pyc" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>
  
  Let's analyze this file further. This file is a .pyc file, which is a Python Compiled bytecode file. Since this is compiled, we cannot read the source code just by opening it. Try runnning the program and see what happens. We will be using a Linux terminal for this tutorial.

  :::warning
  If you have both Python 2 and Python 3 installed, you may need to specify `python3` instead of `python`.
  :::

  ```bash
  $ python rev.pyc
  ```

  After executing this, you will see that the program is asking for a password. If we try to guess a random password, we get a message of `Access Denied`. It seems we will have to dig further with this file. 
  
  Fortunately, there are local and online PYC decompilers. One great online tool is [**PyLingual**](https://www.pylingual.io/). After decompiling the PYC file, we can see the entire source code of the program.

  <details>
    <summary>Reveal Source Code</summary>

    ```py
    def caesar_shift_encrypt(text, shift):
    encrypted_text = ''
    for char in text:
        if char.isalpha():
            shifted_char = chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
            encrypted_text += shifted_char
        else:
            encrypted_text += char
    return encrypted_text

    def check_password(input_password):
        encrypted_password = 'yfwmjfpb'
        shift = 9
        encrypted_input = caesar_shift_encrypt(input_password, shift)
        if encrypted_input == encrypted_password:
            return 'Access Granted'
        return 'Access Denied'
    input_password = input('Enter the password: ')
    result = check_password(input_password)
    print(result)
    ```
  </details>

  Upon inspecting this python code, we can see that the script is using **Caesar Cipher** with a shift of **9** to encrypt the password and compare it against the ciphertext `yfwmjfpb`. We can easily reverse this with a website like https://www.dcode.fr/caesar-cipher and retrieve the password!
</details>

## Credits
- Author(s): Divesh Gupta (legendile7)