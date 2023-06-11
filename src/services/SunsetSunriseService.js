import axios from 'axios'

export default class SunsetSunriseService {
    constructor(
        // Madrid's latitude and longitude coordinates
        lat = 40.416775,
        lng = -3.703790,
    ) {
        this.api = axios
        this.baseUrl = "https://api.sunrisesunset.io/json?"
        this.lat = lat
        this.lng = lng
    }

    async fetch(date) {
        try {
            const response = await this.api.get(`${this.baseUrl}lat=${this.lat}&lng=${this.lng}&date=${date}`)
            const { results } = response.data

            delete results.timezone
            delete results.utc_offset

            return results
        } catch (error) {
            console.error(error)
        }
    }
}