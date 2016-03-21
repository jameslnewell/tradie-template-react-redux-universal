# tradie-template-react-redux

A Universal React+Redux template for tradie.

Creates a UniversalJS `Hello World!` app using `react`, `redux`, `react-router` and `redial` written in `ES2015` and `JSX`.

**Features:**

- linting of scripts
- bundling of scripts, including:
  - transpilation
  - minification
- bundling of styles, including:
  - `@import`ing styles from `npm` packages
  - `@import`ing styles once to avoid redundant bytes
  - rewriting relative asset URLs and copying assets
  - `autoprefixer`
  - minification
- testing of scripts, including:
  - `chai`'s `expect` global for assertions
  - `sinon` and `sinon-chai` for assertions on spies and stubs
  - `render()` global for shallow rendering of `react` components
  - `$` global for assertions on `react` virtual-dom trees
- rendered on the server
- [livereloading](https://www.npmjs.com/package/tradie-plugin-livereload)

## Installation

    npm install -g tradie tradie-template-react-redux-universal

## Usage

    mkdir my-react-project && cd my-react-project
    tradie init --force --template=react-redux-universal
    npm install
