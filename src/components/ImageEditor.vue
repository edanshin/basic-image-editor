<template>
  <div class="imageEditor">
    <Slider type="brightness" ref="brightness" color="#25A95B" title="Brightness" :subtitle="isDisabled ? '🔆' : 'Slide to adjust image brightness! 🔆'" :isDisabled="isDisabled" @valueChanged="valueChanged($event)"></Slider>
    <Slider type="contrast" ref="contrast" color="#4A90E2" title="Contrast" :subtitle="isDisabled ? '🌓' : 'Slide to adjust image contrast! 🌓'" :isDisabled="isDisabled" @valueChanged="valueChanged($event)" style="margin-top: 0.5em;"></Slider>
    <div class="imageContainer">
      <div class="placeholder" :style="{display: isDisabled ? 'block' : 'none'}">
        <h2>Please select an image</h2>
      </div>

      <canvas id="myCanvas" :style="{display: isDisabled ? 'none' : 'block'}"></canvas>

      <div class="bottom">
        <div v-if="isDisabled" style="display: flex; height: 100%; width: 60%; max-width: 60%;"></div>
        <div v-if="!isDisabled" style="display: flex; height: 100%; width: 60%; max-width: 60%;">
          <span style="display: flex; align-items: center;" class="label">NAME</span><div class="name-container"><p class="name">{{filename}}</p></div>
        </div>

        <button style="display: flex; height: 100%;" class="uploadBtn" onclick="document.getElementById('file_input').click()">&#x25B2;&nbsp;UPLOAD</button>

        <input type="file" id="file_input" @change="upload" style="display: none;"/>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from './Slider.vue'
import ARimage from '../utils/arimage'

export default {
  name: 'ImageEditor',
  props: {
    source: String
  },

  data: function() {
    return {
      canvas: null,
      context: null,
      filename: "",
      imageData: null,
      sourceImage: null,
      brightness: 0,
      contrast: 0,
      isDisabled: true
    }
  },

  components: {
    Slider
  },

  methods: {
    // load and display an image file (png or jpg) from the filesystem (using a normal file picker dialog)
    upload (event) {
      const URL = window.webkitURL || window.URL;
      const objectURL = URL.createObjectURL(event.target.files[0]);
      const img = new Image();
      img.src = objectURL;

      this.filename = event.target.files[0].name;

      img.onload = () => {
        this.$refs.brightness.value = 0;
        this.$refs.contrast.value = 0;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        ARimage.LoadToCanvas(this.canvas, img, this.context);
        this.isDisabled = false;
      }

      this.sourceImage = img;
    },

    valueChanged(event) {
      // a user can adjust the brightness and contrast of the image, in real time,
      // by moving the slider left or right from its centre position to decrease or increase brightness/contrast respectively
      ARimage.LoadToCanvas(this.canvas, this.sourceImage, this.context);
      this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);

      switch (event.type) {
        case "brightness":
          this.brightness = event.value
          break;
        case "contrast":
          this.contrast = event.value
          break;
      }

      // apply contrast adjustment over brightness adjustment
      ARimage.ModifyBrightness(this.imageData.data, parseInt(this.brightness, 10));
      ARimage.ModifyContrast(this.imageData.data, parseInt(this.contrast, 10));

      this.context.putImageData(this.imageData, 0, 0);
    }
  },

  mounted: function() {
    this.canvas = document.getElementById("myCanvas");
    this.context = this.canvas.getContext("2d");
  }
}
</script>

<style scoped lang="scss">
.imageEditor {
  padding: 0.8em 1.25em 1.2em 1.25em;
}

.imageContainer {
  padding-bottom: 0.5em;
  margin-top: 1.95em;
}

.bottom {
  border: 0.09em solid #DCDEE4;
  border-radius: 0 0 0.35em 0.35em;
  margin-top: -0.07em;
  padding: 1.2em 0.5em 0.4em 0.5em;
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.label {
  border: 0.1em solid #DCDEE4;
  border-top-left-radius: 0.4em;
  border-bottom-left-radius: 0.4em;
  padding: 0 1em 0 1em;
  background-color: #F6F8FA;
  color: #8392A6;
  font-weight: bold;
  font-size: 0.7em;
  letter-spacing: 0.2em;
}

.name-container {
  border: 0.07em solid #DCDEE4;
  border-top-right-radius: 0.4em;
  border-bottom-right-radius: 0.4em;
  padding: 0 0.35em 0 0.35em;
  margin-left: -0.07em;
  display: flex;
  align-items: center;
  width: 65%;
  max-width: 65%;
}

.name {
  color: #25A95B;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
}

.uploadBtn {
  border: 0.1em solid #DCDEE4;
  color: #6FA6E6;
  background-color: #F6F8FA;
  border-radius: 0.4em;
  font-weight: 600;
  padding: 0 0.65em 0 0.65em;
  margin-left: 1em;
  font-size: 0.8em;
  display: flex;
  align-items: center;
}

.uploadBtn:hover {
  cursor: pointer;
}

#myCanvas {
  width: 100%;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
}

.placeholder {
  border: 0.07em solid #DCDEE4;
  border-top-right-radius: 0.4em;
  border-top-left-radius: 0.4em;
  padding: 0.8em 0 0.5em 0;
  color: #7344C0;
}
</style>
