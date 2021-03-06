## bike.galley

**Current URL:** [bicycle-gallery.netlify.com](https://bicycle-gallery.netlify.com)

**Purpose:** A place for people to post inspiring pictures of thier custom bike builds. Everything will be searchable to allow for people to find similar bikes.

**Built On:** Vue.js and Wedeploy

### Todos:

#### Feed
- Add created and method.function pattern into each componet for the "build" of the page. Don't need to pass props from main app file. Data can be contained in the componet.

#### Search
- Create advance search menu for tags, componets, description, etc.
- Use the grid componet for the results
- Add in ability to search using Google like searches with "category:fatback" or "groupo:ultegra".

#### User
- ~~Finsh making template for creating account.~~
- ~~Revist functions that check if user is logged in. Currently looking if currentUser exists.~~
- Allow for users to get notifications when someone likes their bike and comments.
- Build pages for managing bike that have been uploaded.

#### Bike Upload
- Add in all the componets for the bike upload.
- Give option for "simple" or "advance" upload.
- Simple will include title, description, and some attributes.
- Advance will contain all parts of that is.
- Create different path ways for multi-step step form.
- Advance flow will look something like Title + Desc -> Pictures -> Attributes -> Frame -> Wheels -> Drive Train -> Cockpick -> Upload
- Simple flow will look something like Title + Desc -> Pictures -> Attributes -> Upload 

#### Bike Data
- ~~Add `user_id` to the bikes collection to make it possible to search bikes by user.~~
- Create fields for optional componets.
- Create 3 or 4 test users and upload about 15 or so bikes for each user.

#### Bike View
- Add ability to scoll through pictures and have lightbox.
- Add in componets to track comments and likes.

#### Comments & Likes
- Create collections for comments and likes, data structure something like comment, user id, user name, added, bike id
- Data structure for likes something like, user id, bike id, date added

### Features:
- Create account for users to manage their bike collection.
- Upload invidual bikes to collection for everyone to view with componets, attributes, and descriptions.
- Update infomation about your invidual bikes. 
- Search data base using any attribute to return list of bikes.
- Like and comment on invidual bikes.
- View invidual bikes on their own page.
- View invidual user accounts to view thier collection.



### Future:
- Intergrate with Strava for user and route information.


