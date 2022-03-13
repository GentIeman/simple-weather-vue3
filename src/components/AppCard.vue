<template>
  <section v-if="isLoadedData" class="card-container">
    {{ weather }}
    <section class="card">
      <div class="card__main-info">
        <h2 class="card__location">{{ weather.location.name }}</h2>
        <div class="card__temp">
          {{ roundedDataParams(weather.current.temp_c) }}
        </div>
        <div class="card__other-info">
          <p class="card__condition">{{ weather.current.condition.text }}</p>
          <p class="card__feels-like">
            {{ roundedDataParams(weather.current.feelslike_c) }}
          </p>
        </div>
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
    width: 100%
    height: 100%
    background-color: #fff
    border-radius: inherit
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px 0px inset
</style>
