<template>
  <the-hero />
  <the-form
    :results="results"
    @submit="submitForm"
    @reset-values="resetValues"
  />
  <the-footer />
</template>

<script setup>
import { ref } from 'vue'

import TheHero from '~/components/TheHero'
import TheForm from '~/components/TheForm'
import TheFooter from '~/components/TheFooter'
import SunsetSunriseService from "~/services/SunsetSunriseService"

const service = new SunsetSunriseService()

const results = ref(null)

const submitForm = async date => {
    const response = await service.fetch(date)
    results.value = response
}

const resetValues = () => {
    results.value = null
}
</script>
