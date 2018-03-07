# Contributing

First create an issue!

**Short**:

* Follow our [Git Phlow](https://www.praqma.com/stories/a-pragmatic-workflow/) pushing to `ready`-branches.
* Our pipelines will pick it up, and if good integrate to master where Github pages will publish it.

## The workflow

The default, best and correct way to update the web site is to:
* clone this repo
* Change and deliver your changes based on your flavour:
  * a) Follow the [Git Phlow](https://www.praqma.com/stories/git-phlow/)
  * b) Push your changes to a `ready/<issue>-<what-did-you-solve>` branch
* Your changes are build (Jekyll build) and if succesfull the integration branch(`master`) is update and the update site is deployed automatically
* Post the deploying additional steps runs to check the website for dead links (LinkChecker) etc. See the Pipeline section above for details
