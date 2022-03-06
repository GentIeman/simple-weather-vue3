import { referenceError } from "./referenceError"

export const fetchWeather = async (city) => {
  try {
    let res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=3`
    )
      .then((data) => data.json())
      .catch((err) => console.error(err))

    if (res.error) {
      await referenceError(res.error)
    }
    return res
  } catch (err) {
    console.error(err)
  }
}
