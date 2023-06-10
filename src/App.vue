<template>
  <the-hero />
  <the-form
    :results="results"
    @submit="submitForm"
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

const submitForm = async form => {
    const response = await service.fetch({ type: form.type })
    results.value = response
}
</script>
