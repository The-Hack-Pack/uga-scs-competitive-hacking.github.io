---
description: Network Traffic Analysis | Easy - Ph4nt0m 1ntrud3r
tags: [easy]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ph4nt0m 1ntrud3r
Network Traffic Analysis | Easy - Ph4nt0m 1ntrud3r
## Challenge
We have intercepted a dank meme. Unfortunately, it seems to be corrupted. Can you fix it?

Download file: <a href={require('@site/static/assets/myNetworkTraffic.pcap').default} download>myNetworkTraffic.pcap</a>


## Solution
<details>
  <summary>Solution Guide</summary>
  
Opening this .pcap file, we see that there is 22 packets. The primary protocol in this .pcap is TCP. 
Knowing these details, we can then break down and find 

  Upon comparing the two files, you should immediately see a difference at the very beginning of the file. Here's what it looks like for each image:
  <Tabs>
  <TabItem value="corrupted" label="Corrupted Image" default>
    ![Corrupted Image](./assets/corrupted-hex.png)
  </TabItem>
  <TabItem value="sample" label="Sample Image">
    ![Corrupted Image](./assets/sample-hex.png)
  </TabItem>
  </Tabs>
  

  The sample image beings with `89 50 4E 47` (utf-8: `ëPNG`) whereas the corrupted image is missing it! This is the PNG file header. It is essential for an image rendering software to identify the image type and render it. Our corrupted image is missing this header, so let's add it. We can do this in Hexedit by **Right Clicking the first hex byte > Insert Bytes Here > 4 Bytes**. Then, we manually type the header stated above. We should be able to **Save as** to a new image and it should now open, giving you the flag!
</details>

## Credits
- Author(s): Aparna Sajith (apar2116)
