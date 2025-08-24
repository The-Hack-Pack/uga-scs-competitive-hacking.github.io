---
sidebar_position: 1
---

# Contribute

This is our guide on how you can make your own challenges or edit existing ones for this website!

## Getting Started
Our GitHub repository is available [**here**](https://github.com/The-Hack-Pack/uga-scs-competitive-hacking.github.io). We use a static-site generator called [Docusaurus](https://docusaurus.io/) version 3.8.2, which you should familiarize yourself with first. After you have a basic understanding of the documentation, you can proceed to either make your own challenge or edit an existing one!

## Challenges
### Creating a New Challenge

    To make your own challenge, first fork the repository and clone it to your device. Next, head to the `docs` folder from root and you will see folders for all the categories. Head to the folder for your challenge's category, then to the respective difficulty folder contained inside, and then create a text document (.md extension). Name it to your challenge's name. Then, copy-paste the template below into your doc.
    :::note
    Make sure to replace every field in ALL CAPS with your challenge's information!
    :::

    <details>
        <summary>Reveal Template</summary>

    ```md
    ---
    description: CHALLENGE-CATEGORY | DIFFICULTY - CHALLENGE NAME
    tags: [DIFFICULTY-TAG-LOWERCASE]
    sidebar_position: INTEGER
    ---

    import PasswordForm from '@site/src/components/PasswordForm2';

    # CHALLENGE-NAME
    DESCRIPTION-FIELD-FROM-ABOVE-COPY-PASTED-HERE

    ## Challenge
    CHALLENGE-DESCRIPTION-HERE

    ![DOWNLOADABLE FILE](./assets/YOURFILE)

    <!--- This is an answer submission form, you can have multiple --->
    <PasswordForm hash="ANSWER-HASH-GOES-HERE" algorithm="sha512" />

    ## Solution
    <details>
      <summary>Solution Guide</summary>

      SOLUTION GUIDE HERE, LEAVE BLANK LINE ABOVE. DO NOT INCLUDE ANSWERS HERE, ONLY HOW TO SOLVE.
    </details>

    ## Credits
    - Author(s): YOUR NAME(S)
    ```

    </details>

    If you have any downloadble files, place them in the `assets` folder (which should be in the same directory as your challenge). Make sure to convert your answer(s) to all **lowercase** and then to **SHA-512** (can be done at a site like [**this**](https://sha512.online/)) and put it in the PasswordForm component(s).

    :::note
    Make sure to DM one of the officers with the answer(s) to the challenge! This is required for approval!
    :::

    And you're done! Make a pull request to the development branch and an officer will validate and approve you!

### Editing an Existing Challenge

Do you want to fix a challenge or update solution guide? To edit an existing challenge, you can simply click the "Edit This Page" link at the bottom of the challenge page. From there, you can fork the repository, edit the page, and make a pull request to the `development` branch. Our officer team will review the changes and publish them!

## Have Questions?

Reach out to us on our Discord server! If you want to communicate privately, DM our website admin (@cartmama) or email us at [hello@thehackpack.org](mailto:hello@thehackpack.org).
