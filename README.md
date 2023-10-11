<p align="left">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./.imgs/header.jpg">
      <img alt="XII/Grid CSS framework" src="./.imgs/header.jpg">
    </picture>
</p>
Welcome to XII/Grid CSS framework ! It's the most advanced responsive front-end framework, that can boost development of your website or project. It was built in love and with love from internet technologies. Peace ! 

<hr />

<p align="center">
– [ <a href="https://nulllogic.github.io/xiigrid/">Demo</a> ] — [ <a href="http://nulllogic.github.io/xiigrid/docs">Documentation</a> ] — [ <a href="https://github.com/nulllogic/xiigrid/issues">Bugs/Issues</a> ] — [ <a href="https://stackoverflow.com/questions/tagged/xiigrid">StackOverflow</a> ] –
</p>

<p align="center">
  <a href="https://nulllogic.net/"><img src="./.imgs/logo.png" alt="NullLogic logo"></a>
</p>

## ┌ Quickstart ┐

[![IMAGE ALT TEXT HERE](http://www.sergiuko.com/wp-content/uploads/2012/04/vimeo-preview-627x351.jpg)](https://vimeo.com/83573522)

## ┌ Documentation ┐

<p align="left">
  <img src="./.imgs/documentation.jpg" width="100%" alt="xiigrid documentation">
</p>

xiigrid's documentation, included in this repo in the root directory, is built with [Hugo](https://gohugo.io/) and publicly hosted on GitHub Pages at <https://nulllogic.github.io/xiigrid//>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in `site/assets/js/search.js`.

### ─ Running documentation locally

1. From the root `/` directory, run `make docs` in the command line.
2. Open `http://localhost:8000/xiigrid/` in your browser.
3. Enjoy the documentation locally



Learn more about using Hugo by reading its [documentation](https://gohugo.io/documentation/).


## ┌ Contributing ┐

<p align="left">
  <img src="./.imgs/contributing.jpg" width="100%" alt="xiigrid contributing">
</p>

> For contributing, please view the [CONTRIBUTING](CONTRIBUTING.md).

## ┌ Thanks ┐

<p align="left">
  <img src="./.imgs/thankyou.jpg" width="100%" alt="xiigrid sponsors">
</p>

<a href="https://www.browserstack.com"><img src="./.imgs/browserstack.jpg" alt="browserstack"></a><br />
Thanks to [BrowserStack](https://www.browserstack.com/) for providing the infrastructure that allows us to test in real browsers!

## ┌ License ┐

<p align="left">
  <img src="./.imgs/license.jpg" width="100%" alt="xiigrid licence">
</p>

[MIT license](LICENSE)

```mermaid
graph LR
  Frontend -->|API| Backend
  Backend -->|Database| PostgreSQL
  Backend -->|Payment| PaymentService
```