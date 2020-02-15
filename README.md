# basic-image-editor - Brightness & Contrast
## A basic image editor

### The webapp allows a user to:

- Load and display an image file (png or jpg) from the filesystem (using a normal file picker dialog) by clicking on the bottom-right hand "upload" button. Pictured in the design is an image of a tent that the user has previously uploaded (by clicking on the upload button); the image should be resized so that the horizontal width is the same as the image element. Keep the aspect ratio the same, it doesn't matter if the vertical dimension does not fill the entire height of the image element,

- Once the image has been loaded, the horizontal brightness/contrast sliders become active,

- A user can adjust the brightness and contrast of the image, in real time, by moving the slider left or right from its centre position to decrease or increase brightness/contrast respectively.


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
