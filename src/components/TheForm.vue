<template>
<section class="bg-gray-200 text-gray-900 sm:p-20">
  <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-6">
        <h1 class="text-tgtg text-5xl mb-4 font-bold sm:text-6xl">Calendar</h1>

        <p class="max-w-xl text-lg">
          At the same time, the fact that we are wholly owned and totally
          independent from manufacturer and other group control gives you
          confidence that we will only recommend what is right for you.
        </p>
      </div>

      <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form @submit.prevent="submitForm" class="space-y-4">
            <label class="sr-only" for="name">Name</label>
            <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
            />

            <label class="sr-only" for="name">Name</label>

            <select
                v-model="typeSelected"
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
            >
                <option value="" disabled>Select type:</option>
                <option v-for="option in typeOptions">{{ option }}</option>
            </select>

            <div class="flex">
                <input
                    type="checkbox"
                    class="rounded mr-2 mt-1"
                    v-model="termsAccepted"
                    required
                >
                <label>I accept the terms and conditions.</label>
            </div>

            <button
              type="submit"
              class="inline-block w-full rounded-lg bg-tgtg px-5 py-3 font-medium text-white sm:w-auto"
            >
              Get results
            </button>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            typeOptions: [
                "Sunrise",
                "Sunset",
                "Dawn",
                "Dusk",
                "First light",
                "Last light",
                "Golden hour"
            ],
            typeSelected: null,
            termsAccepted: false,
        }
    },

    emits: ['submit'],

    methods: {
        submitForm() {
            this.$emit('submit', {
                type: this.typeSelected,
            })
        }
    }
}
</script>