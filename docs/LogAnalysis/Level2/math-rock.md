---
description: "Log Analysis | Level 2 - Math Rock"
sidebar_position: 4
tags: [level2]
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DownloadLink from '@site/src/components/DownloadLink';

# Math Rock

Log Analsysis | Level 2 - Math Rock

## Challenge

We recorded a beautiful session with Ichika Nito the other day. Unfortunately, a group of mischievous teens broke into our studio and messed with the frequency log data. We need the piece for our marketing, so it is crucial that you find the frequency that was manipulated so that we don’t make our customers’ ears bleed!

<DownloadLink file="assets/ugahacks10/ichika-nito.log">ichika-nito.log</DownloadLink>
[](./assets/ichika-nito.log)

:::tip hint
<b>
Here is a Python script to help you extract the column data from the log file:
[extract.py](./assets/extract.py)

What tool(s) is commonly used for log analysis?
</b>
:::

Q1. Which ticker contains the abnormal frequency data point?  
<PasswordForm hash="456e688ee12388847b3d245d8ae5d10f488dcdf1b5ad1a1aa6dddcb9ccc3e23c824e134b9f69fae368e69e18eba67fa5cc1dec6246bf5f58e1a5a2afcd9bac63" algorithm="sha512" />

## Solution

<details>
    <summary>Solution Guide</summary>

    Over 75% of log analysis challenges can be solved with [**Excel**](https://www.microsoft.com/en-us/microsoft-365/excel). Thus, **Math Rock** attempts to be an introduction to using Excel in order to solve log analysis challenges. After mastering Excel, it is recomended to learn DAAS tools like Splunk, Datadog, or Solarwinds to further refine your log analysis skills to become a master in this hacking form.

    The .log file is seperated into 4 columns: Time, Ticker, Frequency, and Amplitude. Now, we need to find a way to copy and paste each column as it's own column in excel. However, when I try to copy and paste the log file into excel, it puts all the data in one column, which is not what we want. Thus, we rely on good ol' reliable python to extract each individual column of the dataframe.

    I have provided the python file to help you with extraction in the **HINT**. Now if there was a way to copy and paste each individual column from the log file to their own respective column in the excel sheet without python, then be my guest. However, in this case, we are using the help of python to seamlessly copy over the data so that the excel sheet can mirror the log file.

    Although the python file extracts all the columns, we really only need to copy over 'time', 'amplitude' columns, and maybe the 'Ticker' column as well. Once you copied over the numbers and their headers to excel, select ONLY the ‘frequency’ and ‘amplitude’ columns. After selecting the two columns, search for ‘XY scatter’ and select the first scatter plot option. You should see an outlier in the data among the 'Y' axis. There is only one ticker that goes beyond the [-1.00, 1.00] Hertz frequency bound, and that ticker is the flag!

    P.S. This is the actual frequency data extracted from a snippit of a ichika-nito solo. You can reconvert the audio back into the actual song using Audacity in order to hear the sound byte.

</details>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
