# New Community Website
---
## Goal:
A community run and maintained website that anyone can host and contribute to. It will be the place to go to find out what is going on in the Colorado Blockchain & DLT community. Resources will be available to get connected, to learn, and to get involved in all that is going on. 

## Desired Features:

### Static Website w/ Generator
   - [ ] Optimized SEO
   - [ ] Lightning fast and light to host and load
   - [ ] Flat pages instead of a database
   - [ ] Git repo - so history is maintained
   - Possible SSGs:
     - Lists:
       - https://gridsome.org/
       - https://vuepress.vuejs.org/
       - https://www.gatsbyjs.org/
       - https://www.staticgen.com/
       - https://www.cmscritic.com/awards/
       - https://jekyllrb.com/
       - https://gohugo.io/
    - Alt. Non-SSG:
        - https://ghost.org/
        - https://quasar-framework.org/ (full frontend framework ~= SSG)

### Hosting:
Want to have a distributed / redundant store or the website. Ideally self hosting is very easy and secure. Want to get something like this: https://en.wikipedia.org/wiki/Content_delivery_network

An SSG can be hosted like this:
  - [ ] https://www.netlify.com/
    - global CDN
  - [ ] https://ipfs.io/ipns/peerpad.net/#/
    - [ ] check out this as a model :point_up:
    - ipns for human named data 
    - PeerPad as way to edit events and give write access
    - PeerPad does not rely on a second or third-party. All nodes talk to each other directly, without intermediation.

#### Distributed DNS:

- https://handshake.org/
  - Decentralized certificate authority and naming
An experimental peer-to-peer root DNS.

### Content Management System for easy addition of select content
   - [ ] Ability to Add events
   - [ ] Blog type bulletin board
   - [ ] Headless - so can use alternatives with SSG
     - https://snipcart.com/blog/react-graphql-grav-cms-headless-
    - Possible CMS options:
        - https://getgrav.org
        - https://forestry.io/ (great integration for use with SSG and hosting on github)
        - https://plone.com/ (not a satic option)
        - http://gantry.org/ (grav SSG CSM)
        - WordPress
        - Drupal

### Ability to host in a distributed manner
- GitHub/Lab Pages
- Firebase
- Netlify
- Other free options?
- Self hosted
  - ***Make it a grain for https://sandstorm.io/***
  - Make a docker?
- To host the site under our own domain on IPFS, [this is pretty comprehensive](https://gist.github.com/claus/1287f47b5fbaaea338ac8a04d02bf258).
- To upload site content to IPFS, and access it from IPFS gateway, and redirect our domain name to point to the IPFS gateway, [this article](https://medium.com/@chrismatthieu/hosting-a-website-via-ipfs-for-free-afee39b84553) goes over how to do that.
  

## Desired Content:

### An Event and Meetup Calendar

- [ ] Anyone can add events
  - [ ] Integrated form to submit any event.
    - [ ] Creates an issue /pull request to the hosting repo.
    - [ ] Secondary system to allow full commit  access once approved.
- [ ] Automatically pulls new events from a linked site - like meetup.com
- [ ] Easy to use interface to add
- [ ] Can subscribe to updates via email
- [ ] linked with twitter bot to broadcast
- Inspiration:
      - http://getmeetingstar.com/
      - https://www.eventbrite.com/d/co--denver/events/
          - Use Cards for events vs. a calendar layout

### A Community Wiki for resources
- [ ] Very likely a stand alone from the website itself - just linked/integrated
- [ ] Easy to contribute, highly navigable
- [ ] Easy to have community moderate
    - [ ] Thumbs up/down
    - [ ] Transparent flagging system
- Possible inspiration:
  - https://github.com/discourse/discourse
    - Use as a new community alt. to slack?
  - https://github.com/rtfd/readthedocs.org
    - Backend to self host: http://www.sphinx-doc.org/en/master/
    - Documentation using **sphinx_rtd_theme** :point_left: :heart:
  - https://larecipe.binarytorch.com.my/docs/1.2/overview
  - https://www.gitbook.com/
  - https://www.mkdocs.org/
- Some key things to include (please add to the list :smile:):
        - https://alternativeto.net/list/818/how-to-live-without-google
        - Blockchian 101 links
        - Dev resources to self-learn
        - EFF cyber security recommendations
        -


### Map of cryptocurrency accepting businesses

- [ ]Standalone service - linked/integrated into main website
- [ ] Integration with Coinmap
  - https://coinmap.org/#/map/39.77529722/-104.95857239/11

### Media highlights
- integration with:
  - [ ] youtube (https://www.youtube.com/channel/UCySU1TwgrLAU_1tF8lDt9bQ)
  - [ ] twitter (TBD)
  - [ ] medium (TBD)
  - [ ]

## Desired Theme/Layout:
  - [ ] A **strong** sidebar with links
    - http://www.ethdocs.org/en/latest/index.html
    - Fixed as you scroll the main page
    - No header/footer needed / all inside the sidebar
    - https://larecipe.binarytorch.com.my
      - Can be hidden as a menu
        - Reactive:
          - Default open on desktop
          - Default close on phone
