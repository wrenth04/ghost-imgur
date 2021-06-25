# ghost-imgur
imgur storage for ghost blog.

## Installation

### Method 1 via npm

- Install package

  ```
  npm install ghost-imgur
  ```

- Make the `adapters` folder if it doesn't exist

  ```
  mkdir -p content/adapters/storage
  ```

- Copy the module into the right location

  ```
  cp -vR node_modules/ghost-imgur content/adapters/storage/ghost-imgur
  ```

### Method 2 via repo

- Create `adapters` folder

  ```
  mkdir -p $path_to_ghost/content/adapters/storage
  
  ```

- Clone this repo

  ```
  cd $path_to_ghost/content/adapters/storage
  git clone https://github.com/wrenth04/ghost-imgur.git
  
  ```

- Install dependencies

  ```
  cd $path_to_ghost/content/adapters/storage/ghost-imgur
  npm install
  
  ```

## Configuration

- Open `$path_to_ghost/config.js` add `storage` block

```js
"storage": {
  "active": "ghost-imgur"
}
```

## License

[MIT LICENSE](LICENSE)

