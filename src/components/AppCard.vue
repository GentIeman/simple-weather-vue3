<template>
  <section v-if="isLoadedData" class="card-container">
    <section class="card">
      <div class="card__main-info">
        <h2 class="card__location">{{ weather.location.name }}</h2>
        <div class="card__temp">
          <img
            :src="weather.current.condition.icon"
            alt="Weather icon"
            width="60"
            height="60"
          />
          {{ roundedDataParams(weather.current.temp_c) }}°
        </div>
        <div class="card__other-info">
          <p class="card__condition">{{ weather.current.condition.text }}</p>
          <p class="card__feels-like">
            feels like {{ roundedDataParams(weather.current.feelslike_c) }}°
          </p>
        </div>
        <ul class="card__list">
          <li class="card__item">
            {{ roundedDataParams(weather.current.wind_mph) }}m/s
          </li>
          <li class="card__item">{{ weather.current.humidity }}%</li>
          <li class="card__item">{{ weather.current.pressure_mb }}hPa</li>
        </ul>
      </div>
    </section>
  </section>
  <Background />
</template>

<script setup>
import Background from "@/components/AppBackground.vue"
import { weather, fetchWeather, isLoadedData } from "../modules/fetchWeather.js"

const roundedDataParams = (item) => {
  return Math.round(item)
}
fetchWeather("moscow")
</script>

<style scoped lang="sass">
.card-container
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  min-height: 100%
  position: fixed
  top: 0
  left: 0

.card
  display: grid
  grid-template-rows: repeat(2, 1fr)
  width: 1200px
  height: 588px
  margin: 0 30px
  background: linear-gradient(90deg, #EBF4F5, hsla(216, 41%, 79%, 1) 100%)
  border-radius: 10px
  padding: 30px

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

  &__temp
    display: flex
    justify-content: center
    gap: 0 5px
    grid-row: 2 / 3
    padding: 20px 0
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
    @include font-style(normal, 1.4rem, "Sergio UI", #333)

  &__feels-like
    @include font-style(normal, 1.2rem, "Sergio UI", #AEAEAE)

  &__list
    display: flex
    grid-row: 3 / 4
    grid-column: 1 / span 3
    list-style: none

  &__item
    display: flex
    align-items: center
    margin-right: 10px
    @include font-style(normal, 1.2rem, "Sergio UI", #AEAEAE)

    &:last-child
      margin-right: 0

    &:before
      content: ''
      position: relative
      margin-right: 8px
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

  @media screen and (max-width: 426px)
    &__list
      flex-direction: column
      gap: 10px 0
</style>
