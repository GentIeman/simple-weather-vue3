<template>
  <section class="background-blur"></section>
</template>

<script>
export default {
  name: "AppBackground"
}
</script>

<style scoped lang="sass">
.background-blur
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: no-repeat center / 90% url("@/static/icons/background.svg")
  z-index: -1
</style>