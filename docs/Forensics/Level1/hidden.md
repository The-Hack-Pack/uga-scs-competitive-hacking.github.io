---
description: Forensics | Level 1 - Hidden
tags: [level1]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import '@site/src/components/css/challengeBox.css';

# Hidden
Forensics | Level 1 - Hidden
<div className="challenge-box">
  ## Challenge
  We have received an image which seems to contain hidden info. Can you find it?

  [Download file](./assets/car.jpeg)

  <PasswordForm hash="b51f39505642ecb4fb3a2600d57d3f53cdb15200140a8443ba4584c3471ce94522b395e3eb9464b5f97fd97dff16c5fbfc30b670a1be9b9286749b1bcbb706d5" algorithm="sha512" />
</div>

## Solution
<details>
  <summary>Solution Guide</summary>

  This is a simple challenge involving a hidden string. You can solve it by simply running the Linux command `strings <image>` to get the flag!
</details>

## Credits
- Author(s): Divesh Gupta (legendile7)