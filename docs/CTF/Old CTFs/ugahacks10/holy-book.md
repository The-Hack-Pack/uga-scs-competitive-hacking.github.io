---
description: "Cryptography | Hard - Holy Book"
sidebar_position: 7
tags: [hard]
---

import PasswordForm from '@site/src/components/PasswordForm2';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Holy Book

Cryptography | Hard - Holy Book

## Challenge

What do these numbers mean? (Please wrap your answer like such: scs\{answer\})

[Download file](./assets/living%20on%20a%20prayer.mp3)

:::tip hint
<b> What is the easiest method to access the metadata of any file?</b>
:::

:::tip hint
<b> Think of ciphers that involve the title of this challenge.</b>
:::

Q1 - 100 points  
What is the hidden message?
<PasswordForm 
    hash="f19d5155550b369b7c57a30cf53954fa405b01f54e1389fc058a67dc822002d16aa1e1b5e20d74db9fa287f07cb477349a76544ac5d7a835a1d14b98067edc32"
    algorithm="sha512"
    googleFormUrl="https://docs.google.com/forms/d/e/1FAIpQLScejpY43zw9qjQpvY6lUnmgIouxd8yYeGxgjbeEIEujEEj1vw/formResponse"
    entryId="entry.618474535"
/>

## Solution

<details>
    <summary>Solution Guide</summary>
    1. Title is related to the cipher being used
    2. Lyrics is the book/dictionary for the cipher (which is in image metadata)
    3. To find the cipher, run `strings` on the mp3 file in Linux OR just open the file as a text file

        <details>
            <summary> Reveal Cipher </summary>

            Cipher: 159, 150, 147, 40, 150, 221, 285, 147, 281, 242
        </details>
    4. Copy paste Cipher and Lyrics (the “book”) into a decoder
    <!--5. <b>scs\{BADHAIRDAY\}</b>-->
</details>

## Credits

- Author(s): Divesh Gupta (legendile7)
