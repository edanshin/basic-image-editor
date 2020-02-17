<template>
  <div>
    <img src="/img/header.png" class="subheader">
    <div class="avatar"></div>
  </div>
</template>

<script>
export default {
  name: 'Subheader',
  props: {
    background: String,
    avatar: String
  }
}
</script>

<style scoped lang="scss">
.subheader {
  width: 100%;
}

.avatar {
  height: 5em;
  width: 5em;
  background-image: url("/img/avatar.png");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-top: -6em;
  border: 0.3em solid #fff;
  margin-left: auto;
  margin-right: auto;
}
</style>
