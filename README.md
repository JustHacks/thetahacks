# Pana 

### Inspiration
Pana was just an idea we had while brainstorming: in essence, social media for charities. We thought a way for charities to put themselves out ther would be both interesting and beneficial to the world. The name 'pana' comes from Toki Pona, in which it means 'give' or 'share'.

### What it does
Pana provides a platform for anyone to create a charity, and then have it be discovered by potential donors, who are redirected to links that they can donate to that charity with. Charities are tagged, so users can search for specific causes to donate to.

### How We built it
We set up an SQLite database to store both users and charities at first, along with a simple REST API to interact with it. Once we started on a simple frontend, we changed the user system to use Firebase. Then we started working on styling and implementing the dashboard and create pages, which just use fetch() calls in the background to interact with the API. After that, it was just a matter of putting the finishing touches on the UI.

### Challenges We ran into
We ran into several issues and bugs that seemed insurmountable. Firestore did not want to cooperate to allow file uploading, but we were able to just remove that feature and move on. At several points, the database and the API stopped working, and we had to fix them. As well, we ran into a lot of trouble converting our CSS to CSS modules, which have stricter rules on what selectors are available.

### Accomplishments that We're proud of
I think we were proud of getting such a smooth setup and nice look in general. Using things like the searchbar feels very seamless and interactive, and overall the look of the site and the aesthetic it gives off is really pleasing to us, and I think we are quite satisfied with it.


![pana](https://user-images.githubusercontent.com/47777673/124595531-c3f83000-de7e-11eb-8b9f-e56e4efdb6b4.png)


### What We learned
We learned a lot about how to use CSS modules with React, and how to use Firebase for authentication. As well, we all got some more experience using React and Next.js, tools none of us were all that familiar with going into the project.

### What's next for Pana
In the future, we hope to get file uploading working, and also clean up the app a bit. Then we could maybe even add new features, like donating directly from the app instead of just by sharing links.
