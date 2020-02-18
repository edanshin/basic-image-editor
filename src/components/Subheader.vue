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
  height: 4em;
  width: 4em;
  background-image: url("/img/avatar.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  margin-top: -3.8em;
  border: 0.13em solid #fff;
  left: 50%; transform: translate(-50%,0);
  position: absolute;
}
</style>
