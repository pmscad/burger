# Eat-Da-Burger

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

![[NPM version](http://img.shields.io/npm/v/npm-expansions.svg?style=flat-square)](https://www.npmjs.org/package/npm-expansions)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

Eat-Da-Burger! is a full-stack single page application built to practice and integrate the use of multiple web development techniques.

# Usuage

Users are able to input the names of burgers they'd like to eat, log it onto a menu, and when eaten, the burgers move to a different part of the screen displaying a list of devoured burgers.

![Screenshot](public/assets/img/screenshotBurger.png)

## Technologies and Techniques Used

- Node.js - an event-driven asynchronous Javascript open source server framework

* NPM packages - Including express, for creating server; mysql, for interacting with the SQ database; body-parser, for interpreting and reading data; method-override; and express-handlebars.

- MYSQL Workbench - for creating the local databses connection

- Handlebars - a Javascript templating framework to manage the display of data returned by the server

- MVC design - Model View Controller refers to a method of structuring a web development project into distinct but interconnected parts increasing efficiency and resusability of code.

- ORM - Object Relational Mapping is a technique of accessing relational databases and manages an application's CRUD interacton with a database.

* Heroku - the cloud platform used to deploy the application

## Development Notes

### Prerequisties

**Node**

Before you can install Node, you'll need to install two other applications. Fortunately, once you've got these on your machine, installing Node takes just a few minutes.[1]

**MAC OS**

> - **XCode** Apple's XCode development software is used to build MAC and iOS apps, bit it also includes the tools you need to compile software for use on your Mac. XCode is free and you can find it in the Apple App Store.
>
> * Via Terminal `xcode-select --install`
>
> * **Homebrew** Homebrew is a package manager for the Mac - it makes installing most open source software(like Node) as simple as writing `brew install node`
> * To install Homebrew just open the Terminal and type `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`. You'll see messages in the Terminal explaining what you need to do to complete the installation process. Now type `brew install node`.

**Windows Installation Steps**[2]

> - Download the Windows installer from the [Node.js&copy;](http://nodejs.org/) web site.
> - Run the installer (the .msi file you downloaded in the previous step.)
>
> * Follow the prompts in the installer (Accept the license agreement, click the NEXT button a bunch of times and accept the default installation settings).
> * Restart your computer. You won’t be able to run Node.js until you restart your computer.

**MySQL Workbench**

- It is recommended that you install MySQL Workbench v5.7 as it seems to be the most stable for all systems.

#### Windows

- Go to https://dev.mysql.com/downloads/windows/installer/5.7.html and download the version that matches your architecture.

#### MacOS

- Follow the instructions found here: [MacOS MySQL Workbench Installation](public/assets/readme/mysqlinstall_mac.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

[1] Adapted from instructions found here: <a href="https://blog.teamtreehouse.com/install-node-js-npm-mac"target="_blank">https://blog.teamtreehouse.com/install-node-js-npm-mac</a>

[2] Adapted from instructions found here: <a href="https://blog.teamtreehouse.com/install-node-js-npm-windows" target="_blank">https://blog.teamtreehouse.com/install-node-js-npm-windows</a>
