# *NETFLIX CLONE*

**Netflix-Clone** is an attempt to replicate Netflix using React. 
Time spent: **8** hours spent in total
#### [Live demo here](https://netflix-clone-atmpt.web.app/)

## USER STORIES

The following **required** functionality is completed based on assigned scope:

- [x] User can click on movie posters to watch trailers
- [x] User can see a different main movie poster at the top of the page
- [x] User can click on a poster to stop a youtube video
- [ ] User can sign up to create a new account using Google Authentication
- [ ] User can log in and log out of his or her account
- [ ] Signed in user session data is persisted

The following **reach** features are implemented:

- [ ] Replicate Netflix signup pages
- [ ] Introduce infinite scrolling on the homepage 
	- [ ] Include more categories from [the movie database](https://www.themoviedb.org/?language=en-US)
<!-- -->
- User Profiles:
- [ ] Allow the user to choose from an array of image profile pictures
- [ ] Show a dropdown of user options on the Users's profile picture in the NAV bar

The following **additional** features are implemented:

- [ ] Create a search page
	- [ ] Optimize search with live search in React

## Video Walkthrough

Here's a walkthrough of implemented user stories:

[View the demo on Imgur](https://imgur.com/AGdcFNl)
<img src='https://imgur.com/AGdcFNl.gif' title="Video Walkthrough" alt="Video Walkthrough"/>

<iframe src="https://giphy.com/embed/L9Qc4kxHwUrRdrt605" width="480" height="368" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/L9Qc4kxHwUrRdrt605">via GIPHY</a></p>


## Credits

<!-- List all 3rd party libraries, icons, graphics, or other assets you used in your app. -->

- API:
	- [The Movie Database](https://www.themoviedb.org/documentation/api?language=en-US)
- Hosting:
	- [Firebase](https://firebase.google.com/docs/hosting/)
- HTTP Client/URLs:
	- [Axios](https://www.npmjs.com/package/axios)
	- [movie-trailer npm package](https://www.npmjs.com/package/movie-trailer)
- Images:
	- [Netflix Logo](https://i.dlpng.com/static/png/6388018_preview.png)
	- [User Profile Picture](https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png)


## Notes

<!-- Describe any challenges encountered while building the app: -->
Some things I've learned from building this project:
1. How to use React Hooks effectively
	- Using an async function in an useEffect React Hook [here in the repo](https://github.com/SaberMDAbir/netflix-clone-atmpt/blob/main/netflix-clone-atmpt/src/Row.js#LC13) - 
		- [Relavant Medium Article](https://medium.com/javascript-in-plain-english/how-to-use-async-function-in-react-hook-useeffect-typescript-js-6204a788a435)
2. Component based programming with React
3. How to use console.table() for faster debugging with HTTP requests
4. How to use optional chaining (?.) referenced [here in the repo](https://github.com/SaberMDAbir/netflix-clone-atmpt/blob/main/netflix-clone-atmpt/src/Row.js#LC34)
5. VSCode Emmet multiplication and using [es7 snippets like rfce](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets#rfce)
6. How to use [Postman](https://www.postman.com/) to test API URLs

### DEPLOYMENT
After every `npm run build`, add the following meta tag in the index.html build folder:
`<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">`

## License

Copyright 2020 MD Abir A. Choudhury

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
