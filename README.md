
## Boalt sample Apple page

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Security 

This React App is separated into two sections:
* AuthenticatedApp
* UnauthenticatedApp

What this allows is that while a user is NOT authenticated, any secure pages cannot even be routed.
When a user is authenticated, then those secure pages become available.

### Sign In `http://localhost:3000/sign-in`

This is the default page--in fact it takes the place of a 404 page. The reason is only sign in and sign up are available to non-subscribers (even if they know the routes to the internal pages).

### Sign Up `http://localhost:3000/sign-in`

This is built with the same reusable component that generates the sign-in page. For demo purposes, as long as adequate data is entered in the fields, they will store to the browser's sessionStorage. This provides the basis of the sign-in page's authentication.

### Landing Page `http://localhost:3000/`

After authenticating, the user is taken to the shrinking view of the Apple page. I noticed in the demo video that while the page is "shrinking" into view, the scrollbars do not appear. This lead me to believe that the CSS property overflow: hidden was being used. Therefore I applied it to the body tag.

I recognize the 2019 does not animate, time permitting, I would have pursued animating several sprites to generate the odometer style of counter.

### Welcome Page `http://localhost:3000/welcome`

Clicking the landing page in the center takes you to this page. There is a slight sliding down animation to mimic what was demoed in the video.

From here users can click to view the different product pages. 

### iPhone Page `http://localhost:3000/iphone`

This page had a simple transition in that it was just a quick slide down from the top. The main focus of the page was, of course, the iPhone thumbnails and images that would toggle/slide based on the HTML range slider below the thumbnails.

The range slider needed to be hacked via CSS to generate the look from the demo video, but using this slider made controling the thumbnails transparency levels and the positions of the images very easy. By taking the range slider value and storing it in a state value, I could compute the opacity levels and positioning via JavaScript.

### MacBook Pro Page `http://localhost:3000/macboook-pro`

This page could have benefitted from a little extra time to get the animations to fire appropriately. The page slides in from the right which is another simple transition--however, I added this transition towards the end which meant extra work to get the "8-core" and "32GB" as well as the other animations to load in sync would have been beneficial. It's not enough to simply add an animation-delay property, the element would first need to be hidden until the page finished its transition so the internal page transitions would take follow suit. Again, more time would have helped here.

The "subscribe now" modal could also have benefitted from some extra time.

### Apple Watch Page `http://localhost:3000/apple-watch`

I noticed a typeo in the mockups for this page, so I took the liberty to correct it. Aside for the positioning of the radio buttons below the watch image, this page is the most complete.

The watch fades from black to white by adding a new image each time (also removing the previous ones to keep the DOM clutter free) so that the fading animation could be re-applied each time.

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
