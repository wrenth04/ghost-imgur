# ghost-imgur
imgur storage for ghost blog.

## Installation

### Method 1 via npm
- Install package
  ```
  npm install --save ghost-imgur
  ```

- Create `$path_to_ghost/content/storage/ghost-imgur/index.js`
  ```
  'use strict';
  module.exports = require('ghost-imgur');
  ```


### Method 2 via repo

- Create `storage` folder

  ```
  mkdir -p $path_to_ghost/content/storage
  
  ```

- Clone this repo

  ```
  cd $path_to_ghost/content/storage
  git clone https://github.com/wrenth04/ghost-imgur.git
  
  ```

- Install dependencies

  ```
  cd $path_to_ghost/content/storage/ghost-imgur
  npm install
  
  ```

## Configuration

- Open `$path_to_ghost/config.js` add `storage` block

```js
storage: {
  active: 'ghost-imgur'
}
```

## License

Read [LICENSE](LICENSE)

