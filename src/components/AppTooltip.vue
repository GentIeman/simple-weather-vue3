<template>
  <section class="tooltip">
    <header class="tooltip__header">
      <h2 class="tooltip__warning">Upps.... No matching location found!</h2>
    </header>
  </section>
</template>

<script setup></script>

<style scoped lang="sass">
.tooltip
  width: max-content
  position: absolute
  padding: 10px 30px
  border: dashed 2px #fff
  border-radius: 10px
  opacity: 1
  transform: translateY(0)
  user-select: none
  z-index: 0
  animation: slide-up .5s linear forwards

  @keyframes slide-up
    0%
      transform: translateY(0)
      opacity: 0
    100%
      transform: translateY(-80px)
      opacity: 1

  &__header
    position: relative

  &__warning
    @include font-style(normal, 1.2rem, "Roboto Condensed", #fff)
</style>
