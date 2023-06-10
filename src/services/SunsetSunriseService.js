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

    async fetch({ type }) {
        const response = await this.api.get(`${this.baseUrl}lat=${this.lat}&lng=${this.lng}&date=1990-05-22`)
        const { results } = response.data

        delete results.timezone
        delete results.utc_offset

        if (type) {
            return { [type]: results[type] }
        } else {
            return results
        }
    }
}