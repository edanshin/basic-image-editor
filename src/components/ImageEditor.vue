<template>
  <div>
    <Slider type="brightness" ref="brightness" color="#25A95B" title="Brightness" subtitle="Slide to adjust image brightness! 🔆" :isDisabled="isDisabled" @valueChanged="valueChanged($event)"></Slider>
    <Slider type="contrast" ref="contrast" color="#4A90E2" title="Contrast" subtitle="Slide to adjust image contrast! 🌓" :isDisabled="isDisabled" @valueChanged="valueChanged($event)"></Slider>
    <div class="container">
      <canvas id="myCanvas" style="width: 100%;"></canvas>
      <br>
        <div style="display: flex; justify-content: center;">
          <p class="label">NAME</p><p class="name">{{filename}}</p>

          <button class="uploadBtn" onclick="document.getElementById('file_input').click()">▲ UPLOAD</button>
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
    upload(event) {
      var URL = window.webkitURL || window.URL;
      var u = URL.createObjectURL(event.target.files[0]);
      var img = new Image();
      img.src = u;
      var t = this;

      this.filename = event.target.files[0].name;

      img.onload = function() {
        t.$refs.brightness.value = 0;
        t.$refs.contrast.value = 0;
        t.context.clearRect(0, 0, t.canvas.width, t.canvas.height);
        ARimage.LoadToCanvas(t.canvas, img, t.context);
        t.isDisabled = false;
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
.container {
  border: 0.1em solid #DCDEE4;
  border-radius: 0.5em;

  margin: 1em;

  padding-bottom: 0.5em;
}

.label {
  border: 0.1em solid #DCDEE4;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
  padding: 0.5em;
  background-color: #F6F8FA;
  color: #8392A6;
  font-weight: bold;
}

.name {
  border: 0.1em solid #DCDEE4;
  border-top-right-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  padding: 0.5em;
  margin-left: -0.1em;
  width: 8em;
  max-width: 8em;
  text-overflow: ellipsis;
  overflow-x: hidden;
  color: #25A95B;
}

.uploadBtn {
  border: 0.1em solid #DCDEE4;
  color: #6FA6E6;
  background-color: #F6F8FA;
  border-radius: 0.5em;
  font-weight: bold;
  height: 100%;
  padding: 0.7em;
  margin-left: 1em;
  height: 100%;
}
</style>
