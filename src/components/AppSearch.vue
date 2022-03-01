<template>
  <div
    class="search-container-wrap"
    :class="{ 'search-container-wrap_dimming': isDimming == true }"
    @click.self="isDimming = false"
  >
    <div class="search-container" @mouseover="isDimming = true" @mouseleave="isDimming = false">
      <input
        tabindex="0"
        type="search"
        class="search-container__search"
        @click="isDimming = true"
        @focus="isDimming = true"
        placeholder="Enter city...."
      />
      <a
        href="#"
        class="search-container__btn search-container__btn_hover search-container__btn_focus"
        aria-label="Search"
      >
      </a>
    </div>
  </div>
  <Background />
</template>

<script setup>
import Background from "@/components/AppBackground.vue"
import { ref } from "vue"

const isDimming = ref(false)
</script>

<style scoped lang="sass">
.search-container-wrap
  display: flex
  width: 100%
  justify-content: center
  align-items: center
  min-height: 100vh
  transition: background-color .5s ease

  &_dimming
    background-color: rgba(0, 0, 0, 0.5)

.search-container
  display: grid
  grid-template-columns: minmax(100px, auto) 60px
  width: 700px
  height: 60px
  background-color: #fff
  border-radius: 10px
  box-shadow: 0 3px 6px 0.5px rgba(0, 0, 0, 18%)
  overflow: hidden
  outline: none
  margin: 0 20px
  transform: translateY(-40px)
  opacity: 0
  animation: slide-down .5s linear forwards

  @keyframes slide-down
    0%
      transform: translateY(-40px)
      opacity: 0
    100%
      transform: translateY(0px)
      opacity: 1

  &__search
    padding: 0 10px
    border: none
    @include font-style(normal, 1.7rem, "Roboto Condensed", $primary-color)
    outline: none
    caret-color: $accent-color

  &__btn
    border-radius: 10px
    border: none
    outline: none
    background: no-repeat center/50% url("../static/icons/search-accent-color.svg")
    cursor: pointer
    transition: all .5s linear

    &:is(&_hover:hover, &_focus:focus)
      background-color: $accent-color
      background-image: url("../static/icons/search.svg")
</style>
