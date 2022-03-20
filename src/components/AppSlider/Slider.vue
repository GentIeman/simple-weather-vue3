<template>
  <section class="slider">
    <ul class="slider__list">
      <Slide v-for="day in forecastDays" :key="day.id" :day="day" />
    </ul>
  </section>
</template>

<script setup>
import Slide from "@/components/AppSlider/Slide.vue"
import { forecastDays } from "@/modules/fetchWeather.js"
</script>

<style scoped lang="sass">
.slider
  width: 100%
  min-width: 300px
  height: auto

  &__list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    justify-items: center
    list-style: none
    position: relative
    gap: 0 30px
    margin: auto
    width: inherit
    overflow: hidden
    scroll-snap-type: x mandatory
    overflow-x: auto

    /* for Chrome */

    &::-webkit-scrollbar
      width: 4px
      height: 4px
      border-radius: 3px

    &::-webkit-scrollbar-thumb
      height: 30px
      background-color: $accent-color
      border-radius: 3px

    /* for Firefox */
    scrollbar-color: $accent-color transparent
    scrollbar-width: thin
</style>
