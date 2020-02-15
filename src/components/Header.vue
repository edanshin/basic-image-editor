<template>
  <div class="header">
    <b class="title">Brightness & Contrast Developer Test</b>
    <p class="subtitle">01 Jun, 2018 - 31 Dec, 2019</p>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style scoped lang="scss">
.header {
    background-color: #7344C0;
    padding-top: 1em;
    padding-bottom: 1em;
}

.title, .subtitle {
    color: white;
}

.title {
  
}

.subtitle {
  margin-top: 0.5em;
}
</style>
