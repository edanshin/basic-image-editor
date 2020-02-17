<template>
  <div id="main">
    <Header></Header>
    <Subheader></Subheader>
    <ImageEditor></ImageEditor>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Subheader from '../components/Subheader.vue'
import ImageEditor from '../components/ImageEditor.vue'

export default {
  name: 'Main',
  components: {
    Header,
    Subheader,
    ImageEditor
  }
}
</script>

<style lang="scss">
body {
  background-color: #262626;
}

#main {
  background-color: #FFFFFF;
}

@media screen and (min-width: 1920px) {
  #main {
    width: 20%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1440px) and (max-width: 1919px) {
  #main {
    width: 40%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1439px) {
  #main {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (min-width: 600px) and (max-width: 1023px) {
  #main {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media screen and (max-width: 599px) {
  #main {
    width: 100%;
  }
}
</style>
