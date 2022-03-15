<template>
  <li class="slide">
    <header class="slide__header">
      <h2 class="slide__day"></h2>
      <time class="slide__date">{{ gettingDate(day.date) }}</time>
    </header>
    <div class="slide__weather">
      <img :src="day.day.condition.icon" alt="" width="64" height="64" />
      <p class="slide__temp">{{ roundingWeatherParams(day.day.maxtemp_c) }}°</p>
    </div>
    <footer class="slide__footer">
      <p class="slide__condition">{{ day.day.condition.text }}</p>
      <p class="slide__night">
        At night: {{ roundingWeatherParams(day.day.mintemp_c) }}°
      </p>
    </footer>
  </li>
</template>

<script setup>
import { roundingWeatherParams } from "@/modules/roundingWeatherParams.js"

const props = defineProps({
  day: {
    type: Object,
    required: true
  }
})

const gettingDate = (item) => {
  return new Date(item).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })
}
</script>

<style scoped lang="sass">
.slide
  display: grid
  width: 200px
  min-height: 240px
  padding: 20px
  background-color: #fff
  border-radius: 10px
  word-break: break-word
  gap: 10px 0

  &__day
    @include font-style(bold, 1.3rem, "Sergio UI", $accent-color)

  &__date
    @include font-style(normal, 1rem, "Sergio UI", #AEAEAE)

  &__weather
    display: flex
    justify-content: center
    align-items: center

  &__temp
    @include font-style(bold, 2.4rem, "Sergio UI", $primary-color)

  &__condition
    @include font-style(normal, 1.2rem, "Sergio UI", $primary-color)

  &__night
    padding-top: 5px
    @include font-style(normal, 1rem, "Sergio UI", #AEAEAE)
</style>
