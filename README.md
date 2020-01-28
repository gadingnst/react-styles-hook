# React Styles Hook

[![Build Status](https://travis-ci.org/sutanlab/react-styles-hook.svg?branch=master)](https://travis-ci.org/sutanlab/react-styles-hook) [![npm](https://img.shields.io/npm/v/react-styles-hook.svg)](https://www.npmjs.com/package/react-styles-hook) [![npm](https://img.shields.io/npm/dt/react-styles-hook.svg)](https://npm-stat.com/charts.html?package=react-styles-hook)

>  Simple hook for simplify CSS styling in React JS. Very Light-weight.

## Table of contents
- [React Styles Hook](#react-styles-hook)
  - [Table of contents](#table-of-contents)
  - [Why ?](#why)
      - [Here is the screenshots:](#here-is-the-screenshots)
  - [Installation](#installation)
  - [Example Usage](#example-usage)
    - [Standard styles Example](#standard-styles-example)
    - [Dynamic styles example](#dynamic-styles-example)

## Why ?
In ReactJS, sometimes we have difficulty to styling because of limitations `types` intellisense in CSS properties. By using this hook we can find out what properties in CSS we can use.

If you don't get what i'm talking about, maybe i will explain in essence: This hook API is almost similiar to [React Native Stylesheet.create()](https://facebook.github.io/react-native/docs/style).

#### Here is the screenshots:

[![Capture 1](https://raw.githubusercontent.com/sutanlab/react-styles-hook/master/captures/capture-1.png)](https://raw.githubusercontent.com/sutanlab/react-styles-hook/master/captures/capture-1.png)

[![Capture 2](https://raw.githubusercontent.com/sutanlab/react-styles-hook/master/captures/capture-2.png)](https://raw.githubusercontent.com/sutanlab/react-styles-hook/master/captures/capture-2.png)

[![Capture 1](https://raw.githubusercontent.com/sutanlab/react-styles-hook/master/captures/capture-3.png)](https://raw.githubusercontent.com/sutanlab/react-styles-hook/master/captures/capture-3.png)

---

## Installation
```bash
# with npm
$ npm i react-styles-hook --save

# with yarn
$ yarn add react-styles-hook
```

## Example Usage
### Standard styles Example
```js
import React from 'react'
import { useStyles } from 'react-styles-hook'

const App = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>Hello React 👋</h1>
    </div>
)

const styles = useStyles({
    container: {
        height: 100,
        width: '100%',
        color: 'white',
        backgroundColor: 'skyblue'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default App
```

### Dynamic styles example
```js
import React, { useState } from 'react'
import { useStyles } from 'react-styles-hook'

const App = () => {
    const [isPink, switchPink] = useState(false)

    const styles = useStyles({
        heading: {
            width: '100%',
            backgroundColor: isPink ? '#f75172' : '#333333'
        }
    })

    const handleClick = () => {
        switchPink(!isPink)
    }

    return (
        <>
            <h1 styles={styles.heading}>Hello React 👋</h1>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </>
    )
}

export default App
```

---

© 2020 Sutan Gading Fadhillah Nasution.