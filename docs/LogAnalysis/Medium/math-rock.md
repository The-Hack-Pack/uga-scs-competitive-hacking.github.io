---
description: Log Analysis | Medium - Math Rock
sidebar_position: 4
tags: [medium]
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadLink from '@site/src/components/DownloadLink';


# Math Rock

Log Analsysis | Medium - Math Rock

## Challenge

We recorded a beautiful session with Ichika Nito the other day. Unfortunately, a group of mischievous teens broke into our studio and messed with the frequency log data. We need the piece for our marketing, so it is crucial that you find the frequency that was manipulated so that we don’t make our customers’ ears bleed! (Please wrap your answer like such: scs\{answer\})

<DownloadLink file="assets/ugahacks10/ichika-nito.log">ichika-nito.log</DownloadLink>

:::tip
<b>
Here are some python files to help you extract the data from the log file:  
[amplitude.py](./assets/amplitude.py)  
[frequency.py](./assets/frequency.py)  
[ticker.py](./assets/ticker.py)

What tool(s) is commonly used for log analysis?
</b>
:::

Q1 - 100 points  
Which ticker contains the abnormal frequency data point?
<PasswordForm hash="2665432eaf58932349796499ee4ab959c83dd5a0a3f2fc9a02308091a0c02b38074425a759c16fdb5c73c228797bc400b517d2e5c3864b9896a3a31192af8781" algorithm="sha512" />

## Solution

<details>
    <summary>Solution Guide</summary>
    1. Create python scripts to extract each column
    2. Place the three extracted columns next to each other on the excel file
    3. Select the ‘frequency’ and ‘amplitude’ columns > search for ‘XY scatter’ > select the first scatter plot option
    4. Identify the outlier data point.
</details>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
