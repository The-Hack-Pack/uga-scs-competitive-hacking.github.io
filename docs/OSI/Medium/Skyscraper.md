---
description: Open Source Intelligence | Easy - TV
tags: [medium]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm';

# Skyscraper
Open Source Intelligence | Easy - TV
## Challenge
We have received a photograph that needs investigation. Can you find the following information?

[Download Photo](./assets/skyscraper.jpg)

Q1. Name of the building (one word):
<PasswordForm hash="16e59805e030f81a011cd8d7e2bc1afac23872e77fee22fe610017fc23d5c8ea6508b790a9015d6d41b65c49f82de67508b76d8505531cbace503fd0977d6cb9" algorithm="sha512" />

Q2. Height of the building (number of feet):
<PasswordForm hash="489e0295450907aed85a453525f115f56fa142c4e2a549ba69faef3d684e11925699b323e41717c52c2fafaf741a1432f6596c46da1e97f353f378d001e65d0c" algorithm="sha512" />

Q3. What year was this building built?
<PasswordForm hash="5ac8c0e24a0918f67ad4099606af4e6dd5e120f92d3902ffc17cf80a3dc258631220bb57970caeb0b9732c623c5363d711390de76354df84aec836a6f4c035f8" algorithm="sha512" />

Q4. What is this building's Building Identification Number (BIN)?
<PasswordForm hash="06172fefe8ce12eb6394ce1e2cdc1010ebf0f17738f677eed6a52d7e313a6a7f493fb1f9c1cf693e78ad484146c1bcaec9f77f51cf6922dd3a21a5b83e0adbc1" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>

  The questions here involve multiple different techniques. You should be able to solve questions 1-3 with knowledge from the Easy challenges. We can use [**Google Images**](http://images.google.com/) for this (Another powerful option is Yandex). Just upload the image here and it will show the building's name. You can then simply go to the Wikipedia page for this building to find its height and year it was built.

  Question 4 is a tricky one. It assumes you have the answers to the previous questions so proceed when you've solved those.
  <details>
    <summary>Reveal Question 4 Solution Guide</summary>

    This one requires a bit more steps and some trial & error, as real OSI challenges often require you to. So, we know that this building is the Flatiron building, which is in New York City. NYC has a building records website that you can find by searching it up: **https://a810-dobnow.nyc.gov/publish/Index.html#!**. This website can search the Public Portal for a particular building with `Address`, `Borough, Block, Lot`, and `BIN`. We are looking for the BIN so we obviously can't search with that. So, you have 2 options left. The problem with the Address option is that we have no clue what the House Number field is supposed to be for this building. Some searching could help you figure it out but I found it easier to use the other option (`Borough, Block, Lot`).
    
    This option has 3 fields: Borough, Block, and an optional Lot. To find the Borough, you can search up `"what borough is flatiron building in"`. The Block is the tricky part to find that will require trial and error. I searched up `"flatiron building block number"` in Google and browsed the results. You could potentially click and check all the initial links but if you scroll a little bit, you will find a PDF doc from the nyc.gov website which seems like a really good source to check out.

    <details>
      <summary>Reveal Borough and Block</summary>

      The Borough is `Manhattan`. The Block can be found on this pdf: **https://s-media.nyc.gov/agencies/lpc/lp/0219.pdf**. One of the initial lines contains not just the Block number but also the Lot (`Block: 851, Lot: 1`).
    </details>

    After you have these fields, you can now search the database with it, double click the only result, and it should give you the Flatiron Building with the BIN!

  </details>  

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)