# socialMediaApp
Full stack social media application that allows you to share and post photos. This application is a clone of Pinterest including color schemes and styling.
## Used to build this app
Javascript, React, Tailwind, Sanity

### Backend
Sanity - is a platform for hosting structured content. This application was built using verson 3.  `npm create sanity@latest` command ran to install Stanity in the social_backend folder. User information converted and stored in the sanity server as dataset 'user'.

### frontend
Javascript - main programming language for SocialMediaApp.
React - framework used to create this app.
TailWind - CSS framework used for styling. Inline styling adding using tailwind syntax.

Google used to verify login allowing the user to have seemless connection to other social media and applicaitons. New `GoogleOAuthProvider` tag wrapping GoogleLogin need after depreciation of older verification standards imported from `@react-oauth/google`
