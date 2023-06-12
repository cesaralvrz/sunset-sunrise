<template>
	<footer class="px-4 bg-gray-800 text-gray-100">
		<p class="py-6 text-sm text-center text-gray-400">Copyright © {{ date }} - César Álvarez Llaneza</p>
	</footer>
</template>

<script>
export default {
    computed: {
        date() {
            return new Date().getFullYear()
        }
    }
}
</script>
