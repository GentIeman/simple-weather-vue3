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

<style scoped lang="sass"></style>
