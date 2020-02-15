<template>
  <div id="app">
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

</style>
