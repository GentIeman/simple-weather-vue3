<template>
  <section
    class="search-container-wrap"
    :class="{ 'search-container-wrap_dimming': isDimming === true }"
    @click.self="isDimming = false"
  >
    <transition
      name="fade-down"
      appear
      appear-active-class="fade-down-enter-active"
    >
      <div
        class="search-container"
        :class="{ 'search-container_swing': isWarning === true }"
        @mouseover="isDimming = true"
        @mouseleave="isDimming = false"
      >
        <input
          v-model="location"
          tabindex="0"
          type="search"
          class="search-container__search"
          placeholder="Location"
          @keyup.enter="sendLocation"
          @focus="isDimming = true"
        />
        <a
          href="#"
          class="search-container__btn search-container__btn_hover search-container__btn_focus search-container__btn_active"
          aria-label="Search"
          @click="sendLocation"
        ></a>
      </div>
    </transition>
    <Tooltip v-if="isWarning && isDimming === true" />
  </section>
</template>

<script setup>
import Tooltip from "@/components/AppTooltip.vue"
import { computed, ref } from "vue"
import { isWarning } from "@/modules/fetchWeather.js"
import { useRouter } from "vue-router"

const router = useRouter()

const location = ref("")
let isDimming = ref(false)

const locationNormalize = computed(() => {
  return location.value.trim().toLowerCase()
})

const sendLocation = () => {
  if (locationNormalize.value.length > 1) {
    router.push(`/location/${locationNormalize.value}`)
  }
  location.value = ""
}
</script>

<style scoped lang="sass">
.search-container-wrap
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  top: 0
  left: 0
  width: 100%
  min-height: 100%
  transition: background-color .3s linear

  &_dimming
    background: rgba(0, 0, 0, 0.5)

.search-container
  display: grid
  grid-template-columns: minmax(100px, auto) 60px
  width: 700px
  height: 60px
  position: relative
  background-color: #fff
  border-radius: 10px
  box-shadow: 0 3px 6px 0.5px rgba(0, 0, 0, 18%)
  overflow: hidden
  outline: none
  margin: 0 20px
  transform: translateY(0)
  opacity: 1
  z-index: 1

  &_swing
    animation: swing 1s ease
    box-shadow: 0 0 1px 2.5px $accent-color

    @media (prefers-reduced-motion: reduce)
      &
        animation: none

    @keyframes swing
      15%
        transform: translateX(10px)
      30%
        transform: translateX(-10px)
      50%
        transform: translateX(7px)
      65%
        transform: translateX(-7px)
      80%
        transform: translateX(5px)
      100%
        transform: translateX(0)

  &__search
    padding: 0 10px
    border: none
    @include font-style(normal, 1.7rem, "Roboto Condensed", $primary-color)
    outline: none
    caret-color: $accent-color

    /* for Safari */
    background-color: #fff

  &__btn
    border-radius: 10px
    border: none
    outline: none
    background: no-repeat center/50% url("../static/icons/search-accent-color.svg")
    cursor: pointer
    transition: all .5s ease

    &:is(&_hover:hover, &_focus:focus, &_active:active)
      background-color: $accent-color
      background-image: url("../static/icons/search.svg")
      color: #fff


.fade-down-enter-active
  animation: fade-down 1s ease

@media (prefers-reduced-motion: reduce)
  .fade-down-enter-active
    animation: none

@keyframes fade-down
  from
    opacity: 0.5
    transform: translateY(-40px)

  to
    opacity: 1
    transform: translateY(0)
</style>
