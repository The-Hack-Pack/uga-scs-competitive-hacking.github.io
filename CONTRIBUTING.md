# Contribution Guide

**This is our guide on how you can make your own challenges or edit existing ones for this website!**
<br>

> [!IMPORTANT]\
> ➤ **Our GitHub repository is available [\***here**_](https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io). We use a static-site generator called [_**Docusaurus**\*](https://docusaurus.io/) version 3.7.0, which you should familiarize yourself with first. After you have a basic understanding of the documentation, you can proceed to either make your own challenge or edit an existing one!**

## Creating a New Challenge

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

## Editing an Existing Challenge

Mabye you'd want to edit a challenge instead. To edit an existing challenge, you can simply click the "Edit This Page" link at the bottom of the challenge page.
From there, you can fork the repository, edit the page, and make a pull request to the `development` branch.
Our officer team will review the changes and publish them!

> [!NOTE]\
> ➤ <b><i>Make sure to DM one of the officers with the answer(s) to the challenge! This is required for approval!</i></b>

> [!CAUTION]\
> ➤ <b><i>DO NOT TOUCH THE GH-PAGES BRANCH!</i></b>

## Creating a New Writeup

> [Add description for adding a writeup here Divesh]

## Editing an Existing Writeup

> [Add description for editing a writeup here Divesh]

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#feedback)

## Have Questions?

That's it for now! Lot's of exiting features a going to be added in the future.
Reach out to us on our Discord server! If you want to communicate privately, DM one of the officers or email us at [hello@thehackpack.org](mailto:hello@thehackpack.org).
If you stumble upon an issue or have a feature request you are very welcome to open a Github issue or pull request. Have a great day!

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/fire.png)](#contributors)

## Thanks to all our Contributors!

<a href="https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=The-Hack-Pack/uga-scs-competitive-hacking.github.io" />
</a>
