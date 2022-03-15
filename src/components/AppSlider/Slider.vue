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
  display: flex
  width: 100%
  height: auto

  &__list
    display: grid
    grid-template-columns: repeat(3, 1fr)
    justify-items: center
    list-style: none
    position: relative
    gap: 0 30px
    margin: auto
    min-width: 100%
    width: 300px
    overflow: hidden
    scroll-snap-type: x mandatory
    overflow-x: auto
</style>
