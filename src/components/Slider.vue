<template>
  <div class="container">
    <b :style="{ color: color}">{{title}}</b> <b>{{value}}</b>
    <input id="slider" accept="image/png, image/jpg, image/jpeg" v-model="value" type="range" min="-100" max="100" value="0" class="slider" :disabled="isDisabled" @input="$emit('valueChanged', {type: type, value: $event.target.value})">
    <p>{{subtitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  props: {
    type: "",
    title: "",
    subtitle: "",
    color: '',
    isDisabled: true
  },

  data: function() {
    return {
      value: 0
    }
  }
}
</script>

<style scoped lang="scss">
input[type=range] {
  height: 27px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #25A95B;
  border-radius: 25px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 3px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #25A95B;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -7.5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #25A95B;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #C8E9D6;
  border-radius: 0.5em;
  border: 0px solid #000000;
}

input[type=range]::-moz-range-progress {
  background-color: #25A95B;
  height: 6px;
  border-radius: 0.5em;
}

input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 3px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #25A95B;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #25A95B;
  border: 0px solid #000000;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #25A95B;
  border: 0px solid #000000;
  border-radius: 50px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 3px solid #FFFFFF;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #25A95B;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #25A95B;
}
input[type=range]:focus::-ms-fill-upper {
  background: #25A95B;
}

.container {
  margin-left: 1em;
  margin-right: 1em;

  border-radius: 0.3em;
  padding: 1em;

  box-shadow:  0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  -moz-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  -webkit-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  -o-box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
</style>
