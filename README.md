# tagdoc-ui-components

[![Build Status](https://travis-ci.org/oanylund/xcomfort-shc-api.svg?branch=master)](https://travis-ci.org/oanylund/xcomfort-shc-api)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

React UI components for tagdoc project built with styled-components.
They are built to be easily extended, and can be used for any project really. Built using ES6 goodness, and the code is not transpiled.

## Install

```bash
yarn add tagdoc-ui-components
```

## Usage

See a demo of the components and their props [HERE](https://oanylund.github.io/tagdoc-ui-components/).

```js
import { Button } from "tagdoc-ui-components";

const LargeButton = props => <Button {...props} btnSize="large" />
```

## Development

To develop the library further

- Clone the repo
- Install dev dependencies
- Use `plop` command to create new components from templates
- Run `yarn storybook` to start local storybook at localhost:9001