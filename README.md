<p align="center">
<img src="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/blob/main/static/img/social.png" alt="Logo" width="500" height="250" />
<h1 align="center">The Hack Pack Website</h1>
<p align="center">
<a href="https://github.com/andreasbm/readme/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Docusaurus-v3.7.0-blue.svg" height="20"/></a>
<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/The-Hack-Pack/uga-scs-competitive-hacking.github.io.svg" height="20"/></a>
<a href="https://github.com/andreasbm/readme/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/pulls"><img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/The-Hack-Pack/uga-scs-competitive-hacking.github.io?color=0088ff"/></a>
<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/issues"><img alt="Issues" src="https://img.shields.io/github/issues/The-Hack-Pack/uga-scs-competitive-hacking.github.io.svg" height="20"/></a>
<a href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="License: CC BY-NC-ND 4.0" src="https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg" height="20"/></a>

<p align="center">
<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/forks"><img alt="Forks" src="https://img.shields.io/github/forks/The-Hack-Pack/uga-scs-competitive-hacking.github.io.svg" height="20"/></a>
<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/stars"><img alt="Stars" src="https://img.shields.io/github/stars/The-Hack-Pack/uga-scs-competitive-hacking.github.io.svg" height="20"/></a>

</p>

<p align="center">
  <b>The University of Georgia's and the Hack Pack's premiere platform and resource base to train for CTF (capture the flag) competitions</b></br>
  <sub>Use this platform to strengthen your ethical hacking skills! With topics ranging from Open Source Intelligence to Forensics to Network Traffic Analysis and even Blue Team, the Hack Pack has got you coverted with whatever topic you desire. Contribute to our learning by creating a new challenge OR publishing writeups about challenges you have solved in previous capture the flag competitions.<sub>
</p>

<br />

<p align="center">
  <img src="https://github.com/thespcrewroy/uga-scs-competitive-hacking.github.io/blob/development/static/img/thehackpackwebsite.gif" alt="Demo" width="800" />
</p>

- **Simple**: Extremely simple to use - so simple that it almost feels like magic!
- **Powerful**: Customize almost everything - add your own chalenges, writeups, solution guides, and more!
- **Awesome**: The educational resource you didn't know you needed before. Maintained by a group of passionate cyber entusiasts.

<details>
<summary>📖 Table of Contents</summary>
<br />

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Contribution Guide](#contribution-guide)
  - [Creating a New Challenge](#creating-a-new-challenge)
  - [Editing an Existing Challenge](#editing-an-existing-challenge)
  - [Creating a New Writeup](#creating-a-new-writeup)
  - [Editing an Existing Writeup](#editing-an-existing-writeup)
- [Have Questions?](#have-questions)
- [FAQ](#faq)
  - [How can I get involved?](#how-can-i-get-involved)
  - [How can I support your program?](#how-can-i-support-your-program)
- [Thanks to all our Contributors!](#thanks-to-all-our-contributors)
- [Publication History](#publication-history)
</details>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#contribution-guide)

## Contribution Guide

**This is our guide on how you can make your own challenges or edit existing ones for this website!**
<br>

> [!IMPORTANT]\
> ➤ **Our GitHub repository is available [here](https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io). We use a static-site generator called [Docusaurus](https://docusaurus.io/) version 3.7.0, which you should familiarize yourself with first. After you have a basic understanding of the documentation, you can proceed to either make your own challenge or edit an existing one!**

### Creating a New Challenge

- [ ] Fork the repository and clone it to your device
- [ ] Head to the `docs` folder from root and you will see folders for all the categories
- [ ] Head to the folder for your challenge's category
- [ ] Head to the respective difficulty folder contained inside
- [ ] Create a text document (.md extension)
- [ ] Name the text document to your challenge's name
- [ ] Copy-paste the template below into your doc

> [!TIP]\
> ➤ <b><i>Make sure to replace every field in ALL CAPS with your challenge's information!</i></b>

<details>
<summary>‼️ <b>Reveal Template</b></summary>
  <pre>
    ---
    description: CHALLENGE-CATEGORY | DIFFICULTY - CHALLENGE NAME
    tags: [DIFFICULTY-TAG-LOWERCASE]
    sidebar_position: INTEGER
    ---

    import PasswordForm from '@site/src/components/PasswordForm';

    # CHALLENGE-NAME
    DESCRIPTION-FIELD-FROM-ABOVE-COPY-PASTED-HERE

    ## Challenge
    CHALLENGE-DESCRIPTION-HERE

    ![DOWNLOADABLE FILE](./assets/YOURFILE)

    <!--- This is a submission form, you can have multiple --->
    <PasswordForm hash="HASH-GOES-HERE" algorithm="sha512" />

    ## Solution
    <details>
      <summary>Solution Guide</summary>

      SOLUTION GUIDE HERE, LEAVE BLANK LINE ABOVE. DO NOT INCLUDE ANSWERS HERE, ONLY HOW TO SOLVE.
    </details>

    ## Credits
    - Author(s): YOUR NAME(S)

  </pre>
</details>

- [ ] If you have any downloadble files, place them in the `assets` folder (which should be in the same directory as your challenge)
- [ ] Make sure to convert your answer(s) to SHA-512 (can be done at a site like [**this**](https://sha512.online/)) and put it in the PasswordForm component(s).
- [ ] Make a pull request to the development branch and an officer will validate and approve you!

### Editing an Existing Challenge

Mabye you'd want to edit a challenge instead. To edit an existing challenge, you can simply click the "Edit This Page" link at the bottom of the challenge page.
From there, you can fork the repository, edit the page, and make a pull request to the `development` branch.
Our officer team will review the changes and publish them!

> [!NOTE]\
> ➤ <b><i>Make sure to DM one of the officers with the answer(s) to the challenge! This is required for approval!</i></b>

> [!CAUTION]\
> ➤ <b><i>DO NOT TOUCH THE GH-PAGES BRANCH!</i></b>

### Creating a New Writeup

> [Add description for adding a writeup here Divesh]

### Editing an Existing Writeup

> [Add description for editing a writeup here Divesh]

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#feedback)

## Have Questions?

That's it for now! Lot's of exiting features a going to be added in the future.
Reach out to us on our Discord server! If you want to communicate privately, DM one of the officers or email us at [hello@thehackpack.org](mailto:hello@thehackpack.org).
If you stumble upon an issue or have a feature request you are very welcome to open a Github issue or pull request. Have a great day!

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#faq)

## FAQ

### How can I get involved?

Follow our socials on our [linktree](https://linktr.ee/thehackpackUGA). Create an issue or pull-request. You are also very welcome to throw us a message at [hello@thehackpack.org](mailto:hello@thehackpack.org).

### How can I support your program?

There are lot's of ways to support us! We would be so happy if you gave this repository a star, tweeted about it or told your friends about this little corner of the Internet ❤️

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#contributors)

## Thanks to all our Contributors!

<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=The-Hack-Pack/uga-scs-competitive-hacking.github.io" />
</a>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#publication-history)

## Publication History

| Tag                 | Date           | Description                                                                  |
| ------------------- | -------------- | ---------------------------------------------------------------------------- |
| `Wave 1 Challenges` | `Sep 29, 2024` | released `CrowdSteg`, `Masked`, `Protected`, and `Top Card Maverick`         |
| `Wave 2 Challenges` | `Mar 25, 2025` | released `Math Rock`, `Overflow`, `Fusion`, `Web Net 1`, and `PcapPoisoning` |

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#license)

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)

<small>
Copyright &copy; The Hack Pack and the University of Georgia.
This work is licensed under 
a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a> to the public.
The content and opinions expressed on this Web page do not necessarily reflect the views of nor are they endorsed by the University of Georgia or the University System of Georgia.

<p align="right"><a href="#top">🔼 Back to top</a></p>
</small>
