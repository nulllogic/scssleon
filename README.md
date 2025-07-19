<p align="left">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./.imgs/header.jpg">
      <img alt="SCSSleon framework" src="./.imgs/header.jpg">
    </picture>
</p>

# SCSSLEON [![Version Number](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fnulllogic%2Fscssleon%2Frefs%2Fheads%2Fmaster%2Fpackage.json&query=%24.version&style=flat&label=version&labelColor=%23b0de48&color=%231b3317)](https://github.com/Tencent/QMUI_Web/ "Version Number")

Welcome to SCSSLEON framework ! It's the most advanced responsive front-end framework, that can boost development of your website or project. It was built in love and with love from internet technologies. Peace ! 

<hr />

<p align="center">
– [ <a href="http://nulllogic.github.io/scssleon-docs" target="_self">Documentation</a> ] — [ <a href="https://github.com/nulllogic/scssleon/issues" target="_blank">Bugs/Issues</a> ] — [ <a href="https://stackoverflow.com/questions/tagged/scssleon" target="_blank">StackOverflow</a> ] –
</p>

> [!IMPORTANT]
> ### Prerequisites
> - Node.js and npm installed on your system.
> - Basic knowledge of SCSS and Node.js.

## ┌ 🧭 Quickstart ┐

<details>
    <summary> Method #1 - NodeJS + NPM basic setup [ 🛖🔥🦴 primitive ] </summary>
<hr />
1. Install packages – run the following command in your project directory to install SCSSLEON + SASS:

```bash
npm i @nulllogic/scssleon sass
```

2. Initialize your project (if not already done). If your project doesn't have a package.json file, create one by running:

```bash
npm init -y
```

4. Update `package.json` file. Add following strings

```json
"scripts": {
  "sass-dev": "sass --watch --update --style=expanded styles:assets/css --load-path=node_modules",
  "sass-prod": "sass --no-source-map --style=compressed styles:assets/css --load-path=node_modules"
}
```

It will look like this : 
```json
{
  "dependencies": {
    "@nulllogic/scssleon": "^1.0.5",
    "sass": "^1.89.2"
  },
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "devDependencies": {},
  "scripts": {
    "sass-dev": "sass --watch --update --style=expanded styles:assets/css --load-path=node_modules",
    "sass-prod": "sass --no-source-map --style=compressed styles:assets/css --load-path=node_modules"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

5. Create `app.scss` inside your project in `/styles` directory

```scss
@use 'sass:map';
@use "sass:string";

@forward "@nulllogic/scssleon/scss/mixins";
@forward "@nulllogic/scssleon/scss/functions";

@use "@nulllogic/scssleon/scss/config.scss" as config with (
  // This is main config, that you can tweak
  $config: (
    prefix: "xii",
    enable: (
      wrapper: false,
    ),
  )
);

@use "@nulllogic/scssleon/themes/default.scss" as theme with (
  $config : config.$config,
  $theme: (
    html : (
      body : (
        _colors: (
          light : (
            background : rgb(244, 244, 244),
            color: rgb(28, 29, 31),
          ),
          dark : (
            background : rgb(5, 17, 4),
            color: '#ccc'
          )
        )
      )
    )
  )
);

$config: config.$config;
$theme: theme.$theme;
```

6. Create `base.scss` inside your project in `/styles/components` directory
```scss
// Loading your SCSS module with pre-defined config and theme
// ↓ Config
@use "../app.scss" as app;

// Loading modules and components
// ↓ Root
@use "@nulllogic/scssleon/scss/root" with (
    $config: app.$config,
    $theme: app.$theme
);

// Great reset
@use "@nulllogic/scssleon/scss/reset" with (
    $config: app.$config,
    $theme: app.$theme
);

// Base
@use "@nulllogic/scssleon/scss/base" with (
    $config: app.$config,
    $theme: app.$theme
);
```

7. Run node command at root `/` of your project to generate CSS code to `/assets/css`

```bash
npm run sass-dev
```

8. Profit – you have output at `/assets/css` directory now 🙌

<img alt="SCSSleon framework" src="./.imgs/method_1.jpg">

</details>


## ┌ 📚 Documentation ┐

<p align="left">
  <img src="./.imgs/documentation.jpg" width="100%" alt="SCSSleon documentation">
</p>

SCSSleon's documentation is built with [Astro](https://astro.build/) and publicly hosted on GitHub Pages at <https://nulllogic.github.io/scssleon-docs/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/).

### ─ Running documentation locally

1. From the root `/` directory, run `make docs` in the command line.
2. Open `http://localhost:8000/scssleon/` in your browser.
3. Enjoy the documentation locally

## ┌ Contributing ┐

<p align="left">
  <img src="./.imgs/contributing.jpg" width="100%" alt="SCSSleon contributing">
</p>

> For contributing, please view the [CONTRIBUTING](CONTRIBUTING.md).

## ┌ Thanks ┐

<p align="left">
  <img src="./.imgs/thankyou.jpg" width="100%" alt="SCSSleon sponsors">
</p>

<a href="https://www.browserstack.com"><img src="./.imgs/browserstack.jpg" alt="browserstack"></a><br />
Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

## ┌ 📜 License ┐
[MIT license](LICENSE)

<hr />

<p align="center">
  <a href="https://nulllogic.net/" target="_blank"><img src="./.imgs/logo.png" alt="NullLogic" aria-title="NullLogic"></a>
</p>