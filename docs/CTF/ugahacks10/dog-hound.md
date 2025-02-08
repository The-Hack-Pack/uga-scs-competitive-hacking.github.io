---
description: "OSINT | Medium - Dog Hound"
sidebar_position: 6
tags: [medium]
---

import PasswordForm from '@site/src/components/PasswordForm3';
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
<PasswordForm hash="a0e47be46e1915f9458218f87c573978f7b53e02037e9df02f5dd7f2a3d4dbba50356aff7f61662034a723bbf89679299e33b174f571c2d48911b93226de47aa" algorithm="sha512" />

Q2 - 10 points  
What famous artists’ hometown is my friend visiting? (no middle name)
<PasswordForm 
    hash="4b284107b9c2f1ab0124829735c4abff4333d97752347968830cc630763d1487864f4e87207c82b5841fb714d09789521c50f858fabcd94899b2f164d7964a58"
    algorithm="sha512"
    googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLSfOrtwfCcsLNtd3y0AmlD3wHgPSXjpDZ6DrsOaIqQpfbtaQxA/formData"
    entryId="entry.1013997341"
/>

<!--
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
       6. scs\{Tupelo\}
    2. What famous artists’ hometown is my friend visiting? (no middle name)
       1. Search up “what famous artist was born in tupelo mississippi”
       2. scs{Elvis Presley}
</details>
-->

## Credits

- Author(s): Swapnil Roy (thespcrewroy)
