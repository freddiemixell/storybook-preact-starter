# Preact Typescript Storybook Starter [WIP]
This is an example of how to set up React Storybook for Preact and Typescript. I've used Tailwind CSS for styling purposes and showcasing how to use Storybook to build your design system. However, I didn't add Tailwinds through PostCSS because the purpose of this was to learn how Storybook works with Preact and Typescript.

## CLI Commands
*   `npm install`: Installs dependencies

*   `npm run dev`: Run a development, HMR server

*   `npm run serve`: Run a production-like server

*   `npm run build`: Production-ready build

*   `npm run storybook`: Run React Storybook

*   `npm run lint`: Pass TypeScript files using ESLint

*   `npm run test`: Run Jest and Enzyme with
    [`enzyme-adapter-preact-pure`](https://github.com/preactjs/enzyme-adapter-preact-pure) for
    your tests


For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Storybook
* This project was bootstrapped with `npx sb init` after installing Preact and Typescript. That is how you have to install Storybook, after you environment is configured. SB Init will then detect the project and install the dependencies.
* Each story is located in the directory with the component that it's a story for.
* Other stories will be found in a src/stories directory.
* Important note: When looking at tutorials make sure you convert react to preact. IE - `import { Story, Meta } from '@storybook/preact';`: Notice how it says preact instead of react.
