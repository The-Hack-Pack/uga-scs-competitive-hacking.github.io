---
description: Password Cracking | Level 2 - Diver
tags: [level2]
sidebar_position: 1
---

import PasswordForm from '@site/src/components/PasswordForm2';

# Diver
Password Cracking | Level 2 - Diver
## Challenge
A password hash was retrieved that needs to be cracked. We have received intel that the password is vehicles but have some sort of rule affecting them.

Target Hash: `7d2eec8b9a92dd4d4dde274e09031129`

<PasswordForm hash="8ca396630157e199d0780785dd031679cc645a9df7943ce0261a8b2d78ae45b4bce7b8a5a4da7c90fb9ab8dcf7bcee2017540a8e29d613c07eab9544c1a7e2df" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  :::note
  This challenge assumes you know how to solve [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Level1/rockyou) and [**Fusion**](https://thehackpack.org/practice/PasswordCracking/Level2/fusion).
  :::

  ---

  <h2>Hashcat Rules</h2>
  Welcome to the world of hashcat rules!
  Before we get started, let me explain what rules are in hashcat and how they work.

  Hashcat rules are used to manipulate and transform wordlists during password-cracking attempts. They apply specific modifications (such as capitalization, reversing, appending numbers, or replacing characters) to existing dictionary words, effectively expanding your dictionary to cover variations of passwords without needing enormous lists. As such, they can only work with dictionary attacks (`-a 0`).

  **How Do Hashcat Rules Work?**

  Hashcat rules are simple yet powerful instructions that tell hashcat how to modify words from a wordlist. Each rule can consist of multiple commands, executed sequentially.

  Common hashcat rule operations include:
  - `l` - Lowercase all letters
  - `u` - Uppercase all letters
  - `c` - Capitalize the first letter
  - `r` - Reverse the word
  - `$X` - Append character 'X' at the end
  - `^X` - Prepend character 'X' at the beginning
  - `sXY` - Replace all instances of 'X' with 'Y'

  These simple commands can be chained together to form more complex rules.

  Here's how you'd typically structure a hashcat command using rules:
  ```bash
  hashcat -m 0 -a 0 hash.txt wordlist.txt -r rules.rule
  ```

  If you want to learn more in depth, try [**Rulemaker**](https://thehackpack.org/practice/PasswordCracking/Level2/rulemaker) after finishing this challenge. 

  ---
  Alright, now let's solve this challenge. You should be able to find a wordlist with knowledge from [**Fusion**](https://thehackpack.org/practice/PasswordCracking/Level2/fusion).
  :::warning
  When using wordlists with rules, you should always remove all spaces & special characters and convert the wordlist to lowercase beforehand
  :::
  Now, we know we'll have to use a rule in hashcat. Generally, your approach should start with premade rules that are preinstalled with Hashcat. In Kali Linux, you can find them under `/usr/share/hashcat/rules/`. If you explore and try some of the rule files there, you will eventually crack the hash. The challenge name is a hint to which one! Go ahead and craft your command.

  <details>
    <summary> Reveal Final Command </summary>

    ```bash
    hashcat -a 0 -m 0 hash.txt vehicles.txt -r /usr/share/hashcat/rules/dive.rule
    ```
  </details>

  You should now have cracked the password!


</details>

## Credits
- Author(s): Divesh Gupta (legendile7)