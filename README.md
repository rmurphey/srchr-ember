# Srchr

This app searches Flickr and Youtube for content based an a search term entered
by a user. It is intended as a demo of techniques for building client-side
apps. It uses a variety of technologies, including:

- [Node](http://nodejs.org/) for the server
- [Twitter Bootstrap](http://twitter.github.com/bootstrap/) for the UI
- [Ember](http://emberjs.org)

## Running the app

1. Install node. You can [follow the instructions here](http://nodejs.org/#download), or use
  [Homebrew](http://mxcl.github.com/homebrew/) on a Mac: `brew install node`.
2. Run `npm install` from the root directory of this project to load the dependencies.
3. Copy `server/config.js.example` to `server/config.js` and update with your
   API key(s) if you'd like. Currently, only the Youtube search will work
   without a key.
4. To run the development server: `node bin/dev`
5. [Visit the app in your browser](http://localhost:4444).
