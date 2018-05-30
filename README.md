# Continuous Delivery Alliance Web site

Can be browsed live at [alliance.praqma.com](http://alliance.praqma.com)

## Serve local version

From root-folder of repository:

    docker run   --interactive --rm --tty --user $(id -u):$(id -g) --volume `pwd`:/website:rw --workdir /website --publish 4444:4000 praqma/jekyll:latest   bash -cr"jekyll --version && ruby --version && jekyll serve --watch --host=0.0.0.0 --incremental --unpublished --future"

## Pipeline
The pipeline of the website can be found here: https://jenkins.praqma.cloud/view/Website_Pipelines/view/alliance.praqma.com/

See [CONTRIBUTING](CONTRIBUTING.md) file for contributions. Always create an issue _first!_.

## Florent's layout notes

See [LayoutDesign.md](LayoutDesign.md)
