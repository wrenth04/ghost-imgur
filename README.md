# ghost-imgur
imgur store for ghost blog.

## Installation

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

