import { referenceError } from "./referenceError"
import { ref } from "vue"

let isWarning = ref(false)
let isLoadedData = ref(false)
let weather = ref(null)

const fetchWeather = async (city) => {
  try {
    let res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_API_KEY
      }&q=${city}&days=3`
    )
      .then((data) => data.json())
      .catch((err) => console.error(err))

    if (res.error) {
      if (res.error.code === 1006) {
        isWarning.value = true
      }
      referenceError(res.error)
    }
    weather.value = res
    isLoadedData.value = true
  } catch (err) {
    console.error(err)
  }
}
export { isWarning, fetchWeather, weather, isLoadedData }
