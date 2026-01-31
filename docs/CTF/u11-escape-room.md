---
title: "UGAHacks 11 Escape Room"
description: "Template for CTF Challenges"
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import PasswordForm from '@site/src/components/PasswordFormCTF';
import NameBanner from '@site/src/components/NameBanner';
import SidebarAutoCollapse from '@site/src/components/SidebarAutoCollapse';
import '@site/src/components/css/challengeBox.css';
import DifficultyLabel from '@site/src/components/DifficultyLabel';
import PointsLabel from '@site/src/components/PointsLabel';
import Leaderboard from '@site/src/components/Leaderboard';

<SidebarAutoCollapse />

# [CTF Name]
Welcome to the [CTF Name] Capture The Flag competition! You are allowed & encouraged to use any online tool including Google and AI.

*NOTE: Correct submissions are being saved, refreshing won’t erase them from the server.*
<NameBanner />

<!--<Leaderboard />-->


## [Category Name]

<div className="challenge-box">
  ### [Challenge Number] - [Challenge Title] <PointsLabel points={10}/><DifficultyLabel level="Easy" />
  [Challenge description goes here.]

  Flag Format: `[flag_format_here]`

  <PasswordForm
    hash="[hash_here]"
    algorithm="sha512"
    challengeName="[Challenge Name]"
    points={10}
  />

  <div className="challenge-author">Challenge Author: [Author Name] ([author_handle])</div>
</div>

<!-- Repeat the above block for each challenge -->

## [Another Category]

<div className="challenge-box">
  ### [Challenge Number] - [Challenge Title] <PointsLabel points={20}/><DifficultyLabel level="Medium" />
  [Challenge description goes here.]

  Flag Format: `[flag_format_here]`

  <PasswordForm
    hash="[hash_here]"
    algorithm="sha512"
    challengeName="[Challenge Name]"
    points={20}
  />

  <div className="challenge-author">Challenge Author: [Author Name] ([author_handle])</div>
</div>

<!-- Add more categories and challenges as needed -->
