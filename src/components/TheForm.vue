<template>
<section class="bg-gray-200 text-gray-900 sm:p-20">
  <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:py-6">
        <h1 class="text-tgtg text-5xl mb-4 font-bold sm:text-6xl">Calendar</h1>

        <div
            v-if="results"
            class="max-w-xl text-xl ml-2">
            <p>Results:</p>
            <p
                v-for="(time, type) in cookedResults"
                class="capitalize"
            >
                • {{ cookedType(type) }}: {{ time }}
            </p>
        </div>

        <div
            v-else
            class="max-w-xl text-xl"
        >
            <p class="my-4">Enter the necessary data, accept the terms and conditions and hit the 'Get results' button to display the results.</p>
            <p class="my-4">You can only select a type once the results have been retrieved.</p>
            <p>You can also reset values to default with the 'Reset values' button.</p>
        </div>
      </div>

      <div class="rounded-lg text-stone-900 bg-white p-8 mb-8 shadow-lg lg:col-span-3 lg:p-12">
        <form @submit.prevent="submitForm" class="space-y-4">
            <label for="day" class="text-base">Choose day</label>

            <vue-date-picker
                v-model="date"
                class="pb-6"
                :enable-time-picker="false"
                model-type="yyyy-MM-dd"
                required
            />

            <label for="day" class="text-base">Choose type</label>

            <select
                v-model="typeSelected"
                :disabled="!results"
                class="w-full rounded-lg border-gray-200 p-2 text-sm"
            >
                <option value="" disabled>Select type:</option>
                <option
                    v-for="option in typeOptions"
                    v-bind:value="option.value"
                >
                    {{ option.text }}
                </option>
            </select>

            <div class="flex py-4">
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
              class="rounded-lg bg-tgtg w-full h-12 font-semibold text-white"
            >
              Get results
            </button>
        </form>

        <button
            class="rounded-lg text-stone-900 bg-tgtg-secondary w-full h-12 mt-4 font-semibold"
            @click="resetValues"
        >
            Reset Values
        </button>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default {
    components: {
        VueDatePicker,
    },

    props: {
        results: {
            type: Object,
            default: null,
        }
    },

    data() {
        return {
            typeOptions: [
                { text: "Sunrise", value: "sunrise" },
                { text: "Sunset", value: "sunset" },
                { text: "Dawn", value: "dawn" },
                { text: "Dusk", value: "dusk" },
                { text: "First light", value: "first_light" },
                { text: "Last light", value: "last_light" },
                { text: "Golden hour", value: "golden_hour" },
            ],
            date: null,
            typeSelected: null,
            termsAccepted: false,
        }
    },

    emits: ['reset-values', 'submit'],

    computed: {
        cookedResults() {
            if (this.typeSelected) {
                return { [this.typeSelected]: this.results[this.typeSelected] }
            } else {
                return this.results
            }
        }
    },

    methods: {
        submitForm() {
            this.$emit('submit', this.date)
        },

        resetValues() {
            this.date = null
            this.typeSelected = null
            this.$emit('reset-values')
        },

        cookedType(type) {
            if (type.includes("_")) {
                return type.replace(/_/g, " ")
            } else {
                return type
            }
        }
    }
}
</script>