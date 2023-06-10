<template>
  <the-hero />
  <the-form
    @submit="submitForm"
  />
  <the-footer />
</template>

<script setup>
import TheHero from '~/components/TheHero'
import TheForm from '~/components/TheForm'
import TheFooter from '~/components/TheFooter'

const submitForm = form => {
    console.log("form", form)
}
</script>
