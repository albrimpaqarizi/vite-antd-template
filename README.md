# vite-antd-template

## Getting Started

Pabau App is a task given by Gazmend

## Setup

First, clone the repository into your local machine:

```sh
git clone https://github.com/albrimpaqarizi/vite-antd-template.git
```

or using SSH

```sh
git clone git@github.com:albrimpaqarizi/vite-antd-template.git
```

After you have a clone of your project into your local machine you are ready to test the project, but first:

cd into the folder

```sh
cd vite-antd-template
```

Install dependencies via npm or yarn

```sh
npm install or npm i
```

or

```bash
yarn add
```

## Start Application

And finally start the development server using the script below

```bash
npm run start
```

You can visit <a href="http://localhost:3000">http://localhost:3000</a> to view the running application

## Start the build application

To start the build application run the script below

First you must to install `serve` as global

```sh
npm install serve -g
```

or

```bash
yarn add serve -g
```

then

```bash
npm run build
```

after that do

```bash
npm run serve
```

You can visit <a href="http://localhost:3000">http://localhost:3000</a> to view the running application

## Tools

1. [React](https://reactjs.org/)
1. [Typescript](https://www.typescriptlang.org)
1. [ESLint](https://eslint.org)
1. [Prettier](https://prettier.io)
1. [Husky](https://github.com/typicode/husky#readme)
1. [Vite](https://vitejs.dev/)
1. [TailwindCss](https://tailwindcss.com/)
1. [Sass](https://sass-lang.com/)
1. [Ant Design](https://ant.design/)
1. [Atomic Pattern ](https://atomicdesign.bradfrost.com/chapter-2/)
1. [React-query](https://react-query.tanstack.com/)

## Structure

### This app is structured based on atomic design patterns

[Learn more](https://github.com/danilowoz/react-atomic-design)

- :file_folder: components
  - :file_folder: atoms
  - :file_folder: molecules
  - :file_folder: organisms
  - :file_folder: templates
- :file_folder: config
- :file_folder: enums
- :file_folder: hooks
- :file_folder: interfaces
  - :file_folder: models
  - :file_folder: types
- :file_folder: pages
- :file_folder: styles
- :file_folder: static
- :file_folder: store
- :file_folder: utils
- :file_folder: validators

## Available Scripts

### start

Starts development server

### build

Builds production version of the App

### prettier

Runs prettier format

### type:check

Does typescript type checking

### lint

Lints all files in src folder
