# Continuous Delivery Alliance Web site

Can be browsed live at [alliance.praqma.com](http://alliance.praqma.com)

## Pipeline
The pipeline of the website can be found here: https://jenkins.praqma.cloud/view/Website_Pipelines/view/alliance.praqma.com/

## Contributing
The default, best and correct way to update the web site is to:
* clone this repo
* Change and deliver your changes based on your flavour:
  * a) Follow the [Git Phlow](https://www.praqma.com/stories/git-phlow/)
  * b) Push your changes to a `ready/<issue>-<what-did-you-solve>` branch
* Your changes are build (Jekyll build) and if succesfull the integration branch(`master`) is update and the update site is deployed automatically
* Post the deploying additional steps runs to check the website for dead links (LinkChecker) etc. See the Pipeline section above for details
