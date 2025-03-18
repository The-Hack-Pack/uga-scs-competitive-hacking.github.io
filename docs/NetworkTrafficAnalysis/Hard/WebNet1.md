---
description: Network Traffic Analysis| Medium - PcapPoisoning
tags: [medium]
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadLink from '@site/src/components/DownloadLink';

# PcapPoisoning
Network Traffic Analysis | Medium - PcapPoisoning
## Challenge
Hide and Seek in this .pcap file. We need to find the flag inside of this file. 
There are two ways to solve this challenge. See if you can find it the fastest. 
<DownloadLink file="assets/trace.pcap">trace.pcap</DownloadLink>

## Hints
<details>
  <summary>Solution Guide</summary>

  Before we dive into the solution, there are a couple of ways we can solve this challenge. 
  Once we open this .pcap file, we find that there is a total of 1510 packets. 
  In this case, there are too many packets for us to go through every single packet. 
  Let's try looking at the statistics as well as the properties of this file to see if there is anything that stands out in this case. 
  Knowing one of the packets contains the flag in it, what filter can we use in this case? 
  </details>

## Credits
- Author(s): Aparna Sajith (apar2116)

