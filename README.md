# Cryptorado Community Website

---

### Live at: https://cryptorado.org

### Development Group Chat: https://keybase.io/team/cryptorado (ask `nukemandan` to join the development subteam)

### Project Board: https://github.com/Cryptorado-Community/Cryptorado-Home/projects/2

---

## Goal:

A community run and maintained website that **anyone can host** and contribute to. It will be the place to go to find out what is going on in the Cryptorado & DLT community. Resources will be available to get connected, to learn, and to get involved in all that is going on.

The site aims to be _static_ and _client side only compute (or integrated API calls for distributed compute)_ to enable one to completely own and manage their own data on the site, and are _incentivized_ to host and run operations related to the site. (see [Desired Architecture and Features](https://github.com/Cryptorado-Community/CORE-Website#desired-architecture-and-features))

## Dev Notes

Instructions and tips for development

### Install Quasar cli

https://quasar.dev/quasar-cli/installation

```bash
# Node.js >= 8.9.0 is required.
$ npm install -g @quasar/cli
```

### Run in dev mode

```
npm install
npm run dev
```

### Build and Deploy

> Note you need write access to [the Cryptorado-Community.github.io repo](https://github.com/Cryptorado-Community/Cryptorado-Community.github.io) to deploy to it! We also assume you have setup and use an [SSH key to access github](https://help.github.com/en/articles/connecting-to-github-with-ssh)

Set a new `gh-pages` remote for git:

```bash
# Note: run this in the pjoject directory!
$ git remote add gh-pages git@github.com:Cryptorado-Community/Cryptorado-Community.github.io.git
```


Build w/ quasar and deploy:

```bash
# Note: run this in the project directory!
$ npm run build
$ npm run deploy
```

## Key Content:

### An Event and Meetup Calendar

**Design: Take the UI and features of https://sched.com/directory**
Thus one can easily filter and find events and meetups that fit their interests and build a personal schedule.

- Filters:

  - [ ] Meetup name
  - [x] Tags/types/topic (many options, possibly as many as people add to events unrestricted)
  - [x] Date range
  - [x] Time of day
  - [x] Max Duration
  - [x] Location (city, possibly area/zone on map, even by venue?)
  - cost

- Assemble a personal agenda (NO LOGIN NEEDED):

  - [ ] Local storage of selected items
    - Cookie to hold this accross sessions?
  - [ ] Click to add/remove to local storage
  - [ ] Check for conflicting times
    - [ ] Page to resolve conflicts
  - [ ] Exportable file (ical?)
  - [ ] Link to add/export to common callender applications
  - [ ] Export to your calendar

- RSVP to organizers
  - [ ] External link (if hosted on other platform)
    - Plug in any RSVP tool/ticketing system.
    - Just be an email if no other platform hosts RSVPs (?)

**_Desired Features:_**

- [ ] Anyone can add events
  - [ ] **Might consider needing to run a hosting node to do so?**
    - Need Peer ID to write to events?
    - Need to host/serve the site on IPFS (or other DB) for events to show up?
  - [ ] Integrated form to submit any event.
    - [PeerPad](https://ipfs.io/ipns/peerpad.net/#/) as a way to do this?
    - [ ] Creates an issue /pull request to the hosting repo.
    - [ ] Secondary system to allow full commit access once approved.
- [ ] Automatically pulls new events from a linked site - like meetup.com
- [ ] Easy to use interface to add
- [ ] Can subscribe to updates via email
- [ ] Linked with twitter bot to broadcast
- Inspiration: - http://getmeetingstar.com/ - https://www.eventbrite.com/d/co--denver/events/ - Use Cards for events vs. a calendar layout

### Three Community ways to Communicate/Interact Online:

#### Community Chat

For short form conversation and pressing news/issues

- [ ] Not hosted on the site, but linked.
- [ ] https://matrix.org based with bridges to various clients (riot to start)
  - slack + discord + riot ( + signal + wire + telegram + ....)

#### Community Forum or Blog

A long form and focused medium to talk on specific topics.

- Redit like? Discourse like?
- **Reputation system like [Stack_Exchange](https://en.wikipedia.org/wiki/Stack_Exchange)**
  (see below - almost the same framework needed for a wiki)
- **OR** more like A blog platform? Something like [medium])(http://medium.com)?

#### A Community Wiki

For Educational / Informational content. refined ideas from Forum.

- [ ] Very likely a stand alone from the website itself - just linked/integrated
- [ ] Easy to contribute, highly navigable
- [ ] Easy to have community moderate
  - [ ] Thumbs up/down
  - [ ] Transparent flagging system
- Possible inspiration:

  - https://github.com/discourse/discourse

    - Use as a new community alt. to slack?
    - could qualify for
      - https://blog.discourse.org/2018/11/free-hosting-for-open-source-v2/
      - https://blog.discourse.org/2014/02/discourse-installs-for-non-profit-and-education/

  - https://github.com/rtfd/readthedocs.org
    - Backend to self host: http://www.sphinx-doc.org/en/master/
    - Documentation using **sphinx_rtd_theme** :point_left: :heart:
  - https://larecipe.binarytorch.com.my/docs/1.2/overview
  - https://www.gitbook.com/
  - https://www.mkdocs.org/

- Some key things to include (please add to the list :smile:):
  - https://alternativeto.net/list/818/how-to-live-without-google
  - Blockchain 101 links
  - Dev resources to self-learn
  - EFF cyber security recommendations
  - [ethviewer.live](ethviewer.live) website and blockchian expainers

#### Community Media Highlights

- Integration with:
  - [ ] Youtube (https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ)
  - [ ] Twitter (TBD)
  - [ ] Medium (TBD)

### A Community Resources Bulletin Board

#### Project Board

- [ ] Company Projects AND **Community Projects**
  - [ ] [Present known companies in google sheets](https://docs.google.com/spreadsheets/d/10FCHhI0S-FpCURPzDKdeOEgGIDolGQL58hTY5vpCnug/edit#gid=1084493826)
  - [ ] What are you working on?
  - [ ] What help do you need? (jobs)
  - [ ] **Integrate bounties**
    - [Gitcoin](https://gitcoin.co) bounties to dogfood this site
    - More non-dev bounties to BUIDL the community resources - Bounties Network?

#### Map of Cryptocurrency Accepting Businesses

- [ ] Standalone service - linked/integrated into main website
  - [ ] Way for anyone to add/flag/review places
- [ ] Integration with Coinmap
  - https://coinmap.org/#/map/39.77529722/-104.95857239/11

## Desired Architecture and Features:

We desire a distributed content hosting and contribution model. So that the content is redundant, those using it support and validate all peers, and are able to add content to the peer network.

### Static Website

Desire no server side compute needed. Everyone who hosts our resources can be a server and client.
What does a static site model provide?

- [ ] Optimized SEO
- [ ] Lightning fast and light to host and load
- [ ] Flat pages as database
- [ ] Can be tracked in a Git repo - so history is maintained and easy to host among distributed peers

#### Distributed Data Base

DB to hold:

- [ ] Events
- [ ] Meetups / Individual Homepages
- [ ] Blog type Bulletin Board Pages

Possible solutions for IPFS backend:

- [OrbitDB](https://github.com/orbitdb/orbit-db) as a backend on IPFS - but is in beta.

- [ ] [PeerPad](https://ipfs.io/ipns/peerpad.net/#/) does not rely on a second or third-party. All nodes talk to each other directly, without intermediation.

#### Easy Frontend Site Managment

- http://quasar-framework.org
  - Full Front end Framework, headless in that sense.
  - Build on Vue and easy to use/ learn
  - Very easy to get seomthing looking good with a lot of great components

### Distributed Hosting / CDN:

Want to have a distributed / redundant store for the website. Ideally self hosting is very easy and secure. Want to get something like this: https://en.wikipedia.org/wiki/Content_delivery_network

An site can be hosted like this:

- [ ] https://www.netlify.com/
  - global CDN
- [ ] [PeerPad](https://ipfs.io/ipns/peerpad.net/#/) check out this as a model :point_left:
  - IPNS for human named data
  - [PeerPad](https://ipfs.io/ipns/peerpad.net/#/) as way to edit events and give write access?

##### Self hosted site:

Want a very easy onboarding process - just install and you are a host + node for all the community resources.

- To host the site under our own domain on IPFS, [this is pretty comprehensive](https://gist.github.com/claus/1287f47b5fbaaea338ac8a04d02bf258).
- To upload site content to IPFS, and access it from IPFS gateway, and redirect our domain name to point to the IPFS gateway, [this article](https://medium.com/@chrismatthieu/hosting-a-website-via-ipfs-for-free-afee39b84553) goes over how to do that.
- **_Make this IPFS a grain for https://sandstorm.io/_**
- And/or make a simple docker / other install for people
  - Could this be on mobile too? (needs to be lightweight enough)

To get started - and eventually compliment community hosing, use:

- GitHub/Lab Pages
- Firebase
- Netlify
- Other free options?

##### Other self hosted resources:

Wantt to make a set of services - keep this in mind when finding a Website hosting solution:

- cloud shared community data
  - media
  - project Git repos
  - chat server (federeated?)
  - wiki

#### Distributed DNS:

- https://handshake.org/
  - Decentralized certificate authority and naming
    An experimental peer-to-peer root DNS.

### Content Management System (CMS) for easy addition of select content

- [ ] Way that anyone can submit a PR
  - [ ] Template file could edit and submit a PR for easily
  - [ ] Dedicated page with forms to build an event manually and submit PR
        _This all to be ported to a permissionless model and/or Peer ID used to get write access to IPFS DB for events_

Also could use CMS

- [ ] Headless - so can use alternatives with SSG
- https://snipcart.com/blog/react-graphql-grav-cms-headless-
- Possible CMS options:
  - https://getgrav.org
  - https://forestry.io/ (great integration for use with SSG and hosting on github)
  - https://plone.com/ (not a satic option)
  - http://gantry.org/ (grav SSG CSM)
  - WordPress
  - Drupal
