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
  margin-top: 30px
  width: 100%
  height: auto

  &__list
    display: flex
    justify-content: space-around
    list-style: none

  &__card
    width: 231px
    height: 250px
    background-color: #fff
    border-radius: 10px
</style>
