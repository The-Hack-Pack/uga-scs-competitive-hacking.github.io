---
description: OSINT | Medium - Dog Hound
sidebar_position: 6
tags: [medium]
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dog Hound

OSINT | Medium - Dog Hound

## Challenge

My cousin is going on an excursion to a historical artists’ birth city. He sent me coordinates of the place. I can't seem to figure out where this location is. Can you help me out? (Please wrap your answer like such: scs\{answer\})

<b><i>45S 656837.40 3792031.36</i></b>

:::tip hint
<b> Think of the coordinate systems we went over in our presentation.</b>
:::

Q1 - 90 points  
What is the city that the coordinates lead to?
<PasswordForm hash="3c8aeee378f2578fbdf406eb9858d8ba039eb6cf31131905ce3a7e57ae7b2842441b838e2a62ddbf4ed1d82473c9a4a07b3d6732127e54978f875e892a688275" algorithm="sha512" />

Q2 - 10 points  
What famous artists’ hometown is my friend visiting? (no middle name)
<PasswordForm 
    hash="5bd2ee48181e875fc89cf916e1228c8a09f7005cb4ce05498480bd1f999bb4a8d3795097b5f2dcfc4ec7c23fa2c170eb38012746a25041fca06972c8fbe6f12c"
    algorithm="sha512"
    googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSfOrtwfCcsLNtd3y0AmlD3wHgPSXjpDZ6DrsOaIqQpfbtaQxA/formResponse"
    entryId="entry.1013997341"
/>

## Solution
<details>
    <summary>Solution Guide</summary>
    1. What is the city that the coordinates lead to?
       1. Use a [UTM to latitude and longitude converter](https://www.engineeringtoolbox.com/utm-latitude-longitude-d_1370.html)
       2. Enter in the coordinate values: 45S 656837.40 3792031.36
       3. Get the Latitude and Longitude
          1. Latitude : 34.2576 deg, or 34 deg 15 min 27.36 sec
          2. Longitude: 88.7034 deg, or 88 deg 42 min 12.24 sec
       4. (Optional) Convert to WSG84 for easy tracking: 34.2576° N, 88.7034° W
       5. Paste that WSG84 location into google maps
       <!--6. scs\{Tupelo\}-->
    2. What famous artists’ hometown is my friend visiting? (no middle name)
       1. Search up “what famous artist was born in tupelo mississippi”
       <!--2. scs{Elvis Presley}-->
</details>

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
