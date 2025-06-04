---
description: Fall 2024 Intro CTF
sidebar_position: 3
---

import PasswordForm from '@site/src/components/PasswordForm';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fall 2024 Intro CTF

## Challenges
All answers are case sensitive.
### Open Source Intelligence
We need to find more information about this image, can you answer the following questions?

[Download Photo](./assets/osint1.jpg)

What's the make of this car? (Company & Model) <PasswordForm hash="4fb8b0edef44c0e8e8738efa7431ed965966f942138dd8ef99441e5466f6a5243ff49e3af2c6c85c7b2b5e841aac54634545ec3c24a35f964d9762fe48385aa8" algorithm="sha512" />

What city is this picture taken in? <PasswordForm hash="4f4e0874171d2f99bae14f8f75040c9b7ffcdca7b6ef29505589e88502dca722a73cf710c4b8dc293b86b14846033244b8dabb5a43db01c82d1a479a85527644" algorithm="sha512" />

What phone was used to take this picture? (Just the company) <PasswordForm hash="973807e34fb710b43bafbe55ffcbc7ba91235ee1388e816cb91439d895bd28815734c9886e6ec68262ed8b39f93850e628ba637866726d1e7b726c5e090b0299" algorithm="sha512" />

### Cryptography
Cipher 1: `Kz za, Hxazk?`<PasswordForm hash="28b45042bfef7dd8a22f1a50f658bdf20934275d561b1d11128228570658561cdb96ba00ccf96b41680536f22acec927e02ea6823ccbbd11516be886cb68c6af" algorithm="sha512" />

Cipher 2 (all caps, space between words): `-.. --- - ... / .- -. -.. / -.. .- ... .... . ...`<PasswordForm hash="dd7945b0f8387d06cd3a048173d33ce64aca75358e106ab8dfa76cddf2c4345aef27e74ed577ecc85f88803b0e5ff0a9192270cb21c2771898ef9fc6bece740a" algorithm="sha512" />

### Web App Exploitation
Access the challenge website <a href="https://thehackpack.org/CTF/webChallenge1/" target="_blank">here</a>.

Flag 1: <PasswordForm hash="2ee39c027d5f776b629d8108abf124f9ae5e3aabadcc8a739936da3e8d7b2b45cacbdc0e70a3977bad1de260d2a9099732691fc280ca7dd2d88ae056088e92d1" algorithm="sha512" />
Flag 2: <PasswordForm hash="8d4275a78fd2b31778b648422dac4c56de08bbe30ded44108d1f676cd5a0fd0937315eeb4aac557afcabcc3d6bd82b3eef1b2f6e0d2a49f2ac4e21f011d1dbdb" algorithm="sha512" />


## Solution
<details>
  <summary>Solution Guide</summary>

  ## OSINT
  1. The model of the car is on the back. A quick Google search will give the company's name
  2. The car's license plate tells us we are probably in Georgia. There is also a street sign visible. Simply look up the street name along with the state on Google or Google Maps to find the city's name.
  3. This one is a bit trickier. You will have to use an image metadata analyzer (aka Image Exif Viewer) to find the answer. There are plenty online and almost any will work. Simply upload the picture and scroll through the shown metadata until you find the company's name.

  ## Cryptography
  1. Use a cipher identifier tool to figure out what method is being used, like [**DCode's Cipher Identifier**](https://www.dcode.fr/cipher-identifier). From there, it's trial and error with the different cipher tools shown. 
  
  <details>
    <summary>Reveal Cipher</summary>
    
    It is a simple Caesar Cipher (aka Shift Cipher) with a shift of `6`.
  </details>
  2. Again, use a cipher identifier tool like [**DCode's Cipher Identifier**](https://www.dcode.fr/cipher-identifier). It will tell you that the cipher is Morse Code. Simply go to the Morse Code tool and decode.

  ## Web App Exploitation
  1. Right click the hint image for Flag 1 and click `Inspect Element`. The image's alt text is the flag.
  2. The hint image shows the Cookie Monster, referencing the website's Cookies. These can be viewed by (assuming MS Edge or Google Chrome): 
      1. Inspect Element the page anywhere (or enter Developer Tools with `F12`)
      2. At the top of the Developer Tools window, navigate to the `Application` window. You may have to click the `+` to find it.
      3. Expand the dropdown for `Cookies` and click the only item underneath.
  This will show you a cookie called `flag_2` with a value of `VEhQe2Nvb2tpZV9tb25zdGVyfQ==`. This is the flag but it's encoded. You will need to decode this which can be done using a cipher identifier tool like [**DCode's Cipher Identifier**](https://www.dcode.fr/cipher-identifier). It will tell you that it is `Base64`. Click the given tool and decode it to find the flag!
  :::tip
  To make decoding `Base64` easier in the future, look out for `=` signs at the end of the cipher. If there is one or two `=` sign present at the end, it is most likely encoded in `Base64`.
  ::: 

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)