---
layout: front
title: Recent initiatives
---

**The CoDe Alliance** is gathering every six month. Gatherings are hosted by one of the members; we share thoughts, presentations, and demo results and new approaches.

See [the gathering page]({{site.url}}/gatherings){: target="\_blank"} for our next gathering.

Here is a list of our recent initiatives.

## Git Phlow {#gitphlow}

On the 7th gathering, we will demo the complete setup and showcase the pragmatic automated approach to working with git. We will dive into the different aspects of using _The Phlow_ and how they optimize your daily workflows.

Git Phlow will soon be available with support for Atlassian Jira and Windows. The Continuous Delivery Storyline entails our Pretested Integration plugin for Jenkins, which now supports scripted pipelines and comes as a git extension, for increased flexibility. This is all made possible by Kamstrup, fellow CoDe Alliance member.

## Jenkins as Code {#jac}

_The new Jenkins as Code is a quick-to-start and easy-to-use solution with an optional Docker setup._

By putting it into a plugin and separating configuration files - it’s up to users to decide where to store them and how to maintain them - we make it much more comfortable to use and keep up to date: all new features will come with plugin updates that won’t compromise configuration.

Lightweight Docker setup will make it even easier to start and maintain but isn’t obligatory. A plugin can be applied on already working Jenkins instances, no matter how it is hosted.

On the 7th gathering, we're ready to present a flexible MVP with complete separation of configuration for easy maintenance and upgrade.

## Custom Bill of Materials - Gradle plugin

_Build products from configuration of components and automate bill of material._

We can present a customer specific plugin, and if you're interested in being involved they are ready to make it publicly available.

The idea is old and already implemented several times at different companies. This Gradle plugin harvest the many best practices and distill it into something we can make an easy-to-use tool. It supports you in building your products from released components and to automate the tedious work of making bill of material.

Think software as inventory and work towards utilizing configuration rotation and dependency try-out.

## Orbit

_Managed OPS done right in the cloud or on-premise utilizing a large open source ecosystem._

Praqma's Oslo office is ready to introduce our Infrastructure as Code platform, how it is funded, its current status and roadmap.

## ASK - Atlassian Software in Kubernetes

_Running Atlassian products in a way that makes your operations impressed._

We will present how to run the Atlassian Data Center toolstack in Docker with Kubernetes to bring the strength of Data Center and Kubernetes together: Scale horizontally and get resiliency; Everything is described as code; Upgrade Jira with zero downtime and scale to meet demands in seconds.
ASK also supports Atlassian Server editions.

## Install hardware using containers

At our customers, we are working on installing hardware boards in their products using containers. The idea is to wrap dependencies for build and hardware installation in a container to alleviate other dependencies than physical cables and a Docker image. This enables build system and developers to use the same environment, as well as the installation.

If interested, you need to contact us before the gathering, so we can ask the customer if we can demonstrate the setup.

## PlusBump

_Your developers should be in control of the version bumps._

Who knows what the next version should be? Independently from your version scheme, it is always the developer who should have the last word in these matter, as they will be writing the code that makes your project break backwards compatibility.

It could be as easy as the developer using smart commit message by including phrases like “Bumps major” or “Patch bump” and then letting the wincrementor tool do the house-keeping of the next version of your project.

That is an automated approach!

We're ready to demonstrate the concept, and one implementation of if.

## Traceability is a theme {#traceability}

We have themed the gathering, purely to allow us to dive into traceability and topics on how to measure Continuous Delivery in your organization utilizing all the data you generate daily from your toolstack. The buzzword would probably be big data!

Within Praqma we have been looking into this for a while, and several efforts have been made available in a proof-of-concept state.

*[The Tracey effort](https://github.com/Praqma?utf8=%E2%9C%93&q=tracey&type=&language=)* is one of them and it uses a message bus and the [Eiffel](https://github.com/Ericsson/eiffel-remrem) protocol to create traces from the tools involved in Continuous Delivery. It could be used for event-based triggering, or used for visualization of interesting metrics or relations.

Our *[QuTiCon project](https://github.com/Praqma/quticon_visualization)* is also about visualization but the focus here is on displaying  time series data  to measure typically trends over time. We also have a collection of ELK scripts helping with the same data metrics.

Our vision includes answering questions like “Where is my commit”, assuming you have described your process first. Or “How long time does it take for a bug fix commit to get released?”
We see many of our customers, most of them members of the Code Alliance, investigating or directly working on things like these. We’re involved too.

There is room for both research and investigations, as well a lot of work we could share and reuse to come up with a good project to benefit all of the members. So on day two we plan to have workshops around these broad topics, but we will also have to dive into details and be concrete.

We will facilitate some workshops and we will start with getting ourselves the complete architectural overview of all the pieces we see belong in this area and how they work together nicely. We have a plan.

<br/>
