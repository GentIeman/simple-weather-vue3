<template>
  <section v-if="isLoadedData" class="card-container">
    <section class="card">
      <div class="card__main-info">
        <h2 class="card__location">{{ currentWeather.location.name }}</h2>
        <div class="card__current-weather">
          <img
            :src="'https:' + currentWeather.current.condition.icon"
            alt="Weather icon"
            width="55"
            height="55"
          />
          <p class="card__temp">
            {{ roundingWeatherParams(currentWeather.current.temp_c) }}°
          </p>
        </div>
        <div class="card__other-info">
          <p class="card__condition">
            {{ currentWeather.current.condition.text }}
          </p>
          <p class="card__feels-like">
            feels like
            {{ roundingWeatherParams(currentWeather.current.feelslike_c) }}°
          </p>
        </div>
        <ul class="card__list">
          <li class="card__item">
            {{ (currentWeather.current.wind_kph * 0.27).toFixed(2) }}m/s
          </li>
          <li class="card__item">{{ currentWeather.current.humidity }}%</li>
          <li class="card__item">
            {{
              roundingWeatherParams(currentWeather.current.pressure_mb * 0.75)
            }} mmHg
          </li>
        </ul>
      </div>
      <Slider />
    </section>
  </section>
</template>

<script setup>
import Slider from "@/components/AppSlider/Slider.vue"
import {
  currentWeather,
  isLoadedData,
  fetchWeather
} from "@/modules/fetchWeather.js"

import { roundingWeatherParams } from "@/modules/roundingWeatherParams.js"
import { useRouter } from "vue-router"

const router = useRouter()

const props = defineProps({
  location: {
    type: String,
    required: true
  }
})

const redirectHome = async () => {
  if (!(await fetchWeather(props.location))) {
    await router.push({
      name: "search",
      params: { isWarning: "true" }
    })
  }
}
redirectHome()
</script>

<style scoped lang="sass">
.card-container
  display: flex
  justify-content: center
  align-items: center
  position: absolute
  top: 0
  left: 0
  width: 100%
  min-height: 100%

.card
  display: grid
  grid-template-rows: repeat(2, 1fr)
  width: 1000px
  min-height: 588px
  margin: 30px
  background: linear-gradient(90deg, #EBF4F5, hsla(216, 41%, 79%, 1) 100%)
  border-radius: 10px
  padding: 30px
  gap: 30px 0

  &__main-info
    display: grid
    grid-template-rows: repeat(3, max-content)
    grid-template-columns: repeat(2, max-content)
    align-content: center
    width: 100%
    height: 100%
    padding: 30px
    background-color: #fff
    border-radius: inherit
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px 0px inset

  &__location
    grid-column: 1 / span 2
    @include font-style(bold, 2rem, "Sergio UI", $accent-color)

  &__current-weather
    display: flex
    justify-content: center
    align-items: center
    gap: 0 5px
    grid-row: 2 / 3
    padding: 20px 0

  &__temp
    @include font-style(bold, 3rem, "Sergio UI", #333)

  &__other-info
    display: flex
    flex-direction: column
    justify-content: center
    align-content: center
    grid-row: 2 / 3
    padding-left: 30px
    gap: 4px 0

  &__condition
    width: max-content
    @include font-style(normal, 1.6rem, "Sergio UI", #333)

    @media screen and (max-width: 465px)
      &
        width: 150px

  &__feels-like
    @include font-style(normal, 1.2rem, "Sergio UI", #AEAEAE)

  &__list
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr))
    gap: 10px 0
    grid-row: 3 / 4
    grid-column: 1 / 2
    list-style: none

  &__item
    display: flex
    align-items: center
    @include font-style(normal, 1rem, "Sergio UI", #AEAEAE)

    &:last-child
      margin-right: 0

    &:before
      content: ''
      position: relative
      margin-right: 10px
      width: 25px
      height: 25px
      background-repeat: no-repeat
      background-position: center
      background-size: 80%

    &:nth-child(1):before
      background-image: url("../static/icons/wind.svg")

    &:nth-child(2):before
      background-image: url("../static/icons/humidity.svg")

    &:nth-child(3):before
      background-image: url("../static/icons/pressure.svg")
</style>
