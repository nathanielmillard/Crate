![Crate](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/hero-with-link.png)

# Crate 👕👖📦

#### Get monthly subscription of trendy clothes and accessories.
- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
- **Mobile** (Android and iOS) Native App build with React Native
- Written in ES6+ using Babel + Webpack
- Designed using Adobe Experience Design. Preview it [here](https://xd.adobe.com/view/a662a49f-57e7-4ffd-91bd-080b150b0317/).


## Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering
- Multi-package setup and dev scripts for an automated dev experiance


## Useful for
- Developers with basic knowledge on React exploring advance React projects
- Developers learning React Native
- Exploring GraphQL
- Scalable project structure and code
- Starter application for Mobile and Web along with SSR
- Multi-package scripts
- Sample project with combination of all above


## Screenshots and GIFs
Click on image to view fullscreen and zoom

### Desktop
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/desktop-all-with-link.png)

![Crate Desktop](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/desktop-all-with-link.png)

### Mobile
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/mobile-all-with-link.png) · [GIF](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/mobile.gif)

![Crate Mobile](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/mobile-all-with-link.png)

### Tablet
[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/tablet-all-with-link.png) · [GIF](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/tablet.gif)

![Crate Tablet](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/tablet-all-with-link.png)


## Core Structure
    code
      ├── package.json
      │
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── mobile (Android, iOS)
      │   ├── assets
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Setup and Running
- Prerequisites
  - Node
  - MySQL (or Postgres / Sqlite / MSSQL)
- Clone repo `git clone git@github.com:atulmy/crate.git crate`
- Switch to `code` directory `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)
  - Modify `/mobile/src/setup/config.json` for API URL (tip: use `ifconfig` to get your local IP address)
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
  - Mobile: 
    1. Install packages `cd mobile` and `npm install`
    2. Install iOS dependencies `cd mobile/ios` `pod install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
  - Run Mobile `cd mobile` and `npx react-native run-ios` for iOS and `npx react-native run-android` for Android
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server

## Multi-package automation
- New developers are advised to run through the above 'setup and running' process before reading further.
- Optional multi-package automation for faster setup and easier dev environment initiation.
- No need to cd to sub-folders unless working with mobile or running a production build.
- Once Node, MySQL, repo clone and configuration are setup correctly
    - Switch to `code` directory `cd code`
    - Setup
        - Setup API, Webapp and Mobile with a single command `npm run setup`
    - Development
        - Run API and Webapp `npm start`, browse GraphiQL at http://localhost:8000/ and Webapp at http://localhost:8000/
        - Run API alone `npm start:api`, browse GraphiQL at http://localhost:8000/
        - Run Webapp alone `npm start:web`, browse webapp at http://localhost:3000/

## Resources and Inspirations
- ✍️ Opinionated project architecture for Full-Stack JavaScript Applications - [GitHub](https://github.com/atulmy/fullstack-javascript-architecture)
- 🌈 Simple Fullstack GraphQL Application - [GitHub](https://github.com/atulmy/fullstack-graphql)
- 🌐 Universal react application with server side rendering - [GitHub](https://github.com/atulmy/universal-react)
- Container Components - [Medium Post](https://medium.com/@learnreact/container-components-c0e67432e005)
- Zero to GraphQL in 30 Minutes - [YouTube](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=PLkuiMQfg5DujhOSZ1A8kDl0hKV_ICTjp-)
- Building a GraphQL Server [YouTube Playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)
- Universal JavaScript Web Applications with React by [Luciano Mammino](https://github.com/lmammino) - [YouTube](https://www.youtube.com/watch?v=0VEwRFP8WtI)
- Building Youtube UI in React Native in 30 Mins - [YouTube](https://www.youtube.com/watch?v=LdKtugH-sb8)
- Building Stellar Mobile UX With React Native - [YouTube](https://www.youtube.com/watch?v=ssXB9RMTpTs)
- Free MySQL hosting https://remotemysql.com


## Why open source a project and not a boilerplate or framework?
- While building a new project with Node, you can basically start scratch, adding libraries and tools as you go on building it further.
- Comparing with any other languague, you usually start with a framework, for example, Laravel (PHP), Django (Python) or Ruby on Rails (Ruby) which includes a ton of features and codebase which you never end up using.
- I've personally found, learning by going through a good project codebase step by step while building your own project helps in ease of understanding and remembering



## Contributors
<br>
In no particular order...
<br><br>

Ashley McDonald
[<img align="left" alt="ashley github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-ashley]
[<img align="left" alt="ashley linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-ashley]
<br />
<br>
Eric Hale
[<img align="left" alt="eric github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-eric]
[<img align="left" alt="eric linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-eric]
<br />
<br>
Tyler Fields
[<img align="left" alt="tyler github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-tyler]
[<img align="left" alt="tyler linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-tyler]
<br />
<br>
Kathryn Jackson
[<img align="left" alt="kj github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-kj]
[<img align="left" alt="kj linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-kj]
<br />
<br>
Nathaniel Millard
[<img align="left" alt="nathaniel github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-nath]
[<img align="left" alt="nathaniel linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-nath]
<br />
<br>
Stacy Potten
[<img align="left" alt="stacy github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-stac]
[<img align="left" alt="stacy linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-stac]
<br />
<br>
Travis McKinstry
[<img align="left" alt="corey github" width="22px" src="https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg" />][git-travis]
[<img align="left" alt="corey linkedin' | LinkedIn" width="22px" src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" />][linkedin-travis]
<br />

[git-ashley]: https://github.com/aemcdonald
[linkedin-ashley]: https://www.linkedin.com/in/aemcdonald/

[git-eric]: https://github.com/EHale64
[linkedin-eric]: https://www.linkedin.com/in/eric-hale-656843155/

[git-kj]: https://github.com/kathrynljackson
[linkedin-kj]: https://www.linkedin.com/in/kathrynlorrainej/

[git-tyler]: https://github.com/fieldstyler
[linkedin-tyler]: https://www.linkedin.com/in/tyler-fields-583084197/


[git-nath]: https://github.com/nathanielmillard
[linkedin-nath]: https://www.linkedin.com/in/nathanielmillard/


[git-stac]: https://github.com/stacyp2006
[linkedin-stac]: https://www.linkedin.com/in/stacy-potten/


[git-travis]: https://github.com/travisgm92
[linkedin-travis]: https://www.linkedin.com/in/travis-mckinstry/


## License
Copyright (c)

<!--The MIT License (http://www.opensource.org/licenses/mit-license.php)-->
