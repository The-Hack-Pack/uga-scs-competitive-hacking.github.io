---
description: Log Analysis | Medium - Math Rock
sidebar_position: 0
tags: [medium]
---

import PasswordForm from '@site/src/components/PasswordForm';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Math Rock

Log Analsysis | Medium - Math Rock

## Challenge

We recorded a beautiful session with Ichika Nito the other day. Unfortunately, a group of mischievous teens broke into our studio and messed with the frequency log data. We need the piece for our marketing, so it is crucial that you find the frequency that was manipulated so that we don’t make our customers’ ears bleed! (Please wrap all solutions within a ‘scs{}’ wrapper)

[ichika-nito.log](./assets/ichika-nito.log)

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
<PasswordForm hash="849b0ae0f07887057678b91304d63379b433755a1c50be41ce90c6598503908f6d955a79b34a178770cf7ea56830fc54f19c9fb61f451dba1e984d5462950d55" algorithm="sha512" />

<!--
## Solution

<details>
    <summary>Solution Guide</summary>
    1. Create python scripts to extract each column
    2. Place the three extracted columns next to each other on the excel file
    3. Select the ‘frequency’ and ‘amplitude’ columns > search for ‘XY scatter’ > select the first scatter plot option
    4. Identify the outlier data point.
    5. <b>scs\{XWPS\}</b>
</details>
-->

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
