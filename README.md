<p align="center">
<img src="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/blob/main/static/img/social.png" alt="Logo" width="500" height="250" />
<h1 align="center">The Hack Pack Website</h1>
<p align="center">
<a href="https://github.com/andreasbm/readme/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Docusaurus-v3.7.0-blue.svg" height="20"/></a>
<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/The-Hack-Pack/uga-scs-competitive-hacking.github.io.svg" height="20"/></a>
<a href="https://github.com/andreasbm/readme/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
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

- [➤ Contribution Guide](#contribution-guide)
- [➤ Have Questions?](#have-questions)
- [➤ FAQ](#faq)
- [➤ Contributors](#contributors)
- [➤ License](#license)
</details>

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#contribution-guide)

## Contribution Guide

**This is our guide on how you can make your own challenges or edit existing ones for this website!**
<br>

Our GitHub repository is available [**here**](https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io). We use a static-site generator called [**Docusaurus**](https://docusaurus.io/) version 3.7.0, which you should familiarize yourself with first. After you have a basic understanding of the documentation, you can proceed to either make your own challenge or edit an existing one!

### Creating a New Challenge

1. Fork the repository and clone it to your device
2. Head to the `docs` folder from root and you will see folders for all the categories
3. Head to the folder for your challenge's category
4. Head to the respective difficulty folder contained inside
5. Create a text document (.md extension)
6. Name the text document to your challenge's name
7. Copy-paste the template below into your doc

<details>
<summary>💡 <b>Tip</b></summary>
➤  <b><i>Make sure to replace every field in ALL CAPS with your challenge's information!</i></b>
</details>

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

8. If you have any downloadble files, place them in the `assets` folder (which should be in the same directory as your challenge)
9. Make sure to convert your answer(s) to SHA-512 (can be done at a site like [**this**](https://sha512.online/)) and put it in the PasswordForm component(s).
10. Make a pull request to the development branch and an officer will validate and approve you!

<details>
<summary>📝 <b>Note</b></summary>
➤  <b><i>Make sure to DM one of the officers with the answer(s) to the challenge! This is required for approval!</i></b>
</details>

<details>
<summary>📝 <b>Note</b></summary>
➤  <b><i>DO NOT TOUCH THE GH-PAGES BRANCH!</i></b>
</details>

### Editing an Existing Challenge

Do you want to fix a challenge or update solution guide? To edit an existing challenge, you can simply click the "Edit This Page" link at the bottom of the challenge page. From there, you can fork the repository, edit the page, and make a pull request to the `development` branch. Our officer team will review the changes and publish them!

### Creating a New Writeup

### Editing an Existing Writeup

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

## Contributors

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#license)

## License
