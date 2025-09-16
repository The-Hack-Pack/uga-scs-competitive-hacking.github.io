---
description: "Password Cracking Flash CTF"
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PasswordForm from '@site/src/components/PasswordForm4';
import NameBanner from '@site/src/components/TeamNameBanner';

# Password Cracking Flash CTF
Welcome to the Fall 2025 Kickoff Capture The Flag competition! You will work in teams of 4. Questions have varying point values.

**Total Points Available: 325**

*NOTE: Your correct answers are being saved and sent even if you refresh the page.*
<NameBanner />

## Password Cracking
### Challenge 1
(10 points)

We've received a password hash from the rockyou breach:

`84d961568a65073a3bcf0eb216b2a576`
<PasswordForm
  hash="9ad0d01d1766bb60025ba3403e851d1493a1ce2f14bdcf14d198f4a49e083f4547a6e5f9908444aad02d8d2383fbc74af021c7ee797ea13254c6603de76291b8"
  algorithm="sha512"
  challengeName="Passcrack 1"
  points={10}
/>

### Challenge 2
(15 points)

We've received a password hash based on sports:

`f64d4211274466092708a6eea3342151245584673c8ea8a46a4caa4fdef9d73a`
<PasswordForm
  hash="5eb2887d20e4c8612fcf93746dea0aba02869ba52635390b8d2a289e5ab7224186d7b4dd3ba6060d8e223a3b3f661076913b9409fac648e2046687f99dba7332"
  algorithm="sha512"
  challengeName="Passcrack 2"
  points={15}
/>

### Challenge 3
(10 points)

We've received a password hash in the format of `THP-DML?-249#` where `?` is an uppercase letter and `#` is a digit:

`cc1f062de5a0967c1c3d7ae4b4c5aeee`
<PasswordForm
  hash="586d15ab97b01efe9ad559c0ece1799fdcb0e372713eee8c2b4cc2961a98739588f9c6b1f80ec701f63230abfcca8b0026ba382d823aed1bf2c8db9e29d4fb85"
  algorithm="sha512"
  challengeName="Passcrack 3"
  points={10}
/>

### Challenge 4
(10 points)

We've received a windows password hash: 

`E395FEF7152D0C07AAD3B435B51404EE:20CAF4C7BCCEA1964E1646D17B1C040F`
<!--Password: sigma69 -->
<PasswordForm
  hash="b747a981ade6d576278bd180618bd7e68386aa4c105ea4f5b21547dd5d5ba0940c60bd57038366147ee28ccbf402a92f2509d0e6cd44792545d1a9e0608e493f"
  algorithm="sha512"
  challengeName="Passcrack 4"
  points={10}
/>

### Challenge 5
(20 points)

We've received a password hash in the format of an [animal](./assets/wordlist.txt) with 2 digits appended:

`ca07b2edbbf3828ec7d5520914be841d`
<PasswordForm
  hash="678ae520b4721de37698c0421b8f2f0d5349d8c51f6673b09bd3fa2a3d2b28506799fe4f46d36a90aebca3c80b8cd7a3a4b05bd737b492466c7487cc5e9f6387"
  algorithm="sha512"
  challengeName="Passcrack 5"
  points={20}
/>

### Challenge 6
(30 points)

We've received a password hash based on the 10k most common passwords with 1 digit prepended. (Hint: SecLists)
<!--Password: 5hello1 -->
`e33ed4caab4356c883fb0eddef8176db`
<PasswordForm
  hash="434b2ae2d143a840dda821ee4b2b20660491484fd3a17300caf8d8b4cba888cf66eee038aacc393fcf9097740c5c7bd881174454589578e31bf3803112e84797"
  algorithm="sha512"
  challengeName="Passcrack 6"
  points={30}
/>

### Challenge 7
(25 points)

We've received an encrypted PDF file with a password from rockyou.txt.

[Download PDF](./assets/pdf-protected.pdf) (If it opens in new tab, use Ctrl/Command + S to save).
<!--Password: mcqueen1-->

<PasswordForm
  hash="10bfa5178194b4876ba4680e14217c1527441d6b7e7eb2c483800b9399507bb144102eec5553b7ede61028f18d7018098136e3f94074e910219702b2cacc370c"
  algorithm="sha512"
  challengeName="Passcrack 7"
  points={25}
/>

### Challenge 8
(25 points)

We've received an encrypted ZIP file with a password in the form of `password-23##52` where `#` is a digit.

[Download Zip](./assets/protected.zip)
<!-- Password: password-237452 -->
<PasswordForm
  hash="140ce7afb8f1c90f83b0fdb3474a7fac44a9c686526bd3d1fb204faab0424c4b79d591b5de87b6a008e448a282dd1a73e86d2a3618bb59af1f73b276b9c398da"
  algorithm="sha512"
  challengeName="Passcrack 8"
  points={25}
/>

### Challenge 9
(60 points)

We've received a linux binary that asks for a password, can you figure it out?

[Download Binary](./assets/trees.bin)
<!-- Password: sycamore -->
<PasswordForm
  hash="7e7010fe3ab51b740d2783585b24b52995d5c4e7e659908ee950c486deb51a2aa6e688546cf3e1f69c66aeec17dded0ebba86110aa4b16e09025ed4cc254d3a9"
  algorithm="sha512"
  challengeName="Passcrack 9"
  points={60}
/>

### Challenge 10
(50 points)

We've received a `/etc/shadow` file from a linux environment, can you get into admin account? It seems to be based on default passwords. (Hint: SecLists)

[Download /etc/shadow](./assets/shadow.txt)
<!-- Password: kn1TG7psLu -->
<PasswordForm
  hash="e9c1a065977f25f20e197d14a0b331e89d349e004071095b35157091a29076b70a785bddb82f2926c4527bc235115382ff5d8107c44e9f0f12eca6a13dc8f0a3"
  algorithm="sha512"
  challengeName="Passcrack 10"
  points={50}
/>

### Challenge 11
(40 points)

We've received a password hash that's based on our about page with 1 number appended. (Hint: You can make a wordlist with `cewl <website> -w <output>`)

`1719e76336b93effb3d3cc3ca781fade`
<!-- Password: Roy1 -->
<PasswordForm
  hash="50ee3bc067a235724487014812a4f6b33d5f8e502b7877239c4495aa314a6f4070643b14c1ed094d41f5c4330ac86e351419052c862961713526a29606c9cb39"
  algorithm="sha512"
  challengeName="Passcrack 11"
  points={40}
/>

### Challenge 12
(30 points)

We've recieved a zip file with an encrypted zip file inside, can you get in? (Hint: meta)

[Download Zip](./assets/outside.zip)
<!-- Password: 8rhq209rhq90hf22rh09qiwfq -->
<PasswordForm
  hash="2684c41e86acae180e07d02c7b3930bb0f5b0d5746355f9b886dd0091093ed46003a2f13296828ce50d38981593f376ed5eecee8d42515df7b30cb71375d2a21"
  algorithm="sha512"
  challengeName="Passcrack 12"
  points={30}
/>


## Credits

- Author(s): Divesh Gupta (legendile7)
