---
description: Password Cracking | Expert - Rulemaker
tags: [expert]
sidebar_position: 0
---

import PasswordForm from '@site/src/components/PasswordForm2';

# Rulemaker
Password Cracking | Expert - Rulemaker
## Challenge
A password hash was retrieved that needs to be cracked. We know it's based on animals but there's some weird prepending & appending with numbers and common special characters. Can you crack the hash?

Target Hash: `9ac155fa85bf02a8712c1498c1c58799`

<PasswordForm hash="281d94de86ee7784940315015a148730856f88fe6bd0babeedf4ec8a6a17cc372dd5d8524da97341d6929276618a5da2a22bad0d1b1ca4a8b517475002d2831e" algorithm="sha512" />

## Solution
<details>
  <summary>Solution Guide</summary>
  :::note
    This challenge assumes you know how to solve [**RockYou**](https://thehackpack.org/practice/PasswordCracking/Easy/rockyou), [**Fusion**](https://thehackpack.org/practice/PasswordCracking/Hard/fusion), & [**Diver**](https://thehackpack.org/practice/PasswordCracking/Hard/diver).
  :::

  You should know how to get the wordlist for animals (make sure to sanitize it, remove spaces, & make it lowercase). You'll notice that if you try any pre existing rules in hashcat, you won't get the password. This is because this challenge requires you to craft your own rules.

  ---
  
  <h2>How to make rules in Hashcat</h2>
  As you know from [**Diver**](https://thehackpack.org/practice/PasswordCracking/Hard/diver), Hashcat rules let you transform every word in your wordlist using lightweight text manipulation instructions. It’s like regex, but much more optimized and tuned specifically for password cracking.

  Rules are written one instruction per line, with each instruction telling Hashcat how to modify the base word. You can do things like:
  - Add characters (`$!` adds `!` to the end, `^@` adds `@` to the beginning)
  - Change case (`u` = uppercase all, `l` = lowercase all, `c` = capitalize)
  - Substitute characters (`saz` changes `a` to `z`)
  - Insert/delete characters at specific positions
  - Combine multiple operations in one line

  There's 2 types or rules: mutators (modify/replace characters) & additives (add/remove characters)

  Here’s a quick cheat sheet & guide: https://kaoticcreations.blogspot.com/2011/09/explanation-of-hashcat-rules.html


  You can combine rules like this: `^@ c $1`.
  That will take a word like `tiger` and turn it into `@Tiger1`.

  Once you have all the rules writted down in a text file, you can save it as `<name>.rule`. To use a rule, just append your traditional dictionary attack command with `-r yourRule.rule`.

  <h3>Rule stacking</h3>
  You can stack & combine multiple rule files (can be same or different). So let's say you have a rule file named `my.rule`, you can stack and make it apply twice by executing:
  ```bash
  hashcat -a 0 -m <mode> hash.txt wordlist.txt -r my.rule -r my.rule
  ```
  This helps you make smaller rule files with the function of bigger ones.

  ---

  Alright, now let's apply this new knowledge we've learned and make our own rule file! We know that we want to prepend and append special characters and numbers. Recall that prepending is done with `^` and appending is done with `$`. So, let's make our rule file (you can do it manually or write a script to automate it)!

  <details>
    <summary>Reveal rule file</summary>

    ```txt
    $~
    $`
    $!
    $@
    $#
    $$
    $%
    $^
    $&
    $*
    $(
    $)
    $-
    $_
    $+
    $=
    ${
    $}
    $[
    $]
    $|
    $\
    $;
    $:
    $"
    $<
    $>
    $,
    $.
    $/
    $?
    $0
    $1
    $2
    $3
    $4
    $5
    $6
    $7
    $8
    $9
    ^`
    ^!
    ^@
    ^#
    ^$
    ^%
    ^^
    ^&
    ^*
    ^(
    ^)
    ^-
    ^_
    ^+
    ^=
    ^{
    ^}
    ^[
    ^]
    ^|
    ^\
    ^;
    ^:
    ^"
    ^<
    ^>
    ^,
    ^.
    ^/
    ^?
    ^0
    ^1
    ^2
    ^3
    ^4
    ^5
    ^6
    ^7
    ^8
    ^9
    ```
  </details>
  Let's name it something like `additive1.rule` and try it out!
  ```bash
  hashcat -a 0 -m 0 hash.txt animals.txt -r additive1.rule
  ```
  :::tip
  Appending `-S` to your hashcat commands helps improve performance when you're using bigger rule files (this challenge won't use a big one)
  :::
  ...and you notice it gives you nothing. Well maybe this is because the rule is only prepending or appending one character, our password could potentially have more. So, let's try rule stacking! Apply this rule twice or more times if needed!

  <details>
    <summary>Reveal Final Command</summary>

    ```bash
    hashcat -a 0 -m 0 hash.txt animals.txt -r additive1.rule -r additive1.rule -r additive1.rule
    ```
  </details>

  You should now have cracked the password!

</details>

## Credits
- Author(s): Divesh Gupta (legendile7)