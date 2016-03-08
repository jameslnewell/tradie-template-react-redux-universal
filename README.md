# tradie-template-react

A React template for `tradie`.

Creates a `Hello World!` app using `react`, written in `ES2015` and `JSX`.

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
  - `render()` global for shallow rendering of `react` components
  - `$` global for assertions on `react` virtual-dom trees
- [static server](https://www.npmjs.com/package/tradie-plugin-serve)
- [livereloading](https://www.npmjs.com/package/tradie-plugin-livereload)

## Installation

    npm install -g tradie tradie-template-react

## Usage

    mkdir my-react-project && cd my-react-project
    tradie init --force --template=react
    npm install
