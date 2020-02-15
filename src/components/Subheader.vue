<template>
  <div>
    <div class="subheader"></div>
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
  height: 15em;
  background-image: url("/img/header.png");
  background-size: cover;
  background-position: center;
}

.avatar {
  height: 7em;
  width: 7em;
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
